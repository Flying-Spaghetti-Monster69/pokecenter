import React from "react";
import { Button } from "../ui/button";

const Changes = () => {
  return (
    <div className="fixed bottom-4 w-full flex flex-row gap-2 justify-center items-center">
      <div className="bg-light-background-subtle dark:bg-dark-background-subtle p-2 rounded-xl">
        <Button variant="default" className="cursor-pointer mr-2 ">
          Guardar cambios
        </Button>
        <Button variant="outline" className="cursor-pointer ">
          Descartar cambios
        </Button>
      </div>
    </div>
  );
};

export default Changes;
