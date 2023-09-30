import { Router } from "express";
import {
  deleteFavorite,
  deleteNote,
  getFavoriteNotes,
  getOtherNotes,
  postFavorite,
  postNote,
  putColorNote,
  putNote,
} from "@/controllers/notesController";

const notesRouter = Router();

notesRouter
  .post("/", postNote)
  .get("/", getOtherNotes)
  .get("/favorites", getFavoriteNotes)
  .delete("/:id", deleteNote)
  .put("/:id", putColorNote)
  .post("/favorites/:id", postFavorite)
  .delete("/favorites/:id", deleteFavorite)
  .post("/edit", putNote);

export default notesRouter;
