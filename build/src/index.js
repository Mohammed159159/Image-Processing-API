"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var main_1 = __importDefault(require("./routes/main"));
var images_1 = __importDefault(require("./routes/images"));
//choosing port 3000
var PORT = 3000;
//getting app object
var app = (0, express_1.default)();
//using morgan logger (enable when not using jasmine in order to see the test output cleanly)
app.use((0, morgan_1.default)("dev"));
//using app routes
app.use("/", main_1.default);
app.use("/images", images_1.default);
//initiating app
app.listen(PORT, function () {
    console.log("Started Server at http://localhost:" + PORT);
});
//exporting app object
exports.default = app;
