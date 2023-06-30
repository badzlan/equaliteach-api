import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./database/connection.js";
import routes from "./routes/route.js";
import { config } from "dotenv";

config({ path: ".env" });

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("tiny"));

app.listen(process.env.APP_PORT, () => {
   console.log(`Server running on [${process.env.APP_URL}:${process.env.APP_PORT}]. \nPress Ctrl+C to stop the server`);
});

app.get("/", (req, res) => {
   res.status(200).send({ msg: "API on /api" });
});

app.use("/api", routes);
