import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import config from "./config/";
import cors from "cors";
import songsRouter from "./resources/songs/songs.router";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("api/test", (req, res) => {
  req.json({ data: "hola" });
});
app.use("/api/songs", songsRouter);

export const start = () => {
  app.listen(5000, () => {
    console.log(`REST API on http://localhost:5000/api`);
  });
};
