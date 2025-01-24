import { z } from "zod";

export const loginSchemaValidations = z.object({
  email: z
    .string()
    .email({ message: "E-mail inválido. Ex.: example@gmail.com" })
    .default(""),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" })
    .default(""),
});

export type LoginSchema = z.infer<typeof loginSchemaValidations>;
