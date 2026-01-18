"use client";

import { MoonIcon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setIsdark] = useState(false);
  const [message, setIsmessage] = useState("");


  // for saving the theme whenever the page is refresh
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


  // execute
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
    <section className="flex min-h-screen items-center justify-center py-16 text-center">
      <div className="mx-auto">
        <button className="mb-8" onClick={toggleTheme}>
          <div
            className={`w-fit rounded-full border ${dark ? "border-blue-500 bg-blue-900 " : "border-yellow-400 bg-yellow-100"} p-5`}
          >
            {dark ? (
              <MoonIcon className="size-20 text-blue-600" />
            ) : (
              <Sun className="size-20 text-yellow-400" />
            )}
          </div>
        </button>
        <div className="text-center">
          <div className="text-4xl">
            <p className="font-light">Theme is</p>
            <div
              className={`font-bold ${dark ? "text-blue-800" : "text-amber-300"}`}
            >
              {message}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ThemeToggle;
