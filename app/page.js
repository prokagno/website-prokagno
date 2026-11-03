import Image from "next/image";
import CarouselHome from "./components/home/CarouselHome";
import About from "./components/home/About";
import Moto from "./components/home/Moto";
import Strategy from "./components/home/Strategy";
import Training from "./components/home/Training";
import Service from "./components/home/Service";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <>
      <CarouselHome />

      {/* About */}
      <About />

      {/* Our Moto */}
      <Moto />

      {/* Strategy */}
      <Strategy />

      {/* Training */}
      <Training />

      {/* Service */}
      <Service />

      {/* Contact */}
      <Contact />
    </>
  );
}
