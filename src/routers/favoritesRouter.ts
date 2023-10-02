import { Router } from "express";
import * as favoritesController from "@/controllers/favoritesController";
import { validateParams } from "@/middlewares/validationMiddleware";
import { noteIdSchema } from "@/middlewares/schemas/notesSchema";

const favoritesRouter = Router();

favoritesRouter
  .get("/", favoritesController.getFavoriteNotes)
  .post("/:id", validateParams(noteIdSchema), favoritesController.postFavorite)
  .delete("/:id", validateParams(noteIdSchema), favoritesController.deleteFavorite);

export default favoritesRouter;
