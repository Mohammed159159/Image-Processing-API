import express from "express";
import morgan from "morgan";
import main from "./routes/main";
import images from "./routes/images";

//choosing port 3000
const PORT = 3000;

//getting app object
const app = express();

//using morgan logger (enable when not using jasmine in order to see the test output cleanly)
app.use(morgan("dev"));

//using app routes
app.use("/", main);
app.use("/images", images);

//initiating app
app.listen(PORT, () => {
    console.log("Started Server at http://localhost:" + PORT);
});

//exporting app object
export default app;
