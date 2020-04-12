const socketIo = require("socket.io");


module.exports = (server) => {
    const io = socketIo(server, {origins: "*:*"});

    io.on("connection", (socket) => {
        console.log("New connection:", socket.id);

        socket.on("chat:message", (data) => {
            data.message = `Received ${data.message}`;
            socket.emit("chat:message", data);
        });
    });
}
