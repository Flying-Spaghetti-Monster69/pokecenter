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

import pokemons from "@/utils/pokemon.json"; // Assuming you have a JSON file with Pokemon data
import Image from "next/image";

// Mock Pokemon data - in a real app, you'd fetch this from an API

export function PokemonSelector() {
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
            className="w-full justify-between"
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
              "Select Pokemon..."
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search pokemon..." />
            <CommandList>
              <CommandEmpty>No pokemon found.</CommandEmpty>
              <CommandGroup className="max-h-[300px] overflow-y-auto">
                {pokemons.map((pokemon) => (
                  <CommandItem
                    key={pokemon.pokedexNumber}
                    value={pokemon.name}
                    onSelect={() => {
                      setSelectedPokemon(pokemon);
                      setOpen(false);
                    }}
                    className="flex items-center"
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
                        "ml-auto h-4 w-4",
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

export default PokemonSelector;
