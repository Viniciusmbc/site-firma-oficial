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
    <div className=" relative w-[146px] h-[137px] bg-[url(public/logo/LogoOtc.png)] roundend-[50%] bg-repeat bg-[length:200%_100%] animate-rotate">
      <div className=" absolute w-[61px]  h-[55px] bg-[url(public/logo/lua1.png)] -left-[11em] top-1/2 animate-rotate animate-orbit z-10 roundend-[50%] bg-repeat bg-[length:200%_100%]"></div>
    </div>
  );
};

export default LogoAnimation;
