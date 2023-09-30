import * as favoritesRepository from "@/repositories/favoritesRepository";

export async function findFavoriteNotes() {
  const idsFavorites = await findFavoritesIds();

  const favoriteNotes = await favoritesRepository.findAllFavoriteNotes(idsFavorites);

  return rewriteConsultDatabase(favoriteNotes);
}

export async function insertFavoriteNote(noteId) {
  const favoritedNote = await favoritesRepository.insertFavoriteNote(noteId.id);
  return favoritedNote;
}

export async function deleteFavoriteNote(noteId) {
  const deletedFavorite = await favoritesRepository.deleteFavoriteNote(noteId);
  return deletedFavorite;
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
