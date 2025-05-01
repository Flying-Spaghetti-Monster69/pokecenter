"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";
import PokemonCard from "../DragAndDrop/PokemonCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("waiting");

  useEffect(() => {}, [activeTab]);

  return (
    <Tabs
      defaultValue="waiting"
      className="w-full"
      onValueChange={setActiveTab}
    >
      <TabsList className="w-full flex flex-wrap mb-8">
        <TabsTrigger
          value="waiting"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span className="hidden xs:inline">Waiting</span>
        </TabsTrigger>
        <TabsTrigger
          value="in-room"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <Users className="h-4 w-4 flex-shrink-0" />
          <span className="hidden xs:inline">In-Room</span>
        </TabsTrigger>
        <TabsTrigger
          value="done"
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3"
        >
          <CheckCircle className="h-4 w-4 flex-shrink-0" />
          <span className="hidden xs:inline">Done</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value={activeTab} className="space-y-2">
        <div className="grid grid-cols-1 smg:grid-cols-2 mdg:grid-cols-3 lgg:grid-cols-4 gap-4">
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
          <PokemonCard name="Pikachu" />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Dashboard;
