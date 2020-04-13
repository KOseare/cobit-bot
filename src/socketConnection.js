const socketIo = require("socket.io");


module.exports = (server, bot) => {
    const io = socketIo(server, {origins: "*:*"});

    io.on("connection", (socket) => {
        console.log("New connection:", socket.id);

        socket.on("chat:message", async(data) => {
            const botProcess = await bot.process("es", data.message);
            console.log(botProcess);
            const answer = botProcess.answer || "No entiendo"; 
            socket.emit("chat:message", {message: answer});
        });
    });
}
