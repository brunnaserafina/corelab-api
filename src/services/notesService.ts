import * as notesRepository from "@/repositories/notesRepository";
import * as favoritesRepository from "@/repositories/favoritesRepository";
import { INote } from "@/protocols";
import { checkNoteIdIsValid, findFavoritesIds, rewriteConsultDatabase } from "./favoritesService";
import { cannotDeleteNoteError } from "@/errors/cannotDeleteNoteError";
import { cannotEditColorNoteError } from "@/errors/cannotEditColorNoteError";
import { cannotUpdateNoteError } from "@/errors/cannotUpdateNoteError";

export async function insertNewNote(newNote: INote) {
  const note = await notesRepository.insertNote(newNote);

  if (newNote.favorite) {
    await favoritesRepository.insertFavoriteNote(note.insertedId);
  }

  return note;
}

export async function findOtherNotes() {
  const idsFavorites = await findFavoritesIds();

  const otherNotes = await favoritesRepository.findAllNonFavoriteNotes(idsFavorites);

  return rewriteConsultDatabase(otherNotes);
}

export async function removeNote(noteId: string) {
  checkNoteIdIsValid(noteId);

  const removedNote = await notesRepository.deleteNote(noteId);

  if (!removedNote) {
    throw cannotDeleteNoteError();
  }
}

export async function editColorNote(noteId: string, color: string) {
  checkNoteIdIsValid(noteId);

  if (!colorIsValid(color)) {
    throw cannotEditColorNoteError("A cor selecionada não é permitida na paleta do site");
  }

  const updatedColorNote = await notesRepository.updateColorNote(noteId, color);
  if (!updatedColorNote) {
    throw cannotEditColorNoteError("Nenhum elemento foi modificado no banco de dados");
  }
}

export async function updateNote(note: INote) {
  const updatedNote = await notesRepository.updateNote(note);

  if (!updatedNote) {
    throw cannotUpdateNoteError();
  }
}

function colorIsValid(color: string) {
  const validColors = [
    "#ffffff",
    "#bae2ff",
    "#b9ffdd",
    "#ffe8ac",
    "#ffcab9",
    "#f99494",
    "#9DD6FF",
    "#eca1ff",
    "#daff8b",
    "#ffa285",
    "#cdcdcd",
    "#979797",
    "#a99a7c",
  ];
  return validColors.includes(color);
}
