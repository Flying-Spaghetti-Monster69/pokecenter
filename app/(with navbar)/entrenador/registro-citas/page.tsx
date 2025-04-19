"use client";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import PokemonSelector from "@/components/forms/PokemonSelector";
import StatusEffectPicker from "@/components/forms/StatusEffectPicker";

const inputStyles =
  "w-full p-2 border rounded-md hover:border-primary outline-0 focus:border-primary dark:hover:border-dark-primary dark:focus:border-dark-primary dark:bg-dark-background";

interface FormEntry {
  id: number;
  currentPV: number;
  maxPV: number;
  level: number;
  statuses: string[];
  name: string;
}

const AppointmentsRegister = () => {
  const [entries, setEntries] = useState<FormEntry[]>([
    {
      id: 1,
      currentPV: 0,
      maxPV: 0,
      level: 1,
      statuses: [],
      name: "",
    },
  ]);

  const addEntry = () => {
    // this is to avoid the id being 0 when there are no entries and because using index breaks the key prop
    const maxId = Math.max(...entries.map((entry) => entry.id), 0);
    setEntries([
      ...entries,
      {
        id: maxId + 1,
        currentPV: 0,
        maxPV: 0,
        level: 1,
        statuses: [],
        name: "",
      },
    ]);
  };

  /* const handleInputChange = (
    index: number,
    field: keyof FormEntry,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  }; */

  const removeEntry = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="container mx-auto px-4 mt-16 py-8">
      <h1 className="text-center text-3xl font-semibold mb-6">
        Registra tus pokemones que quieres que sean atendidos
      </h1>
      <form className="space-y-6">
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className="p-6 pb-8 bg-light-background dark:bg-dark-background-subtle rounded-lg shadow-md space-y-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Pokemon #{index + 1}</h3>
              {entries.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEntry(entry.id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Nombre del Pokemon
                </label>
                <input type="text" className={inputStyles} />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">PV Actual</label>
                <input
                  type="number"
                  min="0"
                  name="current_PV"
                  className={inputStyles}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">PV Maximo</label>
                <input
                  type="number"
                  min="1"
                  name="PV"
                  className={inputStyles}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Nivel</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  className={inputStyles}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Especie del Pokemon
                </label>
                <PokemonSelector />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Estados del Pokemon
                </label>
                <StatusEffectPicker />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button
            type="button"
            onClick={addEntry}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/80 dark:bg-dark-primary dark:hover:bg-dark-primary/80"
          >
            <Plus className="h-5 w-5" />
            Añadir Pokemon
          </button>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer px-6 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80 dark:bg-dark-secondary dark:hover:bg-dark-secondary/80"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentsRegister;
