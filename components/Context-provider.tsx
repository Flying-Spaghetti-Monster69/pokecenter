"use client";

import React from "react";

export default function ContextWrapper({
  children,
  value,
}: Readonly<{
  children: React.ReactNode;
  value: string;
}>) {
  const userIdContext = React.createContext<string | null>(null);
  return (
    <userIdContext.Provider value={value}>{children}</userIdContext.Provider>
  );
}
