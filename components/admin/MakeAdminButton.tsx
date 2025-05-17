"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { makeAdmin } from "@/utils/actions";

const MakeAdminButton = ({ userId }: { userId: string }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleMakeAdmin = async () => {
    setIsDisabled(true);
    try {
      await makeAdmin(userId);
      toast.success("Usuario convertido a admin");
    } catch (error) {
      console.error("Error making admin:", error);
      toast.error("Error al hacer admin");
      setIsDisabled(false);
    }
  };

  return (
    <Button
      disabled={isDisabled}
      onClick={() => handleMakeAdmin()}
      className="bg-accent hover:bg-accent/80 dark:bg-dark-accent dark:hover:bg-dark-accent/80 cursor-pointer"
    >
      Hacer admin
    </Button>
  );
};

export default MakeAdminButton;
