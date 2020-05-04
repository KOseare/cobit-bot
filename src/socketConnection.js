const socketIo = require("socket.io");
const {getInfoBot} = require("./utils/botTrainer");
const testDataTemplate = require("./lib/testDataTemplate");
const {deeplyObjectCopy} = require("./utils/deeplyCopy");

const verifyTestStart = (test, botProcess, answers) => {
    if(botProcess.intent === "covid.sintomas"){
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
                let answers = [botProcess.answer || "No entiendo, por favor reformule su pregunta."]; 

                if(!test.start){
                    verifyTestStart(test, botProcess, answers);
                }
                socket.emit("chat:message", {messages: answers});

                //COMIENZA EL TEST---
                if(test.start){
                    // answers.push("El test todavía esta en desarrollo, por favor haga otras preguntas.");
                    // test.start = false;
                    console.log("TESTDATA", JSON.stringify(sessionData, undefined, 2));
                    socket.emit("chat:test", testData.symptoms[testData.index]);
                }
            });

            socket.on("chat:test", (data) => {
                testData.symptoms[testData.index++].finalAnswer = data.answer;

                if(testData.index < testData.symptoms.length){
                    socket.emit("chat:test", testData.symptoms[testData.index]);
                }
                else{
                    socket.emit("chat:test", {testEnd: true, covidPercentage: getTestResult(testData)});
                    sessionData[socket.id].testData = {...testDataTemplate};
                    test.start = false;
                }
            })

            socket.on("disconnect", () => {
                delete sessionData[socket.id];
            })
        });


    })
    
}
