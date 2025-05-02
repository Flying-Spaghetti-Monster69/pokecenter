import React from "react";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="min-h-screen w-full gap-2 flex flex-col items-center justify-center">
      <Image
        src={"/pikachu_test.png"}
        alt="pikachu"
        height={96}
        width={96}
        className="h-24 w-24 animate-pulse"
      />
      <div className="flex flex-row gap-2 items-center">
        <Image
          src={"/pokeball.svg"}
          height={40}
          width={40}
          alt="pokeball"
          className="h-10 w-10 animate-spin text-primary dark:text-dark-primary"
        />
        <span className="text-xs">Espera un momento...</span>
      </div>
    </div>
  );
};

export default Loading;
