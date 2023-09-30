import express, { Express } from "express";
import cors from "cors";
import notesRouter from "./routers/notesRouter";
import favoritesRouter from "./routers/favoritesRouter";

const app: Express = express();

app
  .use(cors())
  .use(express.json())
  .get("/api/status", (req, res) => {
    res.send("Ok!");
  })
  .use("/api/notes", notesRouter)
  .use("/api/favorites", favoritesRouter);

export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export default app;
