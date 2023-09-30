import mongodb from "@/config/database";
import { COLLECTIONS } from "@/enums/collections";
import { ObjectId } from "mongodb";

export async function insertFavoriteNote(noteId) {
  const db = await mongodb();
  let id = noteId;

  if (typeof id === "string") {
    id = new ObjectId(noteId);
  }

  return await db.collection(COLLECTIONS.FAVORITES).insertOne({
    note_id: id,
  });
}

export async function deleteFavoriteNote(noteId) {
  const db = await mongodb();

  const objectId = new ObjectId(noteId);

  return await db.collection(COLLECTIONS.FAVORITES).deleteOne({
    note_id: objectId,
  });
}

export async function findFavoriteIds() {
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

export async function findAllFavoriteNotes(favoriteIds) {
  const db = await mongodb();

  const allFavoriteNotes = await db
    .collection(COLLECTIONS.NOTES)
    .find({ _id: { $in: favoriteIds } })
    .toArray();

  return allFavoriteNotes;
}
