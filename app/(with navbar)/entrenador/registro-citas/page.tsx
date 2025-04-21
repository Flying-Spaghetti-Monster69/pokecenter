"use client";
import { Plus, Trash2 } from "lucide-react";
import PokemonSelector from "@/components/forms/PokemonSpecieSelector";
import StatusEffectPicker from "@/components/forms/StatusEffectPicker";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { citaFormSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "react-toastify";

const inputStyles =
  "w-full h-[42px] p-2 border rounded-md hover:border-primary outline-0 focus:border-primary dark:hover:border-dark-primary dark:focus:border-dark-primary dark:bg-dark-background";

const AppointmentsRegister = () => {
  const form = useForm<z.infer<typeof citaFormSchema>>({
    resolver: zodResolver(citaFormSchema),
    defaultValues: {
      pokemons: [
        {
          name: "",
          PV: 1,
          current_PV: 0,
          level: 1,
          species: "",
          statuses: [],
          pokedex_ID: 0,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "pokemons",
  });

  return (
    <div className="container mx-auto px-4 mt-16 py-8">
      <h1 className="text-center text-3xl font-semibold mb-6">
        Registra tus pokemones que quieres que sean atendidos
      </h1>

      <Form {...form}>
        <form
          className="space-y-6"
          onSubmit={form.handleSubmit((data) => {
            console.log("hello");
            console.log(data);
          })}
        >
          {fields.map((entry, index) => (
            <div
              key={entry.id}
              className="p-6 pb-8 bg-light-background dark:bg-dark-background-subtle rounded-lg shadow-md space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Pokemon #{index + 1}</h3>
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name={`pokemons.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <div className="space-y-2">
                        <FormLabel className="block">
                          Nombre del pokemon
                        </FormLabel>
                        <FormControl>
                          <input
                            className={inputStyles}
                            type="text"
                            placeholder="Ash Ketchup"
                            {...field}
                            required
                          />
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`pokemons.${index}.current_PV`}
                  render={({ field }) => (
                    <FormItem>
                      <div className="space-y-2">
                        <FormLabel>PV Actual</FormLabel>
                        <FormControl>
                          <input
                            className={inputStyles}
                            type="number"
                            placeholder="420"
                            min={0}
                            {...field}
                            onChange={(e) => field.onChange(+e.target.value)}
                            required
                          />
                        </FormControl>
                      </div>

                      <p className="text-red-500 text-sm block">
                        {form.formState?.errors?.pokemons?.[
                          index
                        ]?.message?.toString()}
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`pokemons.${index}.PV`}
                  render={({ field }) => (
                    <FormItem>
                      <div className="space-y-2">
                        <FormLabel className="block">PV maximo</FormLabel>
                        <FormControl>
                          <input
                            className={inputStyles}
                            type="number"
                            min={1}
                            placeholder="420"
                            {...field}
                            onChange={(e) => field.onChange(+e.target.value)}
                            required
                          />
                        </FormControl>
                      </div>

                      <p className="text-red-500 text-sm ">
                        {form.formState?.errors?.pokemons?.[
                          index
                        ]?.message?.toString()}
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`pokemons.${index}.level`}
                  render={({ field }) => (
                    <FormItem>
                      <div className="space-y-2">
                        <FormLabel>Nivel del pokemon</FormLabel>
                        <FormControl>
                          <input
                            className={inputStyles}
                            type="number"
                            min={1}
                            max={100}
                            placeholder="69"
                            {...field}
                            onChange={(e) => field.onChange(+e.target.value)}
                            required
                          />
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <PokemonSelector control={form.control} index={index} />

                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Estados del Pokemon
                  </label>
                  <StatusEffectPicker index={index} />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() =>
                append({
                  name: "",
                  PV: 1,
                  current_PV: 0,
                  level: 1,
                  species: "",
                  statuses: [],
                  pokedex_ID: 0,
                })
              }
              className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/80 dark:bg-dark-primary dark:hover:bg-dark-primary/80"
            >
              <Plus className="h-5 w-5" />
              Añadir Pokemon
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              onClick={() =>
                form.formState?.errors?.pokemons?.length &&
                toast.error("Hay errores en el formulario")
              }
              className="cursor-pointer px-6 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80 dark:bg-dark-secondary dark:hover:bg-dark-secondary/80"
            >
              Enviar
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentsRegister;
