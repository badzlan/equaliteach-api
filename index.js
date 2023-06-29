import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./database/connection.js";
import routes from "./routes/route.js";

const app = express();
const url = "localhost";
const port = 3333;

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", routes);

app.get("/", (req, res) => {
   res.status(200).send({ msg: "API on /api" });
});

app.listen(port, () => {
   console.log(`Server running on [http://${url}:${port}]. \nPress Ctrl+C to stop the server`);
});
