import express from "express";
import bodyparser from "body-parser";
import methodoverride from "method-override";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import morgan from "morgan"
import path from "path";

import router from "./routes/index.js";

import dotenv from "dotenv";
import  swaggerDocs from "../docs"

dotenv.config();

//global ...
const app = express()


dotenv.config();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.urlencoded({extended:true}));
app.use(methodoverride());
app.use(express.static(`${__dirname}/public`));

app.get("/home", (req, res, next) => res.status(200).json({
  message: res.__("welcome"),
}));



router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(router);


const port = process.env.PORT || 6000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
export default server;