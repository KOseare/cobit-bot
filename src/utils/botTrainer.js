const path = require("path");
const {dockStart} = require("@nlpjs/basic");

const getInfoBot = async () => {
    const dock = await dockStart({ use: ["Basic", "LangEs"] });
    const infoBot = dock.get("nlp");
    await infoBot.addCorpus(path.join(__dirname, "..", "lib", "trainData_covid19.json"));
    await infoBot.train();
    return infoBot;
}

module.exports = {getInfoBot};