interface Route {
  name: string;
  route: string;
}

export const entrenadorRoutes: Route[] = [
  {
    name: "Registro de Citas",
    route: "/entrenador/registro-citas",
  },
  { name: "Dashboard", route: "/entrenador/dashboard" },
];

export const enfermeraRoutes: Route[] = [
  {
    name: "Citas",
    route: "/enfermera/citas",
  },
  { name: "Admin", route: "/enfermera/Admin" },
];
