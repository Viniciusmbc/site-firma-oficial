import type { V2_MetaFunction } from "@remix-run/node";

// Components
import CardsHome from "~/components/Cards/CardsHeroSection";
import CardsServiceSection from "~/components/Cards/CardsServiceSection";

// Images
import imagework1 from "public/imagemwork1.png";
import imagework2 from "public/imagemwork2.png";
import imagework3 from "public/imagemwork3.png";
import imagework4 from "public/imagemwork4.png";
import imagemabout1 from "public/about1.png";
import imagemabout2 from "public/about2.png";
import imagemabout3 from "public/about3.png";

// Services content
import { services } from "~/utils/services";

// Meta
export const meta: V2_MetaFunction = () => {
  return [{ title: "Digital Agency" }];
};

export default function Index() {
  return (
    <>
      <section className=" text-white my-24 mx-auto w-full  px-4  max-w-screen-lg">
        <p className=" text-[#098A5B]">CREATIVE MIND, CREATIVE WORKS.</p>
        <h1 className=" text-6xl mt-5 max-w-md font-bold">
          We Are Digital Agency
        </h1>
        <button className=" border border-[#098A5B] text-[#098A5B] p-7 my-9">
          GETTING STARTED
        </button>
        <div className=" flex justify-between">
          <CardsHome />
          <CardsHome />
          <CardsHome />
        </div>
      </section>
      <div className=" bg-[#101017]">
        <section
          id="services"
          className="  w-full  py-32  px-4  max-w-screen-lg mx-auto"
        >
          <h2 className=" text-white text-3xl flex items-center ">
            {" "}
            <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
            Services
          </h2>
          <p className=" text-[#098A5B] mb-10 mt-2">OUR SERVICES FOR CLIENTS</p>
          <div className=" grid grid-cols-3 grid-rows-2 gap-8 ">
            {services.map((service, index) => (
              <CardsServiceSection
                key={index}
                src={service.src}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <span className=" flex items-center justify-center mx-auto border border-[#098A5B] h-20 w-0 mt-16"></span>
        </section>
      </div>
      <div className="bg-[#313131]">
        <section id="works" className=" pt-16 pb-10 ">
          <div className="  px-4  w-full   max-w-screen-lg mx-auto mb-20">
            <h3 className=" text-white text-3xl flex items-center   ">
              {" "}
              <span className=" border border-[#098A5B] w-16 h-0 mr-4 "></span>
              Works
            </h3>
            <p className=" text-[#098A5B] mb-10 mt-2">OUR THINGS WE"VE MADE</p>
          </div>

          <div className=" flex w-full mx-auto justify-center">
            <img src={imagework1} alt="Work 1" width={252} height={248} />
            <img src={imagework2} alt="Work 1" width={252} height={248} />
            <img src={imagework3} alt="Work 1" width={252} height={248} />
            <img src={imagework4} alt="Work 1" width={252} height={248} />
            <img src={imagework1} alt="Work 1" width={252} height={248} />
            <img src={imagework2} alt="Work 1" width={252} height={248} />
          </div>
          <span className=" flex items-center justify-center mx-auto border border-[#098A5B] h-20 w-0 my-12"></span>
        </section>
      </div>
      <div className=" bg-[#101017]">
        <section>
          <h2 className=" text-white text-3xl flex items-center ">
            {" "}
            <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
            Sobre nós
          </h2>
          <p className=" text-[#098A5B] mb-10 mt-2">
            WE ARE MORE THAN DIGITAL AGENCY
          </p>
          <div className=" grid grid-rows-3 grid-flow-col gap-4  ">
            <img
              src={imagemabout1}
              width="495"
              height="574"
              alt="imagem about"
            />
            <img
              src={imagemabout2}
              width="545"
              height="270"
              alt="imagem about"
            />
            <img
              src={imagemabout3}
              width="545"
              height="270"
              alt="imagem about"
            />
          </div>
        </section>
      </div>
    </>
  );
}
