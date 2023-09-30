import * as notesRepository from "@/repositories/notesRepository";
import * as favoritesRepository from "@/repositories/favoritesRepository";
import { INote } from "@/protocols";
import { findFavoritesIds, rewriteConsultDatabase } from "./favoritesService";

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

export async function removeNote(noteId) {
  const removedNote = await notesRepository.deleteNote(noteId);

  return removedNote;
}

export async function editColorNote(noteId, color: string) {
  const updatedNote = await notesRepository.updateColorNote(noteId, color);

  return updatedNote;
}

export async function updateNote(note) {
  const updatedNote = await notesRepository.updateNote(note);
  return updatedNote;
}
