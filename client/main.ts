const messageList = <HTMLElement>document.getElementById("message-list");
const messageInput = <HTMLInputElement>document.getElementById("message-input");

document.getElementById("send-button")!.onclick = async () => {
    const message: string = messageInput.value;
    await fetch("/send", {
        method: "post",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({message: message}),
    });
    //入力したものをjsonにしてリクエスト
};

setInterval(async () => {
    const response = await fetch("/messages");
    const messages = await response.json();
    messageList.innerHTML = "";

    for (const message of messages) {
        const li = document.createElement("li");
        li.textContent = message;
        messageList.appendChild(li);
    }
}, 1000);