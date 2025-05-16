import React from "react";
import MovingPokeBackground from "@/components/landing/MovingPokeBackground";
import LoadingBackdrop from "@/components/LoadingBackdrop";
const Loading = () => {
  return (
    <MovingPokeBackground>
      <LoadingBackdrop
        text="espera un momento..."
        styles="w-full min-h-screen backdrop-blur-md"
      />
    </MovingPokeBackground>
  );
};

export default Loading;
