import { ApplicationError } from "@/protocols";

export function cannotDeleteNoteError(): ApplicationError {
  return {
    name: "CannotDeleteNoteError",
    message: "Erro ao desfavoritar nota. ID da nota não encontrado no banco de dados",
  };
}
