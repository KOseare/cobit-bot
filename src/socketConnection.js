const socketIo = require("socket.io");
const {getInfoBot} = require("./utils/botTrainer");

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
}

module.exports = (server) => {
    getInfoBot().then(bot => {

        const io = socketIo(server, {origins: "*:*"});

        io.on("connection", (socket) => {
            console.log("New connection:", socket.id);
            const test = {prepare: false, start: false};

            socket.on("chat:message", async(data) => {
                const botProcess = await bot.process("es", data.message);
                console.log(botProcess);
                let answers = [botProcess.answer || "No entiendo, por favor reformule su pregunta."]; 

                if(!test.start){
                    verifyTestStart(test, botProcess, answers);
                }
                if(test.start){
                    answers.push("El test todavía esta en desarrollo, por favor haga otras preguntas.");
                    test.start = false;
                }
                socket.emit("chat:message", {messages: answers});
            });
        });


    })
    
}
