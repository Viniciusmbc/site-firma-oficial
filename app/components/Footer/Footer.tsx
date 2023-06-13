import { Link } from "@remix-run/react";
import logo from "public/logo.png";
import { about_us, contact_data, our_services } from "~/data/footer_data";
import {
  FacebookIcon,
  InstagramIcon,
  VectorIcon,
  tiktokIcon,
  twitterIcon,
  youtubeIcon,
} from "../common/icons";

export default function Footer() {
  return (
    <div className=" bg-black w-full bg-cover bg-center backgroundImageFooter  ">
      <footer className=" w-full mx-auto pt-14 ">
        <p className=" w-full max-w-screen-lg text-white mb-6 flex justify-center mx-auto text-lg">
          Vamos conversar!
        </p>
        <strong className=" w-full max-w-screen-lg font-bold text-5xl text-white flex justify-center mx-auto">
          TEM UM PROJETO EM MENTE?
        </strong>
        <div className=" w-full max-w-screen-lg flex mt-20 justify-center items-center mx-auto">
          <img
            src={logo}
            width={128}
            height={128}
            alt="Logo da OTC Soluções em TI"
            className="w-32 h-32 mr-32"
          />
          <article className=" max-w-screen-lg flex w-full justify-between">
            <div className=" text-white w-52 max-w-full">
              <p className=" text-xl font-bold mb-6">FALE CONOSCO</p>
              <ul className=" space-y-6">
                {contact_data.map(({ id, icon, text }) => (
                  <li
                    className=" flex items-center  gap-x-3 text-white/70"
                    key={id}
                  >
                    <span>{icon}</span>
                    <Link to={text}>{text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" text-white w-52 max-w-full">
              <p className=" text-xl font-bold mb-6">NOSSOS SERVIÇOS</p>
              <ul className=" space-y-6">
                {our_services.map(({ id, text }) => (
                  <li key={id} className=" text-white/70">
                    <Link to={text}>{text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" text-white w-52 max-w-full">
              <p className=" text-xl font-bold mb-6">A OTC</p>
              <ul className=" space-y-6">
                {about_us.map(({ id, text }) => (
                  <li key={id} className=" text-white/70">
                    <Link to={text} key={id}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
        <div className=" border-t-2 border-t-[#098A5B] flex justify-between items-center w-full  mx-auto mt-10">
          <div className=" max-w-screen-lg flex w-full justify-between items-center mx-auto py-4">
            <p className=" text-white/30 text-sm">
              Copyright 2023 OTC - Soluções em T.I.
            </p>
            <ul className=" flex items-center justify-center gap-x-4">
              <li>{InstagramIcon}</li>

              <li>{FacebookIcon}</li>

              <li>{twitterIcon}</li>
              <li>{tiktokIcon}</li>
              <li>{youtubeIcon}</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
