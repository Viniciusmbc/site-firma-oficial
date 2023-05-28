import { motion } from "framer-motion";
import devhelperimg from "public/DevHelper/devhelperimg.png";
import HighlightWrapper from "../TypeWritterEffect/atoms/HighlightWrapper";
import { Image } from "remix-image";

export default function DevHelperBanner() {
  return (
    <div className="  flex flex-wrap p-6  items-center justify-center border  border-[#098A5B] w-full max-w-screen-lg mx-auto">
      <div>
        <strong className=" border border-[#098A5B] text-[#098A5B] bg-[#000] h-fit p-3 max-w-fit rounded-xl text-3xl mt-6">
          Hey, Dev!
        </strong>

        <HighlightWrapper classname=" w-fit">
          <p className=" text-6xl text-white my-16">Prazos apertados?</p>
        </HighlightWrapper>

        <p className=" text-2xl text-white my-16">
          Precisa de ajuda para finalizar seus freelas ou projetos pessoais?
        </p>

        <h2 className="text-3xl text-[#098A5B] my-16  max-w-2xl">
          Deixe a{" "}
          <motion.span
            className="text-white animate-pulse"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            DevHelper
          </motion.span>{" "}
          te ajudar a cumprir seus projetos no prazo!
        </h2>
        <button className=" text-white/95 transition ease-in-out delay-150 bg-[#098A5B] p-4  hover:-translate-y-1 hover:scale-110 hover:bg-[#0FD68D] duration-300 ">
          Clique aqui e fale conosco!
        </button>
      </div>
      <Image
        loaderUrl="/api/image"
        alt="Imagem do DevHelper"
        src={devhelperimg}
        responsive={[
          {
            size: {
              width: 100,
              height: 100,
            },
            maxWidth: 330,
          },
        ]}
        dprVariants={[1, 3]}
      />
      <img
        src={devhelperimg}
        width={330}
        height={400}
        alt="Imagem do DevHelper"
        title="Imagem do DevHelper"
        className=" w-full max-w-[330px] h-full max-h-[400px] mt-2"
      />
    </div>
  );
}
