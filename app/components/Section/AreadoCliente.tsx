// Animation
import TextAnimationEntry from "../TextAnimationEntry/TextAnimationEntry";
//  React Hooks
import { useRef } from "react";

// Framer motion
import { useInView } from "framer-motion";

export default function AreadoCliente() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <div className="w-full h-screen rounded-lg shadow-2xl overflow-hidden relative">
        <img
          className="absolute inset-0 h-screen w-screen object-cover"
          src="https://res.cloudinary.com/deaejawfj/image/upload/e_recolor,o_100/v1683496739/bgareadocliente_zl0l5c.webp"
          alt=""
        />
        <div
          className={`absolute inset-0  ${
            isInView
              ? "bg-opacity-80 bg-[#101017] transition duration-200  ease-in"
              : ""
          } `}
        ></div>
        <div className="flex h-full items-center justify-center relative">
          <div
            className="  px-4  w-full   max-w-screen-lg mx-auto mb-20 relative"
            ref={ref}
          >
            <TextAnimationEntry
              title={"Área do Cliente"}
              description={
                " ACOMPANHE SEU PROJETO DE UMA FORMA COMO VOCÊ NUNCA VIU"
              }
            />
            <strong
              className={`${
                isInView
                  ? " opacity-100 transition-opacity duration-1000 ease-in delay-300"
                  : "opacity-0"
              } text-white text-3xl text-center`}
            >
              Não perca mais tempo trocando infinitas mensagens com quem você
              contratou.
            </strong>
            <p className=" text-white text-lg my-6">
              Mantenha-se atualizado constantemente sobre o andamento do seu
              projeto e tenha a tranquilidade de que suas necessidades serão
              atendidas com eficiência e agilidade.
            </p>

            <p className=" text-white text-lg my-6">
              Oferecemos uma <b>plataforma exclusiva</b> para acompanhamento em
              tempo real do desenvolvimento do seu projeto.
            </p>
            <p className=" text-white text-lg my-6">
              Na área do cliente, você terá acesso às atualizações do seu
              protótipo, site e todas as funcionalidades contratadas.
              Atualizamos diariamente o andamento do seu projeto. Além disso, é
              possível fazer o download dos conteúdos produzidos para suas redes
              sociais, revisar e sugerir alterações nos textos e protótipo.
            </p>
            <p className=" text-white text-lg">
              Tudo em um único lugar para sua maior comodidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
