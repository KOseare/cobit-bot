const cors = require("cors");
const path = require("path");
const fs = require("fs");
const socketConnection = require("./socketConnection");
const express = require("express");
const {dockStart} = require("@nlpjs/basic");

const app = express();

//config
app.set("port", process.env.PORT || 5500);
app.use(cors());
app.use(express.static(path.join(__dirname, "public", "build")));


//start server
const server = app.listen(app.get("port"), () => {
    console.log("Server running on port:", app.get("port"));
});

//Training bot
(async() =>{
    const dock = await dockStart({ use: ["Basic", "LangEs"] });
    const nlp = dock.get("nlp");
    await nlp.addCorpus(path.join(__dirname, "lib", "trainData_covid19.json"));
    await nlp.train();

    socketConnection(server, nlp);
})();


