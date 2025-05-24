"use client";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { cita } from "@/utils/consts";
import { useCallback, useEffect, useState } from "react";
import { getNotDonePokemons, updateStateOfPokemons } from "@/utils/actions";
import LoadingBackdrop from "../LoadingBackdrop";
import ChangesPopUp from "./ChangesPopUp";
import PokemonContainer from "./PokemonContainer";

enum loading {
  noLoading = "Terminado...",
  fetchingPokemons = "Cargando los pokemón...",
  updatingPokemons = "Actualizando pokemón...",
}

export function DragAndDrop() {
  const [isLoading, setIsLoading] = useState(loading.noLoading);
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
        return sala1.length < 5;
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
  const [curedList, cured, setCured] = useDragAndDrop<HTMLUListElement, cita>(
    [],
    {
      group: "waitList",
    }
  );

  const fetchPokemons = useCallback(async () => {
    setIsLoading(loading.fetchingPokemons);
    const response = await getNotDonePokemons();

    if (!response) {
      return;
    }

    setWaiting(response.waiting);
    setSala1(response.sala1);
    setSala2(response.sala2);
    setSala3(response.sala3);
    setCured([]);
    setIsLoading(loading.noLoading);
  }, [setSala1, setSala2, setSala3, setWaiting, setCured]);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      fetchPokemons();
    }

    return () => {
      ignore = true;
    };
  }, [fetchPokemons]);

  const handleUpdatingPokemons = async () => {
    setIsLoading(loading.updatingPokemons);
    const response = await updateStateOfPokemons({
      waiting,
      sala1,
      sala2,
      sala3,
      cured,
    });

    if (!response) {
      return;
    }

    fetchPokemons();
  };

  return (
    <>
      {isLoading !== loading.noLoading && (
        <LoadingBackdrop
          text={isLoading}
          styles="w-full h-[calc(100vh-64px)] mt-[64px]"
        />
      )}
      <div className="flex items-start justify-start space-x-6 mt-4 px-8">
        <PokemonContainer
          title="Esperando"
          list={waiting}
          listRef={waitList}
          containerStyles={
            "dark:shadow-dark-secondary border-dark-secondary bg-light-background-subtle dark:bg-dark-background-subtle"
          }
        />
        <PokemonContainer
          title="Sala 1"
          list={sala1}
          listRef={sala1List}
          containerStyles={
            "dark:shadow-dark-primary border-primary dark:border-dark-primary bg-light-background-subtle dark:bg-dark-background-subtle"
          }
          limitStyles={" text-secondary dark:text-dark-secondary"}
        />
        <PokemonContainer
          title="Sala 2"
          list={sala2}
          listRef={sala2List}
          containerStyles={
            "dark:shadow-dark-primary border-primary dark:border-dark-primary bg-light-background-subtle dark:bg-dark-background-subtle"
          }
          limitStyles={" text-secondary dark:text-dark-secondary"}
        />
        <PokemonContainer
          title="Sala 3"
          list={sala3}
          listRef={sala3List}
          containerStyles={
            "dark:shadow-dark-primary border-primary dark:border-dark-primary bg-light-background-subtle dark:bg-dark-background-subtle"
          }
          limitStyles={" text-secondary dark:text-dark-secondary"}
        />
        <PokemonContainer
          title="Curados"
          list={cured}
          listRef={curedList}
          containerStyles={
            "dark:shadow-green-400 border-green-400 bg-light-background-subtle dark:bg-dark-background-subtle"
          }
        />
      </div>
      <ChangesPopUp
        refreshFunction={fetchPokemons}
        updateFunction={handleUpdatingPokemons}
      />
    </>
  );
}
