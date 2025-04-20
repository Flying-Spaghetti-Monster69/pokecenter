/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { UserProfileMenu } from "./UserProfileMenu";

const Navbar = () => {
  return (
    <nav className="z-50 top-0 left-0 fixed  bg-gradient border-b-2 border-primary dark:border-dark-primary h-16 w-full flex items-center justify-between py-2 px-12">
      <Link
        href={"/"}
        className="flex items-center cursor-pointer justify-center h-full w-fit space-x-2 "
      >
        <img src="/pokeball.svg" alt="Pokeball" className="h-full w-fit" />
        <h1 className="text-black dark:text-white font-bold">Pokecenter</h1>
      </Link>
      <div className="flex items-center justify-center h-full w-fit space-x-4">
        {/* <Link
          href={"/enfermera/citas"}
          className="p-2 rounded-xl bg-light-background-subtle hover:border-primary border-2 border-transparent dark:hover:border-dark-primary dark:bg-dark-background-subtle"
        >
          Citas
        </Link>
        <Link
          href={"/entrenador/registro-citas"}
          className="p-2 rounded-xl bg-light-background-subtle hover:border-primary border-2 border-transparent dark:hover:border-dark-primary dark:bg-dark-background-subtle"
        >
          Registro
        </Link> */}
        <UserProfileMenu />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
