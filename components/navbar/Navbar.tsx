/* eslint-disable @next/next/no-img-element */
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-gradient border-b-2 border-primary dark:border-dark-primary h-16 w-full flex items-center justify-between py-2 px-12">
      <div className="flex items-center justify-center h-full w-fit space-x-2 ">
        <img src="/pokeball.svg" alt="Pokeball" className="h-full w-fit" />
        <h1 className="text-black dark:text-white font-bold">Pokecenter</h1>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
