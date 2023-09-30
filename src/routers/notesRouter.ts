import { Router } from "express";
import {
  deleteFavorite,
  deleteNote,
  getFavoriteNotes,
  getOtherNotes,
  postFavorite,
  postNote,
  putColorNote,
} from "@/controllers/notesController";

const notesRouter = Router();

notesRouter
  .post("/", postNote)
  .get("/", getOtherNotes)
  .get("/favorites", getFavoriteNotes)
  .delete("/:id", deleteNote)
  .put("/:id", putColorNote)
  .post("/favorites/:id", postFavorite)
  .delete("/favorites/:id", deleteFavorite);

export default notesRouter;
