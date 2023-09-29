import * as notesRepository from "@/repositories/notesRepository";
import * as favoritesRepository from "@/repositories/favoritesRepository";
import { INote } from "@/protocols";

export async function insertNewNote(newNote: INote) {
  const note = await notesRepository.insertNote(newNote);

  if (newNote.favorite) {
    await favoritesRepository.favoriteNote(note.insertedId);
  }

  return note;
}
