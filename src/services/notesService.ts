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

export async function findOtherNotes() {
  const idsFavorites = await findFavoritesIds();

  const otherNotes = await favoritesRepository.findAllNonFavoriteNotes(idsFavorites);

  return rewriteConsultDatabase(otherNotes);
}

export async function findFavoriteNotes() {
  const idsFavorites = await findFavoritesIds();

  const favoriteNotes = await favoritesRepository.findAllFavoriteNotes(idsFavorites);

  return rewriteConsultDatabase(favoriteNotes);
}

//utils
async function rewriteConsultDatabase(notes) {
  const rewriteConsult = notes.map((note) => {
    const { _id, ...rest } = note;
    return { id: _id, ...rest };
  });

  return rewriteConsult;
}

async function findFavoritesIds() {
  const favorites = await favoritesRepository.findFavoriteIds();

  const favoriteIds = favorites.map((favorite) => favorite.note_id);

  return favoriteIds;
}
