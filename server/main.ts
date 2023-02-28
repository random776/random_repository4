import express = require("express");
const app: express.Express = express();

app.use(express.json());
//Viteによって出力されたディレクトリの配信
app.use(express.static("dist"));

const messages: string[] = [];

app.get("/messages", (request, response) => {
    response.json(messages);
});     //messagesをjsonデータとしてリクエストする

app.post("/send", (request: express.Request, response: express.Response) => {
    messages.push(request.body.message);
    response.send();
});     //messageにレスポンスされたものを突っ込む

app.listen(3000);