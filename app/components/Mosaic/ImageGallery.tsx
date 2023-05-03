import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const ImageGallery = ({ images }: { images: any }) => {
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
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 1 } } }}
        className={`flex flex-wrap justify-center items-center w-full h-full z-10 `}
        onAnimationComplete={() => setCompleteAnimation(!completedAnimation)}
      >
        {images.map((image: string | undefined, index: number) => (
          <motion.img
            key={index}
            src={image}
            onLoad={handleImageLoad}
            alt=""
            className={` w-1/4 h-1/4 object-cover ${
              completedAnimation ? "" : " brightness-[0.25]"
            }  `}
            style={{ zIndex: images.length - currentIndex + index }}
            custom={index}
            variants={imageVariants}
          />
        ))}
      </motion.div>
      <div
        className={`absolute bottom-0 left-0 right-0 top-0  flex flex-col justify-center items-center z-10 ${
          completedAnimation ? "hidden" : "block"
        }`}
      >
        <h2 className=" text-white text-3xl flex items-center ">
          {" "}
          <span className=" border border-[#098A5B] w-16 h-0 mr-4"></span>
          Pacotes Completos
        </h2>
        <p className=" text-[#098A5B] mb-10 mt-2">
          AJUDAMOS VOCÊ A COLOCAR SUA EMPRESA NO MUNDO
        </p>
        <strong className="  font-bold">Do zero ao sucesso online.</strong>
        <div>
          <ul className=" list-inside list-disc">
            <li>Criamos o design do seu site ecommerce</li>
            <li>Desenvolvemos seu Website otimizado para desktp e mobile</li>
            <li> Criamos os textos para o seu site</li>
            <li>Fazemos os textos do blog do seu site</li>
            <li>
              Utilizamos ferramentas SEO para você saber exatamente o que seu
              cliente procura
            </li>
            <li> Criamos conteúdos para as suas redes sociais</li>
            <li> Automatizamos o WhatsApp do seu negócio</li>
          </ul>
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default ImageGallery;
