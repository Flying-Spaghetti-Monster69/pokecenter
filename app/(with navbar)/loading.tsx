import React from "react";
import { LoaderCircle } from "lucide-react";
const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <LoaderCircle className="h-10 w-10 animate-spin text-primary dark:text-dark-primary" />
      <span className="text-xs">Loading...</span>
    </div>
  );
};

export default Loading;
