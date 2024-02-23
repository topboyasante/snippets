"use client";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import Avatar from "boring-avatars";
import { usePathname } from "next/navigation";

export const NavLinks = [
  {
    name: "Snippets",
    href: "/snippets",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];

function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="w-screen h-[7vh] fixed top-0 bg-white dark:bg-[#0c0a09]">
      <div className="max-w-screen-xl mx-auto h-full p-5 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-5">
          {NavLinks.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className={pathName === item.href ? "bg-primary text-black px-2 py-1 rounded-md" : ""}
              >
                <p className="text-sm">{item.name}</p>
              </Link>
            );
          })}
        </div>
        <Link href={`/devs/1`}>
          <div className="flex">
            <Avatar
              size={30}
              name="Nana K."
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
