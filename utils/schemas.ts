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

export const citaSchema = z
  .object({
    id: z.number(),
    name: z
      .string()
      .min(1, { message: "Nombre debe ser de 1 a 12 caracteres" })
      .max(12, { message: "Nombre debe ser de 1 a 12 caracteres" }),
    PV: z.number().min(1, { message: "PV máximo debe ser mayor a 0" }),
    currentPV: z
      .number()
      .min(0, { message: "PV actual debe ser mayor o igual a 0" }),
    level: z.number().min(1, { message: "Nivel debe ser mayor a 0" }).max(100, {
      message: "Nivel debe ser menor a 100",
    }),
    species: z.string().nonempty({ message: "Especie es requerida" }),
    statuses: z.array(z.string()).optional(),
    pokedexNumber: z.number(),
    trainerId: z.string(),
  })
  .array();
