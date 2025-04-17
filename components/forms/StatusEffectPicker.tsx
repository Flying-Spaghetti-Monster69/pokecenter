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
        {/* Dropdown for selecting effects */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start cursor-pointer"
                disabled={availableEffects.length === 0}
              >
                {availableEffects.length > 0
                  ? "Select status effects"
                  : "All effects selected"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-[200px]">
              {availableEffects.map((effect) => (
                <DropdownMenuItem
                  key={effect.id}
                  onClick={() => handleSelectEffect(effect)}
                >
                  {effect.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Display selected effects */}
        <div className="flex flex-wrap gap-2">
          {selectedEffects.map((effect) => (
            <div
              key={effect.id}
              className="flex items-center bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full"
            >
              <span className="mr-1">{effect.name}</span>
              <button
                onClick={() => handleRemoveEffect(effect)}
                className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
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
