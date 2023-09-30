import { cannotUnfavoriteError } from "@/errors/cannotUnfavoriteError";
import { invalidNoteIdError } from "@/errors/invalidNoteIdError";
import * as favoritesRepository from "@/repositories/favoritesRepository";
import { ObjectId } from "mongodb";

export async function findFavoriteNotes() {
  const idsFavorites = await findFavoritesIds();
  const favoriteNotes = await favoritesRepository.findAllFavoriteNotes(idsFavorites);
  return rewriteConsultDatabase(favoriteNotes);
}

export async function insertFavoriteNote(noteId: string) {
  checkNoteIdIsValid(noteId);

  const favoritedNote = await favoritesRepository.insertFavoriteNote(noteId);
  return favoritedNote;
}

export async function deleteFavoriteNote(noteId: string) {
  checkNoteIdIsValid(noteId);

  const deletedFavorite = await favoritesRepository.deleteFavoriteNote(noteId);

  if (!deletedFavorite) {
    throw cannotUnfavoriteError();
  }
}

//utils
export async function rewriteConsultDatabase(notes) {
  const rewriteConsult = notes.map((note) => {
    const { _id, ...rest } = note;
    return { id: _id, ...rest };
  });

  return rewriteConsult;
}

export async function findFavoritesIds() {
  const favorites = await favoritesRepository.findFavoriteIds();
  const favoriteIds = favorites.map((favorite) => favorite.note_id);
  return favoriteIds;
}

export function checkNoteIdIsValid(noteId: string) {
  if (!ObjectId.isValid(noteId)) {
    throw invalidNoteIdError();
  }
}
