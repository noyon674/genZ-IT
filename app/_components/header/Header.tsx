"use client";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

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
  // const [scrolled, setScrolled] = useState(false);
  // const [showMenu, setShowMenu] = useState(false)

  // useEffect(()=>{
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   });
  // }, [])
  return (
    <div
      className={"bg-[#009990] fixed top-0 w-full h-[10vh] md:py-6 lg:py-0 flex items-center z-10 px-5"}
    >
      <div className="container flex justify-between items-center">
        <div className=" basis-1/2 sm:basis-1/4">
        <Link href='#' className="text-3xl text-white font-bold">gen<span className="text-black">Z</span>.IT</Link>
        </div>
        <div className="basis-1/2 hidden lg:block">
          <ul className="flex justify-around">
            {nabLinks.map((item, index) => {
              return (
                <li key={index} className="">
                  <a className="text-base text-white uppercase font-semibold" href={item.href}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="basis-1/4 text-right hidden lg:block">
          <button className="bg-black text-white py-3 px-6 text-base font-semibold rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Let&apos;s Talk
          </button>
        </div>
        <div className="lg:hidden">
          <button className="text-3xl text-black"><AiOutlineMenu /></button>
      </div>
      </div>
      {
        <div className="fixed bottom-8 right-8 " data-aos="flip-left">
        <Link href='#' className="text-xl bg-[#f56b35] h-14 w-14 flex justify-center items-center rounded-full transition duration-500 ease-in-out">
        <FaArrowUp />
        </Link>
      </div>
      }
    </div>
  );
}

export default Header;
