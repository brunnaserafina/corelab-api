import mongodb from "@/config/database";
import { COLLECTIONS } from "@/enums/collections";

export async function favoriteNote(noteId: string) {
  const db = await mongodb();

  return await db.collection(COLLECTIONS.FAVORITES).insertOne({
    note_id: noteId,
  });
}

export async function findFavoriteIds(){
  const db = await mongodb();

  return await db.collection(COLLECTIONS.FAVORITES).find().toArray();
}

export async function findAllNonFavoriteNotes(favoriteIds) {
  const db = await mongodb();

  const allNonFavoriteNotes = await db
    .collection(COLLECTIONS.NOTES)
    .find({ _id: { $nin: favoriteIds } })
    .toArray();

  return allNonFavoriteNotes;
}
