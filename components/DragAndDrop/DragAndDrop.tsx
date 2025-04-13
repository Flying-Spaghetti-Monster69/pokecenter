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
    <div className="flex items-center justify-center space-x-4">
      <ul ref={todoList}>
        {todos.map((todo) => (
          <PokemonCard name={todo} key={todo} />
        ))}
      </ul>
      <ul ref={doneList}>
        {dones.map((done) => (
          <PokemonCard name={done} key={done} />
        ))}
      </ul>
    </div>
  );
}
