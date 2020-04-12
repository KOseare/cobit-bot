const socket = io();

const sendBtn = document.getElementById("sendBtn");
const textInput = document.getElementById("textInput");
const dialogBox = document.getElementById("dialogBox");

sendBtn.addEventListener("click", () => {
    socket.emit("chat:message", {
        message: textInput.value
    });
    dialogBox.innerHTML += `<p>Yo: ${textInput.value}</p>`;
});

socket.on("chat:message", (data) => {
    dialogBox.innerHTML += `<p>ChatBot: ${data.message}</p>`;
});

