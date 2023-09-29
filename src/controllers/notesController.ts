import { insertNewNote } from "@/services/notesService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postNote(req: Request, res: Response) {
  try {
    const note = req.body;
    await insertNewNote(note);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    console.error(err);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
