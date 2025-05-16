import MovingPokeBackground from "@/components/landing/MovingPokeBackground";
import { ThemeToggle } from "@/components/navbar/ThemeToggle";
import { Button } from "@/components/ui/button";
import { buttonStyles } from "@/utils/consts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MovingPokeBackground>
      <ThemeToggle classNames="absolute top-4 right-4" />

      <main className="flex flex-col sm:flex-row gap-2 items-center justify-between w-full max-w-5xl text-center rounded-3xl p-6 m-2 bg-light-background-subtle dark:bg-dark-background-subtle">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl">
            🏥 Centro Pokémon – Cuidado Rápido y Eficiente para tus Compañeros
          </h1>
          <p className="text-start py-2 mt-2">
            En el Centro Pokémon, tratamos Pokémon heridos de forma rápida y
            segura. Usamos tecnología avanzada para diagnosticar, curar y
            revitalizar a tus compañeros en segundos. Solo selecciona al Pokémon
            que necesita atención, y nuestro sistema automatizado se encargará
            del resto. Recupera la salud de tu equipo y vuelve a la acción sin
            demoras. Atención 24/7, sin costo, sin complicaciones.
          </p>
          <div className="flex gap-2 items-center sm:justify-start justify-center mt-16">
            <Link href="/auth/login">
              <Button variant="outline" className={`mb-4 ${buttonStyles}`}>
                Iniciar Sesión
              </Button>
            </Link>

            <Link href="/auth/registro">
              <Button
                variant="default"
                className={`mb-4 bg-accent dark:bg-dark-accent  ${buttonStyles} hover:bg-accent/85 dark:hover:bg-dark-accent/85`}
              >
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/Chansey.png"
          alt="Chansey"
          width={300}
          height={275}
          className="h-[137px] w-[150px] sm:h-[275px] sm:w-[300px] animate-[jumping_3s_infinite]"
        />
      </main>
    </MovingPokeBackground>
  );
}
