import { ApplicationError } from "@/protocols";

export function cannotUnfavoriteError(): ApplicationError {
  return {
    name: "CannotUnfavoriteError",
    message: "Erro ao desfavoritar nota. ID da nota não encontrado no banco de dados",
  };
}
