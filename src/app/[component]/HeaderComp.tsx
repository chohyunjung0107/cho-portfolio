import Link from "next/link";

export default function HeaderComponet() {
  return (
    <div>
      <ul className="flex gap-4 border-b justify-center h-[5vh] items-center">
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/work"}>work</Link>
        </li>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/contact"}>contact</Link>
        </li>
      </ul>
    </div>
  );
}
