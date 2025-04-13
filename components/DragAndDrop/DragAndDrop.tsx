"use client";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import PokemonCard from "./PokemonCard";

export function DragAndDrop() {
  const waitListMock = [
    "Benito camela (pikachu)",
    "Elver galarga (pikachu)",
    "Susana horia (pikachu)",
    "Rosa melano (pikachu)",
  ];
  const sala1ListMock = ["Lucila Tanga (Pickachu)"];

  const [waitList, waiting] = useDragAndDrop<HTMLUListElement, string>(
    waitListMock,
    {
      group: "waitList",
    }
  );

  const [sala1List, sala1] = useDragAndDrop<HTMLUListElement, string>(
    sala1ListMock,
    {
      group: "waitList",
      accepts: (): boolean => {
        return sala1.length < 4;
      },
    }
  );

  const [sala2List, sala2] = useDragAndDrop<HTMLUListElement, string>([], {
    group: "waitList",
    accepts: (): boolean => {
      return sala2.length < 2;
    },
  });
  const [sala3List, sala3] = useDragAndDrop<HTMLUListElement, string>([], {
    group: "waitList",
    accepts: (): boolean => {
      return sala3.length < 3;
    },
  });
  const [curedList, cured] = useDragAndDrop<HTMLUListElement, string>([], {
    group: "waitList",
  });

  return (
    <div className="flex items-start justify-start space-x-6 mt-4 px-8">
      <div className="top-0 flex flex-col items-center justify-center shadow-lg dark:shadow-dark-secondary border-dark-secondary border-2 rounded-2xl p-4 h-auto min-h-60 min-w-80 bg-light-background-subtle dark:bg-dark-background-subtle">
        <h1 className="text-center text-xl font-bold">Espera</h1>
        <ul
          ref={waitList}
          className="h-full min-h-60 min-w-80 overflow-y-visible mt-2   "
        >
          {waiting.map((pokemon) => (
            <PokemonCard name={pokemon} key={pokemon} />
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
            <PokemonCard name={pokemon} key={pokemon} />
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
            <PokemonCard name={pokemon} key={pokemon} />
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
            <PokemonCard name={pokemon} key={pokemon} />
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
            <PokemonCard name={pokemon} key={pokemon} />
          ))}
        </ul>
      </div>
    </div>
  );
}
