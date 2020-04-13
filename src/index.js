const cors = require("cors");
const path = require("path");
const socketConnection = require("./socketConnection");
const express = require("express");
const {NlpManager} = require("node-nlp");
const trainData = require("./lib/trainData");

const app = express();

//config
app.set("port", process.env.PORT || 5500);
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


//start server
const server = app.listen(app.get("port"), () => {
    console.log("Server running on port:", app.get("port"));
});

//Training bot
const manager = new NlpManager({languages: ["es"]});
trainData.examples.forEach(example => {
    manager.addDocument("es", example.text, example.label);
});
trainData.answers.forEach(answer => {
    manager.addAnswer("es", answer.label, answer.text);
});

(async() =>{
    await manager.train();
    manager.save();

    socketConnection(server, manager);
})();


