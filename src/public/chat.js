const socket = io();

const sendBtn = document.getElementById("sendBtn");
const textInput = document.getElementById("textInput");
const dialogBox = document.getElementById("dialogBox");

sendBtn.addEventListener("click", () => {
    socket.emit("chat:message", {
        message: textInput.value
    });
    dialogBox.innerHTML += `<div class="messageContainer"><p class="message messageUser">Yo: ${textInput.value}</p></div>`;
    dialogBox.scrollTop = dialogBox.scrollHeight;
});
textInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendBtn.click();
    }
});

socket.on("chat:message", (data) => {
    dialogBox.innerHTML += `<div class="messageContainer"><p class="message messageChatbot">ChatBot: ${data.message}</p></div>`;
    dialogBox.scrollTop = dialogBox.scrollHeight;
});

