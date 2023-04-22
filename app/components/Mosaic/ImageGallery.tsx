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
      className={`flex flex-wrap justify-center items-center h-screen`}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 1 } } }}
        className={`flex flex-wrap justify-center items-center w-full relative `}
        onAnimationComplete={() => setCompleteAnimation(!completedAnimation)}
      >
        {images.map((image: string | undefined, index: number) => (
          <motion.img
            key={index}
            src={image}
            onLoad={handleImageLoad}
            alt=""
            className={` w-1/4 h-1/4 object-cover ${
              completedAnimation ? "" : " grayscale"
            }  `}
            style={{ zIndex: images.length - currentIndex + index }}
            custom={index}
            variants={imageVariants}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageGallery;
