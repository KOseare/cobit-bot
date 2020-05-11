const { Schema, model }=require("mongoose");
const SchemaResults = new Schema({
    symptoms: [{
        _id: false,
        name: String, 
        finalAnswer: Number
    }],
    finalResult: Number
});

module.exports=model('Results', SchemaResults);