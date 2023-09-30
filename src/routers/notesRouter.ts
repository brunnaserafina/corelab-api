import { Router } from "express";
import {
  deleteNote,
  getFavoriteNotes,
  getOtherNotes,
  postNote,
} from "@/controllers/notesController";

const notesRouter = Router();

notesRouter
  .post("/", postNote)
  .get("/", getOtherNotes)
  .get("/favorites", getFavoriteNotes)
  .delete("/:id", deleteNote);

export default notesRouter;
