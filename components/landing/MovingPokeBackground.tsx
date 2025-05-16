const MovingPokeBackground = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 bg-[url('/pokemonballs1.png')] animate-[pan_30s_linear_infinite] sm:animate-[pan_180s_linear_infinite] bg-fixed bg-size-[20%] sm:bg-size-[15%] lg:bg-size-[10%]">
      {children}
    </div>
  );
};

export default MovingPokeBackground;
