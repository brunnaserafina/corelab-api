import { Router } from "express";
import * as notesController from "@/controllers/notesController";
import { validateParams } from "@/middlewares/validationMiddleware";
import { noteIdSchema } from "@/middlewares/schemas/notesSchema";

const favoritesRouter = Router();

favoritesRouter
  .get("/", notesController.getFavoriteNotes)
  .post("/:id", validateParams(noteIdSchema), notesController.postFavorite)
  .delete("/:id", validateParams(noteIdSchema), notesController.deleteFavorite)

export default favoritesRouter;
