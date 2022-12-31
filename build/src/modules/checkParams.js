"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var checkParams = function (width, height, filepath) {
    //check invalid paramters and add them to missingParams array
    var missingParams = [];
    if (!(width >= 0) || isNaN(width)) {
        missingParams.push("Width");
    }
    if (!(height >= 0) || isNaN(height)) {
        missingParams.push("Height");
    }
    if (!fs_1.default.existsSync(filepath)) {
        missingParams.push("Name");
    }
    //if there are no missing paramters return true
    if (missingParams.length == 0) {
        return true;
    }
    //otherwise throw relevant error
    else if (missingParams[0] == "Name") {
        throw new Error("404 | File not found");
    }
    else {
        throw new Error("400 | Please Correct the Following Paramter(s): " +
            missingParams.join(", "));
    }
};
exports.default = checkParams;
