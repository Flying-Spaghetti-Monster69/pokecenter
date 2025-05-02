"use client";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import PokemonCard from "./PokemonCard";
import { cita } from "@/utils/consts";

export function DragAndDrop() {
  const waitListMock = [
    {
      id: 7,
      current_PV: 0,
      PV: 1,
      statuses: ["envenenado", "quemado", "congelado", "paralisado", "dormido"],
      level: 1,
      pokedex_ID: 4,
      species: "charmander",
      name: "el papa",
      created_At: "2025-04-22T03:47:20.834Z",
      updated_At: "2025-04-22T03:47:20.834Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
    {
      id: 8,
      current_PV: 80,
      PV: 100,
      statuses: ["envenenado"],
      level: 69,
      pokedex_ID: 13,
      species: "weedle",
      name: "asdf",
      created_At: "2025-04-22T03:47:20.834Z",
      updated_At: "2025-04-22T03:47:20.834Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
    {
      id: 9,
      current_PV: 0,
      PV: 1,
      statuses: ["envenenado", "quemado"],
      level: 1,
      pokedex_ID: 1,
      species: "bulbasaur",
      name: "asd",
      created_At: "2025-04-22T03:53:00.307Z",
      updated_At: "2025-04-22T03:53:00.307Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
    {
      id: 10,
      current_PV: 0,
      PV: 1,
      statuses: [],
      level: 1,
      pokedex_ID: 13,
      species: "weedle",
      name: "asdf",
      created_At: "2025-04-22T04:07:43.732Z",
      updated_At: "2025-04-22T04:07:43.732Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
    {
      id: 11,
      current_PV: 10,
      PV: 1555,
      statuses: ["envenenado", "quemado"],
      level: 100,
      pokedex_ID: 4,
      species: "charmander",
      name: "test",
      created_At: "2025-04-22T04:12:56.505Z",
      updated_At: "2025-04-22T04:12:56.505Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
    {
      id: 12,
      current_PV: 0,
      PV: 1,
      statuses: ["paralisado", "envenenado", "quemado", "congelado", "dormido"],
      level: 15,
      pokedex_ID: 25,
      species: "pikachu",
      name: "el papa",
      created_At: "2025-04-22T04:12:56.505Z",
      updated_At: "2025-04-22T04:12:56.505Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
    {
      id: 14,
      current_PV: 0,
      PV: 1,
      statuses: ["quemado"],
      level: 1,
      pokedex_ID: 4,
      species: "charmander",
      name: "asd",
      created_At: "2025-05-01T21:27:40.010Z",
      updated_At: "2025-05-01T21:27:40.010Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
    {
      id: 15,
      current_PV: 0,
      PV: 1,
      statuses: ["envenenado"],
      level: 1,
      pokedex_ID: 4,
      species: "charmander",
      name: "test",
      created_At: "2025-05-02T04:14:48.493Z",
      updated_At: "2025-05-02T04:14:48.493Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
  ];
  const sala1ListMock = [
    {
      id: 13,
      current_PV: 0,
      PV: 1,
      statuses: ["envenenado", "congelado"],
      level: 1,
      pokedex_ID: 1,
      species: "bulbasaur",
      name: "asdf",
      created_At: "2025-05-01T20:57:36.205Z",
      updated_At: "2025-05-01T20:57:36.205Z",
      userId: "pZ6WUwpYzNoEjNSwehGqykqS4CJxqfzx",
      state_cita: "espera",
    },
  ];

  const [waitList, waiting] = useDragAndDrop<HTMLUListElement, cita>(
    waitListMock,
    {
      group: "waitList",
    }
  );

  const [sala1List, sala1] = useDragAndDrop<HTMLUListElement, cita>(
    sala1ListMock,
    {
      group: "waitList",
      accepts: (): boolean => {
        return sala1.length < 4;
      },
    }
  );

  const [sala2List, sala2] = useDragAndDrop<HTMLUListElement, cita>([], {
    group: "waitList",
    accepts: (): boolean => {
      return sala2.length < 2;
    },
  });
  const [sala3List, sala3] = useDragAndDrop<HTMLUListElement, cita>([], {
    group: "waitList",
    accepts: (): boolean => {
      return sala3.length < 3;
    },
  });
  const [curedList, cured] = useDragAndDrop<HTMLUListElement, cita>([], {
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
  );
}
