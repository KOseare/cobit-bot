const socketIo = require("socket.io");
const {getInfoBot} = require("./utils/botTrainer");
const testDataTemplate = require("./lib/testDataTemplate");
const {deeplyObjectCopy} = require("./utils/deeplyCopy");

const {insertResult} = require("./database/crud/results");
const {insertLocation} = require("./database/crud/locations");

const verifyTestStart = (test, botProcess, answers) => {
    if(botProcess.intent === "covid.sintomas" || botProcess.intent === "covid.test"){
        answers.push(`Si cree que pudo haber contraído COVID-19, tenemos un test para que pueda saberlo. \n ¿Quiere iniciar el test?`);            
        test.prepare = true;
    }
    else if(test.prepare){
        if(botProcess.intent === "respuesta.negativa"){
            answers[0] = ["Bien, si no quiere hacer el test puede seguir haciendome preguntas."];
        }
        else if(botProcess.intent === "respuesta.afirmativa"){
            answers[0] = ["Bien empezemos."];
            test.start = true;
        }
        test.prepare = false;
    }
};
const getTestResult = (testData) => {
    let result = 0;
    for(let i = 0; i < testData.symptoms.length; i++){
        result += testData.symptoms[i].finalAnswer;
    }
    return (result / testData.symptoms.length) * 100;
}

module.exports = (server) => {
    getInfoBot().then(bot => {

        const io = socketIo(server, {origins: "*:*"});
        const sessionData = {};

        io.on("connection", (socket) => {
            console.log("New connection:", socket.id);
            sessionData[socket.id] = {
                test: {prepare: false, start: false},
                testData: deeplyObjectCopy(testDataTemplate)
            }
            let {test, testData} = sessionData[socket.id];

            socket.on("chat:message", async(data) => {
                const botProcess = await bot.process("es", data.message);
                console.log(botProcess);
                let answers = []; 
                if(!botProcess.answer){
                    if(botProcess.answer !== ""){
                        answers.push("No entiendo, por favor reformule su pregunta.");
                    }
                }
                else{
                    answers.push(botProcess.answer);
                }


                if(!test.start){
                    verifyTestStart(test, botProcess, answers);
                }
                socket.emit("chat:message", {messages: answers});

                //COMIENZA EL TEST---
                if(test.start){
                    // answers.push("El test todavía esta en desarrollo, por favor haga otras preguntas.");
                    // test.start = false;
                    console.log("TESTDATA", JSON.stringify(testData, undefined, 2));

                    socket.emit("chat:test", testData.symptoms[testData.index]);
                }
            });

            socket.on("chat:test", (data) => {
                testData.symptoms[testData.index++].finalAnswer = data.answer;

                if(testData.index < testData.symptoms.length){
                    socket.emit("chat:test", testData.symptoms[testData.index]);
                }
                else{
                    const endTestData = {
                        testEnd: true, 
                        covidPercentage: getTestResult(testData)
                    }
                    if(endTestData.covidPercentage === 100) --endTestData.covidPercentage;
                    if(endTestData.covidPercentage >= 80){
                        endTestData.messages = ["Por favor aíslese en su casa e informe de su situación llamando al 107, al 0800-222-1002 o al número de asistencias establecido para su localidad."]
                    }

                    socket.emit("chat:test", endTestData);

                    //Saving result-------
                        const symptoms = sessionData[socket.id].testData.symptoms.map(({name, finalAnswer}) => ({
                            name,
                            finalAnswer
                        }));
                        insertResult(symptoms, endTestData.covidPercentage)
                            .then(data => {
                                console.log("saved", data);
                                socket.emit("chat:location", {_id: data._id});
                            })
                            .catch(err => {
                                console.log("Error saving result", err);
                            });
                    //--------------------

                    testData = deeplyObjectCopy(testDataTemplate);
                    test.start = false;
                }
            })

            socket.on("chat:location", ({id, lat, long}) => {
                insertLocation(id, lat, long)
                    .then(data => {
                        console.log("saved location", data);
                    })
                    .catch(err => {
                        console.log("error saving location", err);
                    });
            });

            socket.on("disconnect", () => {
                delete sessionData[socket.id];
            })
        });


    })
    
}
