"use client";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import PokemonCard from "./PokemonCard";

export function DragAndDrop() {
  const todoItems = [
    "Benito camela (pikachu)",
    "Elver galarga (pikachu)",
    "Susana horia (pikachu)",
    "Rosa melano (pikachu)",
  ];
  const doneItems = ["Lucila Tanga (Pickachu)"];

  const [todoList, todos] = useDragAndDrop<HTMLUListElement, string>(
    todoItems,
    {
      group: "todoList",
    }
  );
  const [doneList, dones] = useDragAndDrop<HTMLUListElement, string>(
    doneItems,
    {
      group: "todoList",
    }
  );

  return (
    <div className="flex items-center justify-center space-x-6">
      <div className=" flex flex-col items-center justify-center space-y-4 shadow-lg dark:shadow-dark-detail border-primary dark:border-dark-primary border-2 rounded-2xl p-4 h-full min-h-60 min-w-80 bg-light-background-subtle dark:bg-dark-background-subtle">
        <h1 className="text-center text-xl font-bold">Sala 1</h1>
        <ul
          ref={todoList}
          className="h-full min-h-60 min-w-80 overflow-y-scroll"
        >
          {todos.map((todo) => (
            <PokemonCard name={todo} key={todo} />
          ))}
        </ul>
      </div>
      <div className=" flex flex-col items-center justify-center space-y-4 shadow-lg dark:shadow-dark-detail border-primary dark:border-dark-primary border-2 rounded-2xl p-4 h-full min-h-60 min-w-80 bg-[#F3FFFF] dark:bg-[#121212]">
        <h1 className="text-center text-xl font-bold ">Sala 2</h1>
        <ul
          ref={doneList}
          className="h-full min-h-60 min-w-80 overflow-y-scroll"
        >
          {dones.map((done) => (
            <PokemonCard name={done} key={done} />
          ))}
        </ul>
      </div>
    </div>
  );
}
