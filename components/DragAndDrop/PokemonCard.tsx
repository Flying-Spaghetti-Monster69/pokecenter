import Image from "next/image";

const PokemonCard = ({
  name,
  PV,
  current_PV,
  level,
  pokedex_ID,
  species,
  statuses,
}: {
  name: string;
  PV: number;
  current_PV: number;
  statuses: string[];
  level: number;
  species: string;
  pokedex_ID: number;
}) => {
  return (
    <li
      className="flex flex-col cursor-grab h-full max-h-36 min-w-80 bg-light-background-secondary border-2 border-primary dark:border-dark-primary dark:bg-dark-background-secondary rounded-2xl my-4 shadow-md shadow-primary/50 dark:shadow-dark-primary/50"
      key={name}
    >
      <div className=" flex items-center justify-between pl-4 pt-0.5">
        <div className="">
          <p className="text-wrap">
            {name} ({species})
          </p>
          <div className="">
            <p className="text-xs text-red-600">
              PV: {current_PV}/{PV}
            </p>
            <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
              Level {level}
            </p>
          </div>
        </div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex_ID}.png`}
          alt={species}
          width={96}
          height={96}
        />
      </div>
      <div className="w-full border-t-2 border-primary dark:border-dark-primary" />
      <div className="flex items-center justify-between px-2 ">
        <div className="flex w-full h-fit items-center space-x-1 py-2">
          {statuses.length === 0 ? (
            <p className="h-5 w-full font-semibold text-sm">Sin efectos...</p>
          ) : (
            statuses.map((status) => {
              return (
                <Image
                  key={status}
                  src={`/${status}.png`}
                  alt={status}
                  className="h-5 w-14"
                  height={20}
                  width={56}
                />
              );
            })
          )}
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
