"use client"



import { Button } from "@/components/Button";
import starsBg from '@/assets/stars.png';
import gridLines from '@/assets/grid-lines.png'
import { motion, useScroll, useTransform } from "framer-motion";



import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const bacgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])
  return (
    <section className="py-20 md:py-24" ref={sectionRef} >
      <div className="container">
        <motion.div
          className="relative border border-white/15 py-24 rounded-xl overflow-hidden"
          animate={{
            backgroundPositionX: starsBg.width,
          }}

          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120,
          }}




          style={{
            backgroundImage: `url(${starsBg.src})`,
            bacgroundPositionY
          }}

        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto text-center tracking-tighter font-medium">
              AI-driven SEO for Everyone
            </h2>
            <p className="text-center text-lg text-white/70 px-4 mt-5 tracking-tighter md:text-xl max-w-xs mx-auto">
              Achieve clear, impactful results without the complexity
            </p>
            <div className="text-center mt-6">
              <Button>Join Waitlist</Button>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
