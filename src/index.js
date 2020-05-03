const cors = require("cors");
const path = require("path");
const socketConnection = require("./socketConnection");
const express = require("express");

const app = express();

//config
app.set("port", process.env.PORT || 5500);
app.use(cors());
app.use(express.static(path.join(__dirname, "public", "build")));

//start server
const server = app.listen(app.get("port"), () => {
    console.log("Server running on port:", app.get("port"));
});

//----
socketConnection(server);


