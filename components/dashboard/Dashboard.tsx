"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Users } from "lucide-react";
import { useState } from "react";
import PokemonCard from "../DragAndDrop/PokemonCard";
import { useUserIdContext } from "../Context-provider";
import LoadingBackdrop from "../LoadingBackdrop";
import { useGetPokemonByTab } from "@/utils/hooks";
import { buttonStyles, cita } from "@/utils/consts";
import Link from "next/link";
import { Button } from "../ui/button";

const getSalaPokemons = (pokemons: cita[], sala: string) => {
  const pokemonsInSala = pokemons.filter((cita) => cita.state_cita === sala);
  if (pokemonsInSala.length === 0) {
    return <p className="text-center">No tienes pokemon en esta sala....</p>;
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
  const userId = useUserIdContext() as string;
  const [activeTab, setActiveTab] = useState("espera");
  const { isLoading, pokemons } = useGetPokemonByTab({ userId, activeTab });

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
        ) : pokemons.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg font-semibold">
              No tienes Pokémon esperando en la sección de {activeTab} aún.
            </p>
            {activeTab === "espera" && (
              <>
                <p className="text-sm mt-2 mb-4">
                  Registra tus Pokémon para comenzar el proceso de curación.
                </p>
                <Link href={"/entrenador/registro-citas"}>
                  <Button
                    className={`bg-primary dark:bg-dark-primary text-accent-foreground ${buttonStyles}`}
                  >
                    Ir a registrar
                  </Button>
                </Link>
              </>
            )}
          </div>
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
