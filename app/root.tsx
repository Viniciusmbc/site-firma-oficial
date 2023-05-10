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
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ButtonWithAnimatedBackground from "./components/AnimateBackground/ButtonWithAnimatedBackground";

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
        <main className=" max-w-[100vw] overflow-x-hidden relative">
          <div className=" bg-[url(https://res.cloudinary.com/deaejawfj/image/upload/v1683478256/backgroundhero_rob5tu.webp)]  min-h-screen items-center justify-center bg-cover bg-fixed bg-center">
            <Navbar />

            <section className=" text-white mt-32 mx-auto w-full  px-4  max-w-screen-lg">
              <p className=" text-[#098A5B] text-lg font-semibold">
                Seu site completo é aqui:
              </p>

              <TypeWritterWithHilowEffect />

              <ButtonWithAnimatedBackground />

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

          <ChatWindow />

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
