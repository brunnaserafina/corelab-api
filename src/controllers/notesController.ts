import { findOtherNotes, insertNewNote } from "@/services/notesService";
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
