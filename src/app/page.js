import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Wsp from "./components/Wsp";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";

import Clientes from "./components/Clientes";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <Wsp />
      <Nav />

      <Hero />

      <About />

      <Clientes />

      <CallToAction />

      <Servicios />

      <ContactSection />

      <Footer />
    </div>
  );
}
