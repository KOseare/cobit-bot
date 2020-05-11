const Location = require("../models/Locations");

const insertLocation = (id, lat, long) => {
    const location = new Location({
        _id: id,
        latitude: lat,
        longitude: long
    });
    return location.save();
}

const getLocations = () => {
    return Location.find();
}

module.exports = {insertLocation, getLocations};