import { ApplicationError } from "@/protocols";

export function cannotEditColorNoteError(message: string): ApplicationError {
  return {
    name: "CannotEditColorNoteError",
    message: `Erro ao editar a cor da nota. ${message}`,
  };
}
