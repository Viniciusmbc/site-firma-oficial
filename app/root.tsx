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
        <div className=" bg-[url(https://res.cloudinary.com/deaejawfj/image/upload/v1680785515/Rectangle_3_pavttw.webp)] bg-cover bg-center">
          <Navbar />

          <main className=" max-w-[100vw] overflow-x-hidden">
            <Outlet />
          </main>
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
