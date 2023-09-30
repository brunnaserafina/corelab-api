import { ApplicationError } from "@/protocols";

export function invalidNoteError(): ApplicationError {
  return {
    name: "InvalidNoteError",
    message: "Dados inválidos. A nota não possui os campos necessários.",
  };
}
