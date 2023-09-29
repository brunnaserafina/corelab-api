import { Router } from "express";
import { getFavoriteNotes, getOtherNotes, postNote } from "@/controllers/notesController";

const notesRouter = Router();

notesRouter
  .post("/", postNote)
  .get("/", getOtherNotes)
  .get("/favorites", getFavoriteNotes);

export default notesRouter;
