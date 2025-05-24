"use client";

import type React from "react";

import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "../navbar/ThemeToggle";
import { authClient } from "@/utils/auth-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/utils/schemas";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { buttonStyles, inputStyles } from "@/utils/consts";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setIsLoading(true);
    const { error } = await authClient.signUp.email({
      email: values.email,
      password: values.password,
      name: values.name,
    });

    setIsLoading(false);
    if (!error) {
      toast.success("Usuario creado correctamente");
      return router.push("/entrenador/registro-citas");
    } else {
      toast.error(error.message ? error.message : "Error al crear usuario");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <input
                    className={inputStyles}
                    id="name"
                    placeholder="Ash Ketchup"
                    {...field}
                    required
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input
                    className={inputStyles}
                    id="email"
                    placeholder="pokeballs69@gmail.com"
                    {...field}
                    required
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <input
                    className={inputStyles}
                    id="password"
                    placeholder="Pikachu123"
                    {...field}
                    required
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent cursor-pointer hover:bg-accent/90 dark:bg-dark-primary dark:hover:bg-dark-primary/90 dark:text-dark-foreground"
          >
            {isLoading ? (
              <>
                <LoaderCircle className=" animate-spin" />
                <span className="ml-2">Cargando...</span>
              </>
            ) : (
              "Registrarse"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <ThemeToggle classNames="absolute top-4 right-4" />
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Regístrate
          </CardTitle>
          <CardDescription className="text-center">
            Escoge tu metodo de registro preferido
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Social Login Options */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={async () => {
                await authClient.signIn.social({
                  provider: "google",
                  callbackURL: "/entrenador/citas",
                });
              }}
              variant="outline"
              className={`w-full ${buttonStyles}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Google
            </Button>
            <Button
              onClick={async () => {
                await authClient.signIn.social({
                  provider: "github",
                  callbackURL: "/entrenador/citas",
                });
              }}
              variant="outline"
              className={`w-full ${buttonStyles}`}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>

          <div className="flex items-center">
            <Separator className="flex-1" />
            <span className="px-3 text-sm text-muted-foreground">
              O mediante email
            </span>
            <Separator className="flex-1" />
          </div>

          {/* Registration Form */}
          <SignInForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Ya tienes una cuenta?{" "}
            <Link
              href="/auth/login"
              className="text-accent underline underline-offset-4 hover:text-accent/90 dark:text-dark-primary dark:hover:text-dark-primary/90"
            >
              Inicia Sesión
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
