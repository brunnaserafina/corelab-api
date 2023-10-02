import { ApplicationError } from "@/protocols";

export function invalidNoteIdError(): ApplicationError {
  return {
    name: "InvalidNoteIdError",
    message: "O ID da nota não segue o formato de ObjectId do MongoDB.",
  };
}
