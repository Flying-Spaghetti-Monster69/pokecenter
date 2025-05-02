"use client";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import PokemonCard from "./PokemonCard";
import { cita } from "@/utils/consts";
import { useEffect } from "react";
import { getNotDonePokemons } from "@/utils/actions";
import Changes from "./Changes";

export function DragAndDrop() {
  const [waitList, waiting, setWaiting] = useDragAndDrop<
    HTMLUListElement,
    cita
  >([], {
    group: "waitList",
  });

  const [sala1List, sala1, setSala1] = useDragAndDrop<HTMLUListElement, cita>(
    [],
    {
      group: "waitList",
      accepts: (): boolean => {
        return sala1.length < 4;
      },
    }
  );

  const [sala2List, sala2, setSala2] = useDragAndDrop<HTMLUListElement, cita>(
    [],
    {
      group: "waitList",
      accepts: (): boolean => {
        return sala2.length < 2;
      },
    }
  );
  const [sala3List, sala3, setSala3] = useDragAndDrop<HTMLUListElement, cita>(
    [],
    {
      group: "waitList",
      accepts: (): boolean => {
        return sala3.length < 3;
      },
    }
  );
  const [curedList, cured] = useDragAndDrop<HTMLUListElement, cita>([], {
    group: "waitList",
  });

  useEffect(() => {
    async function fetchPokemons() {
      const response = await getNotDonePokemons();

      if (!response) {
        return;
      }

      console.log("Pokemons:", response);

      setWaiting(response.waiting);
      setSala1(response.sala1);
      setSala2(response.sala2);
      setSala3(response.sala3);
    }

    fetchPokemons();
  }, [setWaiting, setSala1, setSala2, setSala3]);

  return (
    <>
      <div className="flex items-start justify-start space-x-6 mt-4 px-8">
        <div className="top-0 flex flex-col items-center justify-center shadow-lg dark:shadow-dark-secondary border-dark-secondary border-2 rounded-2xl p-4 h-auto min-h-60 min-w-80 bg-light-background-subtle dark:bg-dark-background-subtle">
          <h1 className="text-center text-xl font-bold">Espera</h1>
          <ul
            ref={waitList}
            className="h-full min-h-60 min-w-80 overflow-y-visible mt-2   "
          >
            {waiting.map((pokemon) => (
              <PokemonCard {...pokemon} key={pokemon.id} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg dark:shadow-dark-primary border-primary dark:border-dark-primary border-2 rounded-2xl p-4 h-auto min-h-60 min-w-80 bg-[#F3FFFF] dark:bg-[#121212]">
          <h1 className="text-center text-xl font-bold ">Sala 1</h1>
          <h4 className="text-center text-secondary dark:text-dark-secondary text-xl font-semibold ">
            ({sala1.length}/4)
          </h4>
          <ul
            ref={sala1List}
            className="h-full min-h-60 min-w-80 overflow-y-visible mt-2"
          >
            {sala1.map((pokemon) => (
              <PokemonCard {...pokemon} key={pokemon.id} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg dark:shadow-dark-primary border-primary dark:border-dark-primary border-2 rounded-2xl p-4 h-auto min-h-60 min-w-80 bg-[#F3FFFF] dark:bg-[#121212]">
          <h1 className="text-center text-xl font-bold ">Sala 2</h1>
          <h4 className="text-center text-secondary dark:text-dark-secondary text-xl font-semibold ">
            ({sala2.length}/2)
          </h4>
          <ul
            ref={sala2List}
            className="h-full min-h-60 min-w-80 overflow-y-visible mt-2"
          >
            {sala2.map((pokemon) => (
              <PokemonCard {...pokemon} key={pokemon.id} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg dark:shadow-dark-primary border-primary dark:border-dark-primary border-2 rounded-2xl p-4 h-auto min-h-60 min-w-80 bg-[#F3FFFF] dark:bg-[#121212]">
          <h1 className="text-center text-xl font-bold ">Sala 3</h1>
          <h4 className="text-center text-secondary dark:text-dark-secondary text-xl font-semibold ">
            ({sala3.length}/3)
          </h4>
          <ul
            ref={sala3List}
            className="h-full min-h-60 min-w-80 overflow-y-visible mt-2"
          >
            {sala3.map((pokemon) => (
              <PokemonCard {...pokemon} key={pokemon.id} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg dark:shadow-green-400 border-green-400 border-2 rounded-2xl p-4 h-auto min-h-60 min-w-80 bg-[#F3FFFF] dark:bg-[#121212]">
          <h1 className="text-center text-xl font-bold ">Curados</h1>
          <ul
            ref={curedList}
            className="h-full min-h-60 min-w-80 overflow-y-visible mt-2"
          >
            {cured.map((pokemon) => (
              <PokemonCard {...pokemon} key={pokemon.id} />
            ))}
          </ul>
        </div>
      </div>
      <Changes />
    </>
  );
}
