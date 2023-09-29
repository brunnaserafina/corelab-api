import express, { Express } from "express";
import cors from "cors";
import notesRouter from "./routers/notesRouter";

const app: Express = express();

app
  .use(cors())
  .use(express.json())
  .get("/api/status", (req, res) => {
    res.send("Ok!");
  })
  .use("/api/notes", notesRouter);

export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export default app;
