import { useRef, useState } from "react";
import { useInView, m, LazyMotion, domAnimation } from "framer-motion";
import { Link } from "@remix-run/react";

const ImageGallery = () => {
  const images = [
    "https://res.cloudinary.com/deaejawfj/image/upload/v1685715856/4_q7lbuz.webp",
    "https://res.cloudinary.com/deaejawfj/image/upload/v1685715853/3_dwmbxj.webp",
    "https://res.cloudinary.com/deaejawfj/image/upload/v1685715852/6_ghepd9.webp",
    "https://res.cloudinary.com/deaejawfj/image/upload/v1685715852/2_bsbbil.webp",
    "https://res.cloudinary.com/deaejawfj/image/upload/v1685715852/7_zgmfcd.webp",
    "https://res.cloudinary.com/deaejawfj/image/upload/v1685715852/5_f4zvnl.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleImageLoad = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const [completedAnimation, setCompleteAnimation] = useState(false);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.5,
        duration: 1,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className={`flex flex-wrap justify-center items-center  relative`}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 1 } } }}
          className={`flex flex-wrap justify-center items-center w-full h-full z-10 `}
          onAnimationComplete={() => {
            setCompleteAnimation(!completedAnimation);
          }}
        >
          {images.map((image: string | undefined, index: number) => (
            <m.img
              key={index}
              src={image}
              onLoad={handleImageLoad}
              alt="Imagem do Mosaico do site da OTC Soluções em TI"
              className={` w-1/3 object-cover ${
                completedAnimation
                  ? ""
                  : " brightness-[0.07] transition-all duration-150 ease-in"
              }  `}
              style={{ zIndex: images.length - currentIndex + index }}
              custom={index}
              variants={imageVariants}
            />
          ))}
        </m.div>
      </LazyMotion>
      <div
        className={`absolute inset-x-0 top-[10%] bottom-0 max-w-screen-lg  left-0  flex flex-col justify-center mx-auto z-10 ${
          completedAnimation
            ? "hidden"
            : "transition-[block]  duration-1000 ease-in-out"
        }`}
      >
        <h2 className=" text-white text-3xl flex items-center ">
          {" "}
          <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
          Pacotes Completos{" "}
        </h2>
        <p className=" text-[#098A5B] mb-10 mt-2">
          AJUDAMOS VOCÊ A COLOCAR SUA EMPRESA NO MUNDO
        </p>
        <strong className=" italic  font-bold text-4xl mb-10">
          Do zero ao sucesso online.
        </strong>

        <ul className=" list-inside list-disc text-2xl font-semibold flex flex-col gap-y-4">
          <li>
            Criamos o design da sua landing page, ecommerce ou site de sua
            empresa ou escritório;
          </li>
          <li>Desenvolvemos seu Website otimizado para desktop e mobile;</li>
          <li>Criamos os textos para o seu site;</li>
          <li>Fazemos os textos do blog do seu site;</li>
          <li>
            Utilizamos ferramentas SEO para você saber exatamente o que seu
            cliente procura;
          </li>
          <li>Criamos conteúdos para as suas redes sociais;</li>
          <li>
            Automatizamos o WhatsApp do seu negócio para vocês estar sempre
            online.
          </li>
        </ul>

        <Link
          to={"/orçamento"}
          className=" border border-[#0CB074] text-white rounded p-5  my-9 w-full max-w-xs  mx-auto text-2xl font-bold text-center hover:text-white transition-all duration-150 ease-in"
        >
          Faça um orçamento gratuito agora!
        </Link>
      </div>
    </div>
  );
};

export default ImageGallery;
