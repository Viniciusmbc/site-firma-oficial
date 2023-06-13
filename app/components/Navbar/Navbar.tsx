// React Hooks
import { useEffect, useState } from "react";

// Icons
import { genericHamburgerLine } from "../common/icons";

// Remix tools
import { Link, NavLink } from "@remix-run/react";
import LogoAnimation from "../Logo/LogoAnimation";

// Logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [changeNav, setChangeNav] = useState(false);

  const menuItems: string[] = ["Home", "Serviços", "Sobre nós", "Blog"];

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header className={`text-white min-w-full  z-50 text-lg h-[130px]  `}>
      <nav className="px-4  border-b-2 border-black h-full fixed text-[#098A5B]  md:hidden">
        <>
          <button
            className=" group absolute z-50  mt-4 flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-black md:hidden "
            aria-label="abre o menu de navegação"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <span
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <span
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
          <figure className=" pt-1 ml-auto w-fit md:hidden">
            {" "}
            <LogoAnimation />
          </figure>
        </>
        <div
          className={`fixed top-0 right-0 bottom-0 flex w-[60%] max-w-sm flex-col overflow-y-auto border-primeiroazul border-l bg-white py-6 px-6 h-[500px]  rounded-br-[99px] transition-all ease-in-out duration-200 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden  `}
        >
          <ul className="z-50 mt-20 space-y-8">
            {menuItems.map((items, index) => (
              <li key={index}>
                <NavLink
                  to="/messages"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {" "}
                  {items}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav
        className={` hidden border-black  border-b-black  mx-auto w-full max-w-screen-lg pt-2 h-fit  inset-x-0  px-7 md:flex md:justify-center md:mx-auto ${
          changeNav ? "sticky bg-black/10" : "absolute top-0 z-50   "
        }`}
      >
        <ul className="z-50 mt-3 flex justify-center mx-auto gap-10 items-center">
          <li className=" mr-auto">
            {" "}
            <LogoAnimation />
          </li>
          {menuItems.map((items, index) => (
            <li key={index}>
              <NavLink
                to={`${
                  items.toLowerCase().replace(/\s/g, "") === "home" ||
                  items.toLowerCase().replace(/\s/g, "") === "sejafranqueado" ||
                  items.toLowerCase().replace(/\s/g, "") === "promoção"
                    ? "/"
                    : items.toLowerCase().replace(/\s/g, "")
                }`}
              >
                {" "}
                {items}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="#contato">Contato</NavLink>
          </li>
          <li className=" border border-[#098A5C] flex">
            <Link
              className=" flex gap-x-2 p-3 items-center justify-center"
              to={"area-do-cliente"}
            >
              Área do cliente
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 9.375C8 4.36696 11.2489 0.5 15 0.5C18.7511 0.5 22 4.36696 22 9.375C22 14.383 18.7511 18.25 15 18.25C11.2489 18.25 8 14.383 8 9.375ZM0.5 26.25C0.5 22.5501 3.35037 19.5529 6.95308 19.2643C9.04182 21.536 11.8787 23 15 23C18.1213 23 20.9583 21.5359 23.0471 19.2641C26.6828 19.5516 29.5 22.5476 29.5 26.25V29.5H0.5V26.25Z"
                  fill="#098A5C"
                  stroke="black"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
