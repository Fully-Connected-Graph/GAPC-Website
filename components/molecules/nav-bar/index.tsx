import { readFileSync } from "fs";
import Link from "next/link";
import { FC, useState } from "react";
import MobileMenu from "./mobile-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

export const NavBar: FC = async () => {
  async function create() {
    return JSON.parse(readFileSync("public/navlinks.json", "utf-8")) as {
      name: string;
      url: string;
    }[];
  }

  const links = await create();

  return (
    <nav className="fixed top-0 h-20 w-screen mb-4 flex items-center justify-center z-10 bg-black bg-opacity-[50] bg-blend-soft-light shadow-sm shadow-blue-300 ">
      <div className="w-full max-w-4xl flex gap-4 items-center text-gray-100 max-lg:px-4 max-lg:max-w-full">
        <Link className="flex-1" href="/">
          <div className="flex flex-col items-start gap-1">
            <Image src="/assets/logo.png" alt="logo" className="h-10" />
            <span className="text-sm font-jbMono">GAPC 2025</span>
          </div>
        </Link>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="group py-6 transition duration-50 font-jbMono max-sm:hidden"
          >
            {link.name}
            <span className="block mt-1 max-w-0 group-hover:max-w-full duration-200 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></span>
          </Link>
        ))}
        <MobileMenu links={links} />
      </div>
    </nav>
  );
};
