"use client";
import { useEffect, useState } from "react";

export function useChangeMode() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("mode") as string;

    if (getLocalStorage === "dark") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
      document.documentElement.classList.add("dark");
    } else if (getLocalStorage === "light") {
      setMode("light");
      localStorage.setItem("mode", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
}
