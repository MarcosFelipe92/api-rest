import express from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

export const app = express();

app.use(express.json());

app.get("/selecoes", SelecaoController.index);

app.get("/selecoes/:id", SelecaoController.show);

app.post("/selecoes", SelecaoController.store);

app.put("/selecoes/:id", SelecaoController.update);

app.delete("/selecoes/:id", SelecaoController.delete);
