import express from "express";
import routes from "./routes.js";

export const app = express();

app.use(routes);

app.use(express.json());
