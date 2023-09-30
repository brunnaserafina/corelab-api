import {
  findFavoriteNotes,
  findOtherNotes,
  insertNewNote,
  removeNote,
} from "@/services/notesService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postNote(req: Request, res: Response) {
  try {
    const note = req.body;
    await insertNewNote(note);
    return res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    console.error(err);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getOtherNotes(_req: Request, res: Response) {
  try {
    const notes = await findOtherNotes();
    return res.status(httpStatus.OK).json(notes);
  } catch (err) {
    console.error(err);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getFavoriteNotes(_req: Request, res: Response) {
  try {
    const notes = await findFavoriteNotes();
    return res.status(httpStatus.OK).json(notes);
  } catch (err) {
    console.error(err);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteNote(req: Request, res: Response) {
  try {
    const noteId = req.params;
    await removeNote(noteId);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    console.error(err);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
}
