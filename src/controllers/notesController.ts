import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  findOtherNotes,
  insertNewNote,
  removeNote,
  updateNote,
  editColorNote,
} from "@/services/notesService";

export async function postNote(req: Request, res: Response) {
  try {
    const note = req.body;
    await insertNewNote(note);
    return res.status(httpStatus.CREATED).send({ message: "Nota criada com sucesso!" });
  } catch (err) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getOtherNotes(_req: Request, res: Response) {
  try {
    const notes = await findOtherNotes();
    return res.status(httpStatus.OK).json(notes);
  } catch (err) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteNote(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await removeNote(id);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    if (err.name === "CannotDeleteNoteError") {
      return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
}

export async function putColorNote(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { color } = req.body;
    await editColorNote(id, color);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    if (err.name === "CannotEditColorNoteError") {
      return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
}

export async function putNote(req: Request, res: Response) {
  try {
    const note = req.body;
    await updateNote(note);
    return res.sendStatus(httpStatus.OK);
  } catch (err) {
    if (err.name === "CannotUpdateNoteError") {
      return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
}
