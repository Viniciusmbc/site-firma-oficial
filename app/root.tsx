import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TypeWritterWithHilowEffect from "./components/TypeWritterEffect/molecules/TypeWritterWithHilowEffect";
import { textherocards } from "./data/textherocards";
import CardsHeroSection from "./components/Cards/CardsHeroSection";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <main className=" max-w-[100vw] overflow-x-hidden">
          <div className=" bg-[url(https://res.cloudinary.com/deaejawfj/image/upload/v1680785515/Rectangle_3_pavttw.webp)]  min-h-screen items-center justify-center bg-cover bg-fixed bg-center">
            <Navbar />

            <section className=" text-white mt-24 mx-auto w-full  px-4  max-w-screen-lg">
              <p className=" text-[#098A5B] font-semibold">
                Seu site completo é aqui:
              </p>

              <TypeWritterWithHilowEffect />

              <button className=" animate-pulse text-lg bg-black/25 border border-[#098A5B] text-[#098A5B] p-7 my-9">
                Fale Conosco
              </button>

              <div className=" flex justify-center items-center md:justify-between flex-wrap">
                {textherocards.map((text, index) => (
                  <CardsHeroSection
                    title={text.title}
                    description={text.description}
                    key={index}
                    icon={text.icon}
                  />
                ))}
              </div>
            </section>
          </div>

          <Outlet />
        </main>

        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
