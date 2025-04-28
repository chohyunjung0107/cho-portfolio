"use client";
import Link from "next/link";
import { useChangeMode } from "./mode";

const routers = [
  { href: "/", name: "Home" },
  { href: "/work", name: "Work" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
];

export default function HeaderComponent() {
  const { mode, setMode } = useChangeMode();

  return (
    <div className="w-[1024px] border-b flex justify-between ">
      {/* 왼쪽 메뉴 */}
      <div className="pl-5">
        <ul className="flex  h-[7vh] gap-4 justify-center items-center">
          {routers.map((router) => (
            <li key={router.href}>
              <Link href={router.href}>{router.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 오른쪽 메뉴 */}
      <div className="pr-5">
        <ul className="flex  h-[7vh] gap-4 justify-center items-center">
          <li>검색</li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => {
                window.open("https://github.com/chohyunjung0107/cho-portfolio");
              }}
            >
              깃허브
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => {
                setMode((prev) => {
                  if (prev === "light") {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("mode", "dark");
                    return "dark";
                  } else {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("mode", "light");
                    return "light";
                  }
                });
              }}
            >
              {mode === "light" ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
