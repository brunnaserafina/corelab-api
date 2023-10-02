import { ApplicationError } from "@/protocols";

export function cannotUpdateNoteError(): ApplicationError {
  return {
    name: "CannotUpdateNoteError",
    message: "Erro ao atualizar a nota.",
  };
}
