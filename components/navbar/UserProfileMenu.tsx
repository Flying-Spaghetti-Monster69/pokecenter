"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LoaderCircle, LogOut, Menu, X } from "lucide-react";
import { enfermeraRoutes, entrenadorRoutes } from "@/utils/consts";
import Link from "next/link";
import { authClient } from "@/utils/auth-client"; // import the auth client
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function UserProfileMenu() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = authClient.useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  if (isPending) {
    return (
      <div className="relative h-fit w-fit max-h-11 flex items-center gap-2 p-3 rounded-md bg-light-background border-primary dark:border-dark-primary border-2 cursor-pointer hover:bg-light-background-subtle dark:bg-dark-background dark:hover:bg-dark-background-subtle">
        <LoaderCircle className="h-4 w-4 animate-spin" />
        <span className="text-xs">Loading...</span>
      </div>
    );
  }

  if (error) {
    toast.error("Error fetching session data. Please try again later.");
    router.push("/auth/login");
  }

  // Get initials from user name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative flex items-center gap-2 p-5 rounded-md bg-light-background border-primary dark:border-dark-primary border-2 cursor-pointer hover:bg-light-background-subtle dark:bg-dark-background dark:hover:bg-dark-background-subtle"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={session?.user.image as string}
              alt={session?.user.name}
            />
            <AvatarFallback>
              {getInitials(session?.user.name as string)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1.5">
            <p className="text-sm font-medium leading-none">
              {session?.user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user.email}
            </p>
            <p className="text-xs leading-none text-accent dark:text-dark-accent">
              {session?.user.role === "admin" ? "Enfermera" : "Entrenador"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {session?.user.role === "admin"
            ? enfermeraRoutes.map((route) => {
                return (
                  <Link key={route.name} href={route.route}>
                    <DropdownMenuItem className="cursor-pointer">
                      {route.name}
                    </DropdownMenuItem>
                  </Link>
                );
              })
            : entrenadorRoutes.map((route) => {
                return (
                  <Link key={route.name} href={route.route}>
                    <DropdownMenuItem className="cursor-pointer">
                      {route.name}
                    </DropdownMenuItem>
                  </Link>
                );
              })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={async () =>
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  toast.success("Logged out successfully.");
                  router.push("/auth/login"); // redirect to login page
                },
              },
            })
          }
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
