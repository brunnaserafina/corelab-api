import mongodb from "@/config/database";
import { COLLECTIONS } from "@/enums/collections";
import { INote } from "@/protocols";

export async function insertNote(data: INote) {
  const db = await mongodb();

  return await db.collection(COLLECTIONS.NOTES).insertOne({
    title: data.title,
    content: data.content,
    color: data.color,
  });
}


