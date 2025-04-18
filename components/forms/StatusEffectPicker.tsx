"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";
import Image from "next/image";

type StatusEffect = {
  id: string;
  name: string;
};

const StatusEffectPicker = () => {
  const initialStatusEffects: StatusEffect[] = [
    { id: "envenenado", name: "Envenenado" },
    { id: "quemado", name: "Quemado" },
    { id: "congelado", name: "Congelado" },
    { id: "paralisado", name: "Paralisado" },
    { id: "dormido", name: "Dormido" },
  ];

  const [availableEffects, setAvailableEffects] =
    useState<StatusEffect[]>(initialStatusEffects);
  const [selectedEffects, setSelectedEffects] = useState<StatusEffect[]>([]);

  const handleSelectEffect = (effect: StatusEffect) => {
    setSelectedEffects([...selectedEffects, effect]);

    setAvailableEffects(availableEffects.filter((e) => e.id !== effect.id));
  };

  const handleRemoveEffect = (effect: StatusEffect) => {
    setSelectedEffects(selectedEffects.filter((e) => e.id !== effect.id));

    setAvailableEffects([...availableEffects, effect]);
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start cursor-pointer hover:bg-light-background-secondary hover:border-primary dark:hover:bg-dark-background-secondary dark:hover:border-dark-primary"
                disabled={availableEffects.length === 0}
              >
                {availableEffects.length > 0
                  ? "Selecciona los efectos del pokemon"
                  : "Todos los efectos seleccionados"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-[200px] bg-light-background-subtle dark:bg-dark-background-subtle border-primary dark:border-dark-primary">
              {availableEffects.map((effect) => (
                <DropdownMenuItem
                  key={effect.id}
                  onClick={() => handleSelectEffect(effect)}
                  className=" dark:hover:bg-dark-background-secondary cursor-pointer"
                >
                  <Image
                    src={`/${effect.id}.png`}
                    alt={effect.name}
                    className="h-5 w-14 mr-2"
                    width={56}
                    height={20}
                  />
                  <p>{effect.name}</p>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-wrap gap-2">
          {selectedEffects.map((effect) => (
            <div
              key={effect.id}
              className="flex items-center bg-light-background-subtle  dark:bg-dark-background-secondary border border-primary dark:border-dark-primary px-3 py-1 rounded-full"
            >
              <Image
                src={`/${effect.id}.png`}
                alt={effect.name}
                className="h-4 w-12 mr-2"
                width={48}
                height={16}
              />
              <span className="mr-1">{effect.name}</span>
              <button
                onClick={() => handleRemoveEffect(effect)}
                className="cursor-pointer text-accent hover:text-primary/80 dark:text-dark-primary dark:hover:text-dark-primary/80"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StatusEffectPicker;
