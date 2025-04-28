import Link from "next/link";

const routers = [
  { href: "/", name: "Home" },
  { href: "/workspace", name: "Workspace" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
];

export default function HeaderComponent() {
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
          <li>깃허브</li>
          <li>다크모드</li>
        </ul>
      </div>
    </div>
  );
}
