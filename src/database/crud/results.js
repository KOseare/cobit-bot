const Result = require("../models/Results");

const insertResult = (symptoms, finalResult) => {
    const result = new Result({
        symptoms,
        finalResult
    });

    return result.save();
}

const getResults = (query, projection) => {
    return Result.find(query, projection);
}

module.exports = {insertResult, getResults};