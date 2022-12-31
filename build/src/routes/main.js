"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//this is the apps' main route
var main = express_1.default.Router();
main.get("/", function (req, res) {
    res.send("Welcome to main route!");
});
exports.default = main;
