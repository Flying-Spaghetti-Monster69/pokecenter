import { Button } from "@/components/ui/button";
import { buttonStyles } from "@/utils/consts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <Link href="/auth/login">
        <Button
          className={`mb-4 bg-accent dark:bg-dark-accent ${buttonStyles}`}
        >
          Iniciar Sesión
        </Button>
      </Link>

      <Link href="/auth/registro">
        <Button
          className={`mb-4 bg-accent dark:bg-dark-accent ${buttonStyles}`}
        >
          Registrarse
        </Button>
      </Link>
    </div>
  );
}
