/* eslint-disable @next/next/no-img-element */
const PokemonCard = ({ name }: { name: string }) => {
  return (
    <li
      className="flex flex-col cursor-grab h-full max-h-36 w-80 bg-light-background-secondary border-2 border-primary dark:border-dark-primary dark:bg-dark-background-secondary rounded-2xl my-4 shadow-md shadow-primary/50 dark:shadow-dark-primary/50"
      key={name}
    >
      <div className=" flex items-center justify-between pl-4 pt-0.5">
        <div className="">
          <p className="text-wrap">{name}</p>
          <div className="">
            <p className="text-xs text-red-600">PV: 5/69</p>
            <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
              Level 100
            </p>
          </div>
        </div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="pikachu"
        />
      </div>
      <div className="w-full border-t-2 border-primary dark:border-dark-primary" />
      <div className="flex items-center justify-between px-2 ">
        <div className="flex w-full h-fit items-center space-x-1 py-2">
          <img src="/congelado.png" alt="congelado" className="h-5 w-14" />
          <img src="/quemado.png" alt="quemado" className="h-5 w-14" />
          <img src="/paralisado.png" alt="paralisado" className="h-5 w-14" />
          <img src="/dormido.png" alt="dormido" className="h-5 w-14" />

          <img src="/envenenado.png" alt="envenenado" className="h-5 w-14" />
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
