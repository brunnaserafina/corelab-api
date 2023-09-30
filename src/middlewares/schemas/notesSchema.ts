import joi from "joi";

const noteSchema = joi.object({
  title: joi.string().min(0).required(),
  content: joi.string().min(1).required(),
  color: joi
    .string()
    .pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .required(),
  favorite: joi.boolean().required(),
});

const noteIdSchema = joi.object({
  id: joi.string().required(),
});

const colorSchema = joi.object({
  color: joi
    .string()
    .pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .required(),
});

export { noteSchema, noteIdSchema, colorSchema };
