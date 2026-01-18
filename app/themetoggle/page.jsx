"use client";

import { MoonIcon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setIsdark] = useState(false);
  const [message, setIsmessage] = useState("");

  useEffect(() => {
    const CurrentTheme = localStorage.getItem("theme");
    if (CurrentTheme === "dark") {
      setIsdark(true);
      document.documentElement.classList.add("dark");
      setIsmessage("Dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsdark(false);
      setIsmessage("Light");
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsdark(false);
      setIsmessage("Light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsdark(true);
      setIsmessage("Dark");
    }
  };

  return (
    <section className="min-w-screen py-16">
      <div className="mx-auto">
        <button onClick={toggleTheme}>
          {dark ? <MoonIcon /> : <Sun />} <p> Theme is: {message}</p>
        </button>
      </div>
    </section>
  );
}
export default ThemeToggle;
