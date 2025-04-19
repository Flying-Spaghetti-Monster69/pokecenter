import React from "react";

const Login = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-light-background dark:bg-dark-background">
        <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>
        <form className="flex flex-col space-y-4 w-full max-w-sm">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
