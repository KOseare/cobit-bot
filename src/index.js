require("dotenv").config();
const cors = require("cors");
const path = require("path");
const socketConnection = require("./socketConnection");
const express = require("express");
require("./database/connection");
const {getLocations} = require("./database/crud/locations");
const {getResults} = require("./database/crud/results");
const ObjectID = require("mongoose").mongo.ObjectID;

const app = express();

//config
app.set("port", process.env.PORT || 5500);
app.use(cors({
    origin: 'http://localhost',
    optionsSuccessStatus: 200
}));
app.use(express.static(path.join(__dirname, "public", "build")));

app.get("/data/locations", async(req, res) => {
    try{
        const locations = await getLocations();
        const results = await getResults({}, {_id: true, finalResult: true});
        console.log("results", results);

        let newLocations = locations.map(location => {
            const iResult = results.findIndex(result => location._id.equals(result._id));
            // console.log(results.splice(iResult, 1)[0].finalResult)
            // location.finalResult = results.splice(iResult, 1)[0].finalResult;
            return {
                _id: location._id,
                latitude: location.latitude,
                longitude: location.longitude,
                finalResult: results.splice(iResult, 1)[0].finalResult
            };
        });

        console.log(newLocations);
        res.send({locations: newLocations});
    }catch(err){
        // console.log(err);
        res.send({err, locations: []});
    };
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"));
})

//start server
const server = app.listen(app.get("port"), () => {
    console.log("Server running on port:", app.get("port"));
});

//----
socketConnection(server);


