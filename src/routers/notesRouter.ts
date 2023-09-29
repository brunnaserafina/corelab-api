import { Router } from "express";
import { getOtherNotes, postNote } from "@/controllers/notesController";

const notesRouter = Router();

notesRouter
  .post("/", postNote)
  .get("/", getOtherNotes);

export default notesRouter;
