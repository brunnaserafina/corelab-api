import mongodb from "@/config/database";
import { COLLECTIONS } from "@/enums/collections";
import { INote } from "@/protocols";
import { ObjectId } from "mongodb";

export async function insertNote(data: INote) {
  const db = await mongodb();

  return await db.collection(COLLECTIONS.NOTES).insertOne({
    title: data.title,
    content: data.content,
    color: data.color,
  });
}

export async function deleteNote(noteId) {
  const db = await mongodb();

  const objectId = new ObjectId(noteId);

  await db.collection(COLLECTIONS.FAVORITES).deleteOne({ note_id: objectId });

  const deletedNote = await db.collection(COLLECTIONS.NOTES).deleteOne({
    _id: objectId,
  });

  return deletedNote.deletedCount;
}

export async function updateColorNote(noteId, color: string) {
  const db = await mongodb();

  const objectId = new ObjectId(noteId);

  await db.collection(COLLECTIONS.NOTES).updateOne({ _id: objectId }, { $set: { color } });
}

export async function updateNote(note) {
  const db = await mongodb();

  const objectId = new ObjectId(note.id);

  await db
    .collection(COLLECTIONS.NOTES)
    .updateOne({ _id: objectId }, { $set: { title: note.title, content: note.content } });
}
