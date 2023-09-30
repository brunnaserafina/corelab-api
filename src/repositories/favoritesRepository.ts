import { database } from "@/config/database";
import { COLLECTIONS } from "@/enums/collections";
import { ObjectId, Document } from "mongodb";

export async function insertFavoriteNote(noteId: string | ObjectId): Promise<Document> {
  const id = typeof noteId === "string" ? new ObjectId(noteId) : noteId;

  return await database().collection(COLLECTIONS.FAVORITES).insertOne({
    note_id: id,
  });
}

export async function deleteFavoriteNote(noteId: string): Promise<Document> {
  const objectId = new ObjectId(noteId);

  return await database().collection(COLLECTIONS.FAVORITES).deleteOne({
    note_id: objectId,
  });
}

export async function findFavoriteIds(): Promise<Document[]> {
  return await database().collection(COLLECTIONS.FAVORITES).find().toArray();
}

export async function findAllNonFavoriteNotes(favoriteIds: ObjectId[]): Promise<Document> {
  const allNonFavoriteNotes = await database()
    .collection(COLLECTIONS.NOTES)
    .find({ _id: { $nin: favoriteIds } })
    .toArray();

  return allNonFavoriteNotes;
}

export async function findAllFavoriteNotes(favoriteIds: ObjectId[]): Promise<Document> {
  const allFavoriteNotes = await database()
    .collection(COLLECTIONS.NOTES)
    .find({ _id: { $in: favoriteIds } })
    .toArray();

  return allFavoriteNotes;
}
