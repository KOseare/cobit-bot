const Result = require("../models/Results");

const insertResult = (symptoms, finalResult) => {
    const result = new Result({
        symptoms,
        finalResult
    });

    return result.save();
}

const getResults = (sessionId) => {
    const query = {};
    if(typeof sessionId === "string"){
        query._id = sessionId;
    }

    return Result.find(query);
}

module.exports = {insertResult, getResults};