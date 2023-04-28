import type { V2_MetaFunction } from "@remix-run/node";

// Components
import CardsServiceSection from "~/components/Cards/CardsServiceSection";

// Images
import imagemabout1 from "public/about1.png";
import imagemabout2 from "public/about2.png";
import imagemabout3 from "public/about3.png";

// Services content
import { services } from "~/data/services";
import { testemonials } from "~/data/testemonials";
import CardsDepoimentos from "~/components/Cards/CardsDepoimentos";
import { textherocards } from "~/data/textherocards";
import CardsHeroSection from "~/components/Cards/CardsHeroSection";
import TypeWritterWithHilowEffect from "~/components/TypeWritterEffect/molecules/TypeWritterWithHilowEffect";
import TextAnimationEntry from "~/components/TextAnimationEntry/TextAnimationEntry";

import ImageGallery from "~/components/Mosaic/ImageGallery";

import image2 from "public/2.png";
import image3 from "public/3.png";
import image4 from "public/4.png";
import image5 from "public/5.png";
import image6 from "public/6.png";
import PencilWriting from "~/components/PencilWriting/PencilWriting";
import LogoAnimation from "~/components/Logo/LogoAnimation";
import Planet from "~/components/Logo/LogoAnimation";

// Meta
export const meta: V2_MetaFunction = () => {
  return [{ title: "Digital Agency" }];
};

export default function Index() {
  const images = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image2,
    image3,
    image4,
  ];

  return (
    <>
      <section className=" text-white my-24 mx-auto w-full  px-4  max-w-screen-lg">
        <p className=" text-[#098A5B] font-semibold">
          Seu site completo é aqui:
        </p>

        <TypeWritterWithHilowEffect />

        <button className=" border border-[#098A5B] text-[#098A5B] p-7 my-9">
          Fale Conosco
        </button>
        <div className=" flex justify-between">
          {textherocards.map((text, index) => (
            <CardsHeroSection
              title={text.title}
              description={text.description}
              key={index}
            />
          ))}
          <article className=" bg-[#313131] max-w-[294px] w-full mb-8">
            <div className=" border-b border-[#098A5B] pb-3 pl-4  mt-6">
              <PencilWriting />
              <strong className=" text-xl uppercase">Redaçao</strong>
            </div>

            <p className=" mt-5 pl-4 pb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              itaque error doloribus iure officia aliquid voluptatum, porro est
              nisi corporis nam impedit reprehenderit, dolor quaerat a quam
              provident. Deleniti, debitis?
            </p>
          </article>
        </div>
      </section>
      <div className=" bg-[#101017]">
        <section
          id="services"
          className="  w-full  py-32  px-4  max-w-screen-lg mx-auto"
        >
          <TextAnimationEntry>
            <h2 className=" text-white text-3xl flex items-center ">
              {" "}
              <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
              Serviços
            </h2>
          </TextAnimationEntry>

          <Planet />
          <p className=" text-[#098A5B] mb-10 mt-2  uppercase  font-semibold">
            Tudo que você precisa para alavancar o seu negócio
          </p>
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
      <section>
        <div className="bg-[#313131]">
          <section id="works" className=" pt-16 pb-10 ">
            <div className="  px-4  w-full   max-w-screen-lg mx-auto mb-20">
              <TextAnimationEntry>
                <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
                Área do Cliente
              </TextAnimationEntry>{" "}
              <p className=" text-[#098A5B] mb-10 mt-2">
                ACOMPANHE SEU PROJETO DE UMA FORMA COMO VOCÊ NUNCA VIU
              </p>
              <p>
                Oferecemos uma plataforma exclusiva para acompanhamento em tempo
                real do desenvolvimento do seu projeto. Na área do cliente, você
                terá acesso às atualizações do seu protótipo, site e todas as
                funcionalidades contratadas. Atualizamos diariamente o andamento
                do seu projeto. Além disso, é possível fazer o download dos
                conteúdos produzidos para suas redes sociais, revisar e sugerir
                alterações nos textos e protótipo. Tudo em um único lugar para
                sua maior comodidade.
              </p>
            </div>

            <span className=" flex items-center justify-center mx-auto border border-[#098A5B] h-20 w-0 my-12"></span>
          </section>
        </div>
      </section>
      <div className=" bg-[#101017]">
        <section className=" max-w-screen-lg mx-auto text-white  pt-16 pb-10 ">
          <h2 className=" text-white text-3xl flex items-center ">
            {" "}
            <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
            Sobre nós
          </h2>
          <p className=" text-[#098A5B] mb-10 mt-2">
            QUALIDADE, AGILIDADE E PRATICIDADE
          </p>
          <div className=" grid justify-between grid-rows-2 grid-cols-2 h-full items-center place-items-center ">
            <img
              src={imagemabout1}
              width="495"
              height="575"
              alt="imagem about"
              className=" row-span-3  max-h-[510px] "
            />
            <img
              src={imagemabout2}
              width="545"
              height="270"
              alt="imagem about w-full mt-10"
            />
            <img
              src={imagemabout3}
              width="545"
              height="270"
              alt="imagem about"
            />
          </div>
          <div className=" flex justify-center items-center divide-x-2 divide-[#098A5B]">
            <article className=" mt-14">
              <strong className=" pb-5">Quem somos</strong>
              <p>
                A OTC é formada por uma equipe especializada em desenvolvimento
                web e redação. Gostamos do desafio de desenvolver sites e criar
                conteúdo para web. Temos um equipe comprometida em oferecer
                soluções rápidas e de qualidade, para que você possa ter a
                melhor experiência com a sua presença online. Conte conosco para
                o desenvolvimento de projetos de sucesso!
              </p>
            </article>
            <article className=" mt-14 px-9">
              <strong className=" pb-5">Nossa missão</strong>
              <p>
                Fornecer soluções em TI que atendam às necessidades dos nossos
                clientes e oferecer serviços personalizados de desenvolvimento
                de sites e criação de conteúdo com excelência, agilidade e
                eficiência. Buscar sempre inovar e atualizar nossas técnicas
                para oferecer as melhores soluções em tecnologia.
              </p>
            </article>
            <article className=" mt-14 pl-9">
              <strong className=" pb-5">Como trabalhamos</strong>
              <p>
                Nosso trabalho é baseado em metodologias ágeis, que visam
                otimizar os processos de desenvolvimento e entrega de resultados
                para nossos clientes. Nós entendemos que o mercado está em
                constante mudança e que é preciso adaptar-se rapidamente. Por
                isso, utilizamos metodologias que nos permitem ter uma
                comunicação mais próxima com nossos clientes, além de
                flexibilidade para se ajustar a qualquer novo desafio. Nossas
                práticas ágeis nos permitem ser mais eficientes na gestão de
                projetos, garantindo que os resultados sejam entregues dentro
                dos prazos estabelecidos e com a qualidade esperada.
              </p>
            </article>
          </div>
          <span className=" flex items-center justify-center mx-auto border border-[#098A5B] h-20 w-0 my-12"></span>
        </section>
      </div>
      <div className=" bg-[#313131]">
        <section className=" max-w-screen-lg mx-auto text-white  pt-16 pb-10 ">
          <h2 className=" text-white text-3xl flex items-center ">
            {" "}
            <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
            Pacotes Completos
          </h2>
          <p className=" text-[#098A5B] mb-10 mt-2">
            AJUDAMOS VOCÊ A COLOCAR SUA EMPRESA NO MUNDO
          </p>
          <article className=" flex justify-between">
            {testemonials.map((testemonial, index) => (
              <CardsDepoimentos
                key={index}
                src={testemonial.src}
                testemonial={testemonial.testemonial}
                nome={testemonial.nome}
                cargo={testemonial.cargo}
              />
            ))}
          </article>
        </section>
      </div>
      <div>
        <section className=" text-white mt-20">
          <p className=" text-3xl font-bold">Latest News</p>
          <p className=" text-[#098A5B]">CHECK OUT SOME OF OUR NEWS</p>
        </section>
      </div>

      <section>
        <ImageGallery images={images} />
      </section>
    </>
  );
}
