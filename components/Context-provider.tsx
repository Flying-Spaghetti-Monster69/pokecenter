"use client";

import React from "react";

export const userIdContext = React.createContext<string | null>(null);

export const useUserIdContext = () => React.useContext(userIdContext);

export default function ContextWrapper({
  children,
  value,
}: Readonly<{
  children: React.ReactNode;
  value: string;
}>) {
  return (
    <userIdContext.Provider value={value}>{children}</userIdContext.Provider>
  );
}
