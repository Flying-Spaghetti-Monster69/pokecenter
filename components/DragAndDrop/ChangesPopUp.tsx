import React from "react";
import { Button } from "../ui/button";

const ChangesPopUp = ({
  refreshFunction,
  updateFunction,
}: {
  refreshFunction: () => Promise<void>;
  updateFunction: () => Promise<void>;
}) => {
  return (
    <div className="fixed bottom-4 w-full flex flex-row gap-2 justify-center items-center">
      <div className="bg-light-background-subtle dark:bg-dark-background-subtle p-2 rounded-xl border border-primary dark:border-dark-primary">
        <Button
          variant="default"
          className="cursor-pointer mr-2 bg-secondary dark:bg-dark-secondary hover:bg-secondary/90 dark:hover:bg-dark-secondary/90"
          onClick={() => updateFunction()}
        >
          Guardar cambios
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer "
          onClick={() => refreshFunction()}
        >
          Descartar cambios
        </Button>
      </div>
    </div>
  );
};

export default ChangesPopUp;
