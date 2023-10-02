import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  findFavoriteNotes,
  insertFavoriteNote,
  deleteFavoriteNote,
} from "@/services/favoritesService";

export async function getFavoriteNotes(_req: Request, res: Response) {
  try {
    const notes = await findFavoriteNotes();
    return res.status(httpStatus.OK).json(notes);
  } catch (err) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function postFavorite(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await insertFavoriteNote(id);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    if (err.name === "InvalidNoteIdError") {
      return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
}

export async function deleteFavorite(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteFavoriteNote(id);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    if (err.name === "InvalidNoteIdError" || err.name === "CannotUnfavoriteError") {
      return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
}
