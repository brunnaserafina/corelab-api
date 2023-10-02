import { Router } from "express";
import * as notesController from "@/controllers/notesController";
import { validateBody, validateParams } from "@/middlewares/validationMiddleware";
import { colorSchema, noteIdSchema, noteSchema } from "@/middlewares/schemas/notesSchema";

const notesRouter = Router();

notesRouter
  .get("/", notesController.getOtherNotes)
  .post("/", validateBody(noteSchema), notesController.postNote)
  .put("/", validateBody(noteSchema), notesController.putNote)
  .delete("/:id", validateParams(noteIdSchema), notesController.deleteNote)
  .put(
    "/color/:id",
    validateParams(noteIdSchema),
    validateBody(colorSchema),
    notesController.putColorNote
  );

export default notesRouter;
