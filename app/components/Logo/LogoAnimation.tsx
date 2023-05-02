import { motion } from "framer-motion";
import planeta from "public/logo/planetImage.png";
import lua1 from "public/logo/lua1.png";
import lua2 from "public/logo/lua2.png";
import lua3 from "public/logo/lua3.png";
import lua4 from "public/logo/lua3.png";
import lua5 from "public/logo/lua3.png";
import brainImage from "public/logo/brainImage.png";
import logoOTC from "public/logo/LogoOtc.png";

const LogoAnimation = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" shadow relative animate-rotate w-[20em] h-[20em] bg-[url(public/logo/LogoOtc.png)] rounded bg-repeat bg-[200%,100%] ">
        <div className=" bg-[url(public/lua2)] shadow w-[6em] h-[6em] left-[-11em] top-1/2 translate-y-[-50%] animate-rotate animate-orbit bg-repeat rounded bg-[200%,100%] absolute"></div>
      </div>
    </div>
  );
};

export default LogoAnimation;
