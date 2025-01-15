import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Testimonials } from "@/sections/Testimonials";
import { Features } from "@/sections/Features";

import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer/>
     
     </>
   
  )
}
