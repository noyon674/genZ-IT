"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const nabLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blogs", href: "#blogs" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <div
      className={
        scrolled
          ? "bg-[#f56b35] py-5 text-white fixed top-0 w-full shadow-lg transation duration-500 ease-in-out z-10"
          : "bg-[#FF9064] py-5 text-white"
      }
    >
      <div className="container flex justify-between items-center px-5 lg:px-0">
        <div className=" basis-1/2 sm:basis-1/4">
          <Link href="">
            <h1 className="text-3xl sm:text-4xl font-bold">
              gen<span className="text-black">Z</span>.IT
            </h1>
          </Link>
        </div>
        <div className="basis-1/2 hidden lg:block">
          <ul className="flex justify-between">
            {nabLinks.map((item, index) => {
              return (
                <li key={index} className="text-xl">
                  <a href={item.href}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="basis-1/4 text-right hidden lg:block">
          <button className="px-10 py-3 rounded bg-white transition text-[#FF8B5E] text-xl hover:bg-black hover:text-white hover:duration-300 ease-in-out">
            Let&apos;s Talk
          </button>
        </div>
        <div className="lg:hidden">
          <button className="text-3xl text-black"><AiOutlineMenu /></button>
      </div>
      </div>

    </div>
  );
}

export default Header;
