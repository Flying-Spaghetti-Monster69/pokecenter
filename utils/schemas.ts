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

export const citaFormSchema = z.object({
  pokemons: z
    .object({
      name: z
        .string()
        .min(1, { message: "Nombre debe ser de 1 a 12 caracteres" })
        .max(12, { message: "Nombre debe ser de 1 a 12 caracteres" }),
      PV: z
        .number()
        .min(1, { message: "numero tiene que ser mayor a 1" })
        .int({ message: "numero tiene que ser un entero" }),
      current_PV: z
        .number()
        .min(0, { message: "numero tiene que ser mayor a 1" })
        .int({ message: "numero tiene que ser un entero" }),
      level: z
        .number()
        .min(1, { message: "numero tiene que ser mayor a 1" })
        .max(100, { message: "numero tiene que ser menor a 100" })
        .int({ message: "numero tiene que ser un entero" }),
      species: z.string().nonempty({ message: "Especie es requerida" }),
      statuses: z.array(z.string()).optional(),
      pokedex_ID: z.number().int().positive(),
    })
    .refine(
      (data) => {
        return data.PV > data.current_PV;
      },
      { message: "PV actual debe ser menor a PV máximo" }
    )
    .array(),
});
