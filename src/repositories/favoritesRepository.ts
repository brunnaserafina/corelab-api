import mongodb from "@/config/database";
import { COLLECTIONS } from "@/enums/collections";

export async function favoriteNote(noteId: string) {
  const db = await mongodb();

  return await db.collection(COLLECTIONS.FAVORITES).insertOne({
    note_id: noteId,
  });
}
