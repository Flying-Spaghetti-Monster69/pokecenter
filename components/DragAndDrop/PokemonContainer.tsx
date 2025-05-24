import { cita } from "@/utils/consts";
import PokemonCard from "./PokemonCard";
import { RefObject } from "react";

const PokemonContainer = ({
  title,
  list,
  listRef,
  containerStyles,
  limitStyles,
}: {
  title: string;
  list: cita[];
  listRef: RefObject<HTMLUListElement>;
  containerStyles: string;
  limitStyles?: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center shadow-lg border-2 rounded-2xl p-4 h-auto min-h-60 min-w-80 ${containerStyles}`}
    >
      <h1 className="text-center text-xl font-bold ">{title}</h1>
      {limitStyles && (
        <h4 className={`text-center text-xl font-semibold ${limitStyles}`}>
          ({list.length}/5)
        </h4>
      )}
      <ul
        ref={listRef}
        className="h-full min-h-60 min-w-80 overflow-y-visible mt-2"
      >
        {list.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.id} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonContainer;
