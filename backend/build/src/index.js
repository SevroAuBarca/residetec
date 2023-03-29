"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var port = 9000;
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.json("hello world");
});
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("server started at http://localhost:".concat(port));
});
