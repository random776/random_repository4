"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
//Viteによって出力されたディレクトリの配信
app.use(express_1["default"].static("dist"));
var messages = [];
app.get("/messages", function (request, response) {
    response.json(messages);
}); //messagesをjsonデータとしてリクエストする
app.post("/send", function (request, response) {
    messages.push(request.body.message);
    response.send();
}); //messageにレスポンスされたものを突っ込む
app.listen(3000);
