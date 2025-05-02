"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const ToastError = ({ message, route }: { message: string; route: string }) => {
  const toastRef = useRef<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!toastRef.current) {
      toast.error(message);
      router.push(route);
      toastRef.current = true; // Prevent duplicate executions
    }
  }, [message, route, router]);

  return null;
};

export default ToastError;
