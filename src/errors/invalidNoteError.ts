import { ApplicationError } from "@/protocols";

export function invalidNoteError(): ApplicationError {
  return {
    name: "InvalidNoteError",
    message: "Dados inválidos. A nota possui campos inválidos.",
  };
}
