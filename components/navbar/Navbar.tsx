/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { UserProfileMenu } from "./UserProfileMenu";
import { extrasUser } from "@/utils/consts";

const Navbar = ({ user }: { user: extrasUser }) => {
  return (
    <nav className="z-50 top-0 left-0 fixed  bg-gradient border-b-2 border-primary dark:border-dark-primary h-16 w-full flex items-center justify-between py-2 px-12">
      <Link
        href={"/"}
        className="flex items-center cursor-pointer justify-center h-full w-fit space-x-2 "
      >
        <img src="/pokeball.svg" alt="Pokeball" className="h-full w-fit" />
        <h1 className="text-black dark:text-white font-bold hidden smm:inline">
          Pokecenter
        </h1>
      </Link>
      <div className="flex items-center justify-center h-full w-fit space-x-4">
        <UserProfileMenu user={user} />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
