"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";
import PokemonCard from "../DragAndDrop/PokemonCard";
import { useUserIdContext } from "../Context-provider";
import { getUserWaitingPokemons } from "@/utils/actions";
import { toast } from "react-toastify";

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

async function fetchWaitingPokemons(userId: string) {
  try {
    const response = await getUserWaitingPokemons(userId);
    return response;
  } catch (error) {
    toast.error("something went wrong, please try again later");
    console.error("Error fetching waiting pokemons:", error);
  }
}

const Dashboard = () => {
  const userId = useUserIdContext();
  const [activeTab, setActiveTab] = useState("waiting");
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<cita[]>([]);

  useEffect(() => {
    if (activeTab === "waiting") {
      setIsLoading(true);
      fetchWaitingPokemons(userId as string)
        .then((data) => {
          if (data) {
            setPokemons(data);
            toast.success("Pokemons fetched successfully!");
            console.log("Pokemons:", data);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [activeTab, userId]);

  return (
    <Tabs
      defaultValue="waiting"
      className="w-full mb-4"
      onValueChange={setActiveTab}
    >
      <TabsList className="w-full flex flex-wrap mb-4">
        <TabsTrigger
          value="waiting"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span className="hidden smm:inline">Waiting</span>
        </TabsTrigger>
        <TabsTrigger
          value="in-room"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <Users className="h-4 w-4 flex-shrink-0" />
          <span className="hidden smm:inline">In-Room</span>
        </TabsTrigger>
        <TabsTrigger
          value="done"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <CheckCircle className="h-4 w-4 flex-shrink-0" />
          <span className="hidden smm:inline">Done</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value={activeTab} className="space-y-2">
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <div className="grid grid-cols-1 smg:grid-cols-2 mdg:grid-cols-3 lgg:grid-cols-4 gap-4">
            {pokemons.map((pokemon) => (
              <PokemonCard name={pokemon.name} key={pokemon.id} />
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default Dashboard;
