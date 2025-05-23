interface Route {
  name: string;
  route: string;
}

export interface user {
  id: string;
  name: string;
  email: string;
  image?: string | null | undefined | undefined;
  role?: string | null | undefined;
}

export interface cita {
  id: number;
  current_PV: number;
  PV: number;
  statuses: string[];
  level: number;
  pokedex_ID: number;
  species: string;
  name: string;
  created_At: Date;
  updated_At: Date;
  userId: string;
  state_cita: string;
}

export interface extrasUser extends user {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const buttonStyles =
  "hover:bg-light-background-secondary hover:border-primary dark:hover:bg-dark-background-secondary dark:hover:border-dark-primary cursor-pointer";

export const inputStyles =
  "w-full p-2 border rounded-md hover:border-primary outline-0 focus:border-primary dark:hover:border-dark-primary dark:focus:border-dark-primary dark:bg-dark-background";

export const entrenadorRoutes: Route[] = [
  {
    name: "Registro de Citas",
    route: "/entrenador/registro-citas",
  },
  { name: "Dashboard", route: "/entrenador/dashboard" },
];

export const enfermeraRoutes: Route[] = [
  {
    name: "Flujo de Citas",
    route: "/enfermera/citas",
  },
  { name: "Admin", route: "/enfermera/admin/1" },
];
