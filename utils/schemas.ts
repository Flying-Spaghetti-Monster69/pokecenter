import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: "Contraseña debe ser de 8 caracteres o más" })
    .max(32, { message: "Contraseña debe ser menor a 32 caracteres" }),
  name: z
    .string()
    .min(3, { message: "Nombre debe ser de 3 caracteres o más" })
    .max(12, { message: "Nombre debe ser menor a 12 caracteres" }),
});

export const logInSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: "Contraseña debe ser de 8 caracteres o más" })
    .max(32, { message: "Contraseña debe ser menor a 32 caracteres" }),
});
