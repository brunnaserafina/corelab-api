import { Router } from "express";
import { postNote } from "@/controllers/notesController";

const notesRouter = Router();

notesRouter.post("/", postNote);

export default notesRouter;
