import type { V2_MetaFunction } from "@remix-run/node";

// Components
import CardsServiceSection from "~/components/Cards/CardsServiceSection";
import TextAnimationEntry from "~/components/TextAnimationEntry/TextAnimationEntry";
import ImageGallery from "~/components/Mosaic/ImageGallery";

// Images
import imagemabout1 from "public/about1.png";
import imagemabout2 from "public/about2.png";
import imagemabout3 from "public/about3.png";
import image2 from "public/2.png";
import image3 from "public/3.png";
import image4 from "public/4.png";
import image5 from "public/5.png";
import image6 from "public/6.png";

// Data
import { services } from "~/data/services";

// Marquee
import Marquee from "react-fast-marquee";

import DevHelperBanner from "~/components/Banner/DevHelper";
import AreadoCliente from "~/components/Section/AreadoCliente";
import CardsNews from "~/components/Cards/CardsNews";
import { textosblog } from "~/data/textosblog";
import Image from "remix-image";

// Meta
export const meta: V2_MetaFunction = () => {
  return [{ title: "OTC Soluções em TI" }];
};

export default function Index() {
  return (
    <>
      <div className=" bg-[#101017]">
        <section
          id="services"
          className="  w-full  py-32  px-4  max-w-screen-lg mx-auto"
        >
          <TextAnimationEntry
            title={"Serviços"}
            description={"Tudo que você precisa para alavancar o seu negócio"}
          />

          <p className=" text-[#098A5B] mb-10 mt-2  uppercase  font-semibold"></p>
          <div className=" grid mx-auto justify-center md:justify-normal md:grid-cols-3 md:grid-rows-2 gap-8 ">
            {services.map((service, index) => (
              <CardsServiceSection
                key={index}
                src={service.src}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
          <span className=" flex items-center justify-center mx-auto border border-[#098A5B] h-20 w-0 mt-16"></span>
        </section>
      </div>
      <section className="bg-[#313131] max-w-full py-16">
        <DevHelperBanner />
      </section>

      <AreadoCliente />

      <div className=" bg-[#101017]">
        <section className=" max-w-screen-lg mx-auto text-white px-4 py-12 ">
          <TextAnimationEntry
            title={"Sobre Nós"}
            description={"QUALIDADE, AGILIDADE E PRATICIDADE"}
          />

          <p className=" text-[#098A5B] mb-10 mt-2"></p>
          <div className=" grid gap-4 md:justify-between md:grid-rows-2 md:grid-cols-2 h-full items-center place-items-center ">
            <Image
              loaderUrl="/api/image"
              src={imagemabout1}
              responsive={[
                {
                  size: {
                    width: 100,
                    height: 100,
                  },
                  maxWidth: 200,
                },
              ]}
              dprVariants={[1, 3]}
            />
            <Image
              loaderUrl="/api/image"
              src={imagemabout2}
              responsive={[
                {
                  size: {
                    width: 100,
                    height: 100,
                  },
                  maxWidth: 200,
                },
              ]}
              dprVariants={[1, 3]}
            />
            <Image
              loaderUrl="/api/image"
              src={imagemabout3}
              responsive={[
                {
                  size: {
                    width: 100,
                    height: 100,
                  },
                  maxWidth: 200,
                },
              ]}
              dprVariants={[1, 3]}
            />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 justify-center items-center divide-y-2 md:divide-x-2 divide-[#098A5B]">
            <article className=" mt-14 px-9">
              <p className=" pb-5 text-2xl">Quem somos</p>
              <p>
                A OTC, fundada por uma redatora e um desenvolvedor web, é
                especializada em desenvolvimento web e redação de conteúdo.
                Oferecemos soluções rápidas e de qualidade para impulsionar a
                sua presença online. Entre em contato conosco para saber mais
                sobre nossos serviços de desenvolvimento de websites confiáveis.
                Desafie-nos a criar o melhor conteúdo para sua presença online.
              </p>
            </article>
            <article className=" mt-14 px-9">
              <p className=" pb-5 text-2xl">Nossa missão</p>
              <p>
                Fornecer soluções em TI que atendam às necessidades dos nossos
                clientes e oferecer serviços personalizados de desenvolvimento
                de sites e criação de conteúdo com excelência, agilidade e
                eficiência. Buscar sempre inovar e atualizar nossas técnicas
                para oferecer as melhores soluções em tecnologia.
              </p>
            </article>
            <article className=" mt-14 pl-9">
              <p className=" pb-5 text-2xl">Como trabalhamos</p>
              <p>
                Adotamos metodologias ágeis como o SCRUM para proporcionar
                otimização no desenvolvimento e entrega de resultados aos nossos
                clientes. Com comunicação próxima e flexibilidade, somos capazes
                de nos adaptar rapidamente às mudanças do mercado e enfrentar
                novos desafios. Essas práticas ágeis são fundamentais para
                garantir a eficiência na gestão de projetos, permitindo que os
                resultados sejam entregues com qualidade e dentro dos prazos
                estabelecidos.
              </p>
            </article>
          </div>
          <span className=" flex items-center justify-center mx-auto border border-[#098A5B] h-20 w-0  py-12"></span>
        </section>
      </div>
      <div className=" bg-[#313131]">
        <section className="  mx-auto text-white">
          <ImageGallery />
        </section>
      </div>
      <Marquee pauseOnHover={true} speed={40} className=" bg-[#098A5C]">
        <p className=" py-4 text-[#D9D9D9] text-4xl">
          Crie, cresça e venda mais: serviços de e-commerce, automação do
          WhatsApp e relatórios mensais de tráfego para sua empresa.
        </p>
      </Marquee>
      <div className=" bg-[#101017]">
        <section className=" py-16 px-4">
          <article className=" w-full flex flex-col justify-center max-w-screen-lg  mx-auto">
            <p className=" w-full flex justify-center max-w-screen-xl mx-auto leading-relaxed text-lg text-white">
              Na era digital, ter uma forte presença online é fundamental para o
              sucesso de qualquer empresa. É por isso que oferecemos uma gama
              completa de serviços para ajudá-lo a criar, otimizar e automatizar
              sua presença digital. Com nossos serviços de desenvolvimento de
              site, você pode ter certeza de que sua presença na web está em
              boas mãos. Contamos com uma equipe de redação especializada para
              criar conteúdo otimizado para SEO que ajudará você a aparecer nos
              resultados de pesquisa. Além disso, nossos serviços de gestão de
              redes sociais e automação de WhatsApp ajudarão você a se comunicar
              com seus clientes de maneira eficiente. Ainda, conte com nossos
              relatórios mensais de tráfego fornecem insights valiosos sobre
              como você pode melhorar ainda mais sua presença digital. Com uma
              equipe especializada e soluções personalizadas, você pode ter
              certeza de que sua empresa está pronta para crescer e se destacar
              na web.
            </p>
          </article>
        </section>
      </div>

      <div className=" bg-[#313131] w-full">
        <section className="  w-full  py-32  px-4  max-w-screen-lg mx-auto text-white">
          <TextAnimationEntry
            title={"Blog"}
            description={
              "Confira nossos últimos artigos sobre tecnologia, redação e redes sociais"
            }
          />

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {textosblog.map((conteudo, index) => (
              <CardsNews
                key={index}
                title={conteudo.title}
                src={conteudo.src}
                description={conteudo.description}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
