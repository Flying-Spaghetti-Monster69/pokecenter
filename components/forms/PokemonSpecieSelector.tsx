"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import pokemons from "@/utils/pokemon.json";
import Image from "next/image";

export function PokemonSpecieSelector() {
  const [open, setOpen] = React.useState(false);
  const [selectedPokemon, setSelectedPokemon] = React.useState<
    (typeof pokemons)[0] | null
  >(null);

  return (
    <div className="w-full cursor-pointer">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between hover:bg-light-background-secondary hover:border-primary dark:hover:bg-dark-background-secondary dark:hover:border-dark-primary cursor-pointer"
          >
            {selectedPokemon ? (
              <div className="flex items-center cursor-pointer">
                <Image
                  src={selectedPokemon.imageUrl || "/question_mark.png"}
                  alt={selectedPokemon.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 mr-2 rounded-full"
                />
                {selectedPokemon.name}
              </div>
            ) : (
              "Selecciona la especie del Pokemon..."
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-light-background-subtle dark:bg-dark-background-subtle border-primary dark:border-dark-primary">
          <Command className="bg-transparent">
            <CommandInput placeholder="Selecciona un Pokemon..." />
            <CommandList>
              <CommandEmpty className="text-text-secondary dark:text-dark-text-secondary">
                No pokemon found.
              </CommandEmpty>
              <CommandGroup className="max-h-[300px] overflow-y-auto">
                {pokemons.map((pokemon) => (
                  <CommandItem
                    key={pokemon.pokedexNumber}
                    value={pokemon.name}
                    onSelect={() => {
                      setSelectedPokemon(pokemon);
                      setOpen(false);
                    }}
                    className="flex items-center cursor-pointer hover:bg-light-background-secondary dark:hover:bg-dark-background-secondary"
                  >
                    <Image
                      src={pokemon.imageUrl || "/question_mark.png"}
                      alt={pokemon.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 mr-2 rounded-full"
                    />
                    <span>{pokemon.name}</span>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4 text-primary dark:text-dark-primary",
                        selectedPokemon?.pokedexNumber === pokemon.pokedexNumber
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default PokemonSpecieSelector;
