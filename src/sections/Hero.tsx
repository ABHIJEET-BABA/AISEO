"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/Button";
import {useRef} from "react";

import starsBg from "@/assets/stars.png";

export const Hero = () => {

  const SectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: SectionRef ,
    offset:['start end', 'end start']
  });

   const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300])

  return (
    <motion.section
       ref={SectionRef}
      className="w-full h-[640px] overflow-hidden relative"
      style={{
        backgroundImage: `url(${starsBg.src})`,
       
        backgroundPositionY,
      }}

      animate={{
        backgroundPositionX:starsBg.width,

      }}

      transition={{
        repeat:Infinity,
        ease:"linear",
        duration:120,

      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(30%_60%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>

      <div
        className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] 
                     shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
      ></div>

      <motion.div
        className="absolute h-[334px] w-[334px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"

        style={{
          translateY:"-50%",
          translateX:"-50%",
         
        }}

        animate={{
          rotate:"1turn",
        }}

        transition={{
          repeat:Infinity,
          duration:30,
          ease:"linear"
        }}
        
      >
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 inline-flex item-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      <motion.div 
        style={{
          translateY:"-50%",
          translateX:"-50%",
         
        }}

        animate={{
          rotate:"-1turn",
        }}

        transition={{
          repeat:Infinity,
          duration:30,
          ease:"linear"
        }}
        
      className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div>
      <motion.div 
        style={{
          translateY:"-50%",
          translateX:"-50%",
         
        }}

        animate={{
          rotate:"1turn",
        }}

        transition={{
          repeat:Infinity,
          duration:30,
          ease:"linear"
        }}
      className="absolute h-[544px] w-[544px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div>

      <div className="container relative flex flex-col items-center justify-center h-full z-20">
        <h1
          className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white text-transparent bg-clip-text text-center 
                       bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]"
        >
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center">
          Boost Your Visibility with CuriousBrandz
        </p>
        <div className="justify-center flex mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
