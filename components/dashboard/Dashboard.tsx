"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";
import PokemonCard from "../DragAndDrop/PokemonCard";
import { useUserIdContext } from "../Context-provider";
import { getUserWaitingPokemons } from "@/utils/actions";
import { toast } from "react-toastify";
import LoadingBackdrop from "../LoadingBackdrop";

interface cita {
  id: number;
  current_PV: number;
  PV: number;
  statuses: string[];
  level: number;
  pokedex_ID: number;
  species: string;
  name: string;
  created_At: Date;
  updated_At: Date;
  userId: string;
  state_cita: string;
}

async function fetchPokemons(userId: string, state: string) {
  try {
    const response = await getUserWaitingPokemons(userId, state);
    return response;
  } catch (error) {
    toast.error("something went wrong, please try again later");
    console.error("Error fetching waiting pokemons:", error);
  }
}

const getSalaPokemons = (pokemons: cita[], sala: string) => {
  const pokemonsInSala = pokemons.filter((cita) => cita.state_cita === sala);
  if (pokemonsInSala.length === 0) {
    return <p className="text-center">no tienes pokemon en esta sala....</p>;
  }

  return (
    <div className="grid grid-cols-1 smg:grid-cols-2 mdg:grid-cols-3 lgg:grid-cols-4 gap-4">
      {pokemonsInSala.map((pokemon) => (
        <PokemonCard {...pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

const Dashboard = () => {
  const userId = useUserIdContext();
  const [activeTab, setActiveTab] = useState("espera");
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

  return (
    <Tabs
      defaultValue="espera"
      className="w-full mb-4"
      onValueChange={setActiveTab}
    >
      <TabsList className="w-full flex flex-wrap mb-4">
        <TabsTrigger
          value="espera"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span className="hidden smm:inline">Esperando</span>
        </TabsTrigger>
        <TabsTrigger
          value="sala"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <Users className="h-4 w-4 flex-shrink-0" />
          <span className="hidden smm:inline">En sala</span>
        </TabsTrigger>
        <TabsTrigger
          value="curado"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <CheckCircle className="h-4 w-4 flex-shrink-0" />
          <span className="hidden smm:inline">Curados</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value={activeTab} className="space-y-2">
        {isLoading ? (
          <LoadingBackdrop
            text="Cargando..."
            styles="w-full h-min-fit h-full relative py-6"
          />
        ) : activeTab === "sala" ? (
          <>
            <h1 className="text-2xl font-semibold text-center">Sala 1</h1>
            {getSalaPokemons(pokemons, "sala1")}
            <h1 className="text-2xl font-semibold text-center">Sala 2</h1>
            {getSalaPokemons(pokemons, "sala2")}
            <h1 className="text-2xl font-semibold text-center">Sala 3</h1>
            {getSalaPokemons(pokemons, "sala3")}
          </>
        ) : (
          <div className="grid grid-cols-1 smg:grid-cols-2 mdg:grid-cols-3 lgg:grid-cols-4 gap-4">
            {pokemons.map((pokemon) => (
              <PokemonCard {...pokemon} key={pokemon.id} />
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default Dashboard;
