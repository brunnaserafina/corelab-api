export interface INote {
  id?: number;
  title: string;
  content: string;
  color: string;
  favorite?: boolean;
}

export interface ApplicationError {
  name: string;
  message: string;
}
