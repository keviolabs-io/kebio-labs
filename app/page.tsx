import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Projects />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
