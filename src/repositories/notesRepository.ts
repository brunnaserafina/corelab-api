import { database } from "@/config/database";
import { COLLECTIONS } from "@/enums/collections";
import { INote } from "@/protocols";
import { ObjectId, Document } from "mongodb";

export async function insertNote(data: INote): Promise<Document> {
  return await database().collection(COLLECTIONS.NOTES).insertOne({
    title: data.title,
    content: data.content,
    color: data.color,
  });
}

export async function deleteNote(noteId: string): Promise<number>  {
  const objectId = new ObjectId(noteId);

  await database().collection(COLLECTIONS.FAVORITES).deleteOne({ note_id: objectId });

  const deletedNote = await database().collection(COLLECTIONS.NOTES).deleteOne({
    _id: objectId,
  });

  return deletedNote.deletedCount;
}

export async function updateColorNote(noteId: string, color: string): Promise<Document>  {
  const objectId = new ObjectId(noteId);

  return await database().collection(COLLECTIONS.NOTES).updateOne({ _id: objectId }, { $set: { color } });
}

export async function updateNote(note: INote): Promise<Document>  {
  const objectId = new ObjectId(note.id);

  return await database()
    .collection(COLLECTIONS.NOTES)
    .updateOne({ _id: objectId }, { $set: { title: note.title, content: note.content } });
}
