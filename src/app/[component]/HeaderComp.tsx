"use client";
import Link from "next/link";
import { useChangeMode } from "./mode";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

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
        <ul className="flex  h-[7vh] gap-2 justify-center items-center">
          <li>검색</li>
          <li>
            <IconButton
              aria-label="github"
              color="primary"
              onClick={() => {
                window.open("https://github.com/chohyunjung0107/cho-portfolio");
              }}
              sx={{ borderRadius: "10px", border: "1px solid #c9c9c9" }}
            >
              <GitHubIcon />
            </IconButton>
          </li>
          <li>
            <IconButton
              aria-label="mode"
              color="primary"
              sx={{ borderRadius: "10px", border: "1px solid #c9c9c9" }}
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
              {mode === "light" ? <LightModeIcon /> : <NightlightIcon />}
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
