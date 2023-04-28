// React Hooks
import { useState } from "react";

// Icons
import { genericHamburgerLine } from "../common/icons";

// Remix tools
import { Link, NavLink } from "@remix-run/react";

// Logo
import logo from "public/1.png";
import Planet from "../Logo/LogoAnimation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: string[] = ["Home", "Serviços", "Work", "Sobre nós", "Blog"];

  return (
    <header className=" text-white  z-50  ">
      <nav className="px-4  border-b-2 border-black  md:hidden">
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
            <Link to={"/"}>LOGO</Link>
          </figure>
        </>
        <div
          className={`fixed top-0 left-0 bottom-0 flex w-[60%] max-w-sm flex-col overflow-y-auto border-primeiroazul border-r bg-white py-6 px-6 h-[500px]  rounded-br-[99px] transition-all ease-in-out duration-200 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
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
      <nav className=" hidden border-black  border-b-black  mx-auto w-[100vw] max-w-screen-lg pt-2  px-7 md:block">
        <ul className="z-50 mt-3 flex justify-between items-center">
          <li>
            <figure className=" pt-1 ml-auto w-fit">
              {" "}
              <Link to={"/"}>
                <Planet />
              </Link>
            </figure>
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
          <li>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
                stroke="#098A5B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
}
