import { useEffect, useState } from "react";
import { getUserWaitingPokemons } from "./actions";
import { toast } from "react-toastify";
import { cita } from "./consts";

async function fetchPokemons(userId: string, state: string) {
  try {
    const response = await getUserWaitingPokemons(userId, state);
    return response;
  } catch (error) {
    toast.error("something went wrong, please try again later");
    console.error("Error fetching waiting pokemons:", error);
  }
}

interface useGetPokemonByTabProps {
  userId: string;
  activeTab: string;
}

export function useGetPokemonByTab({
  userId,
  activeTab,
}: useGetPokemonByTabProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<cita[]>([]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setIsLoading(true);
      fetchPokemons(userId as string, activeTab)
        .then((data) => {
          if (data) {
            setPokemons(data);
            console.log("Pokemons:", data);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    return () => {
      ignore = true;
    };
  }, [activeTab, userId]);

  return { isLoading, pokemons };
}
