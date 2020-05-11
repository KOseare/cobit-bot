const { Schema, model, ObjectId} = require("mongoose");

const SchemaLocations = new Schema({
    _id: ObjectId,
    latitude: Number,
    longitude: Number
}, {_id: false});

module.exports = model("Locations", SchemaLocations);