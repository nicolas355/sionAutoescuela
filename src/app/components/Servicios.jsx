import React from "react";
import Image from "next/image";
import vista from "../../../public/img/mqdefault.jpg";
import vista2 from "../../../public/img/mqdefault2.jpg";
import vista3 from "../../../public/img/mqdefault3.jpg";
import play from "../../../public/img/play.png";
import Link from "next/link";
const Servicios = () => {
  return (
    <div>
      <h2
        id="servicios"
        className="h2  font-bold text-black sm:text-4xl md:mb-12 md:text-5xl"
      >
        SERVICIOS
      </h2>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Tu viaje, nuestra prioridad: Puerta a puerta{" "}
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              En Autoescuela Sion, comprendemos que superar el miedo a conducir
              comienza desde la comodidad y seguridad de tu hogar. Nuestro
              enfoque puerta a puerta significa que te brindamos la
              capacitación directamente en tu entorno, adaptándonos a tus
              necesidades para que ganes confianza en cada trayecto
            </p>
          </div>
          <div className="relative">
            <Link
              href={"https://www.youtube.com/watch?v=eO1ArJtongU"}
              target="blank"
            >
              <Image
                className="w-full h-full object-cover object-center"
                src={vista}
                alt="imagen_vista"
              ></Image>

              <div className="">
                <Image
                  className="play-button w-16 h-16"
                  src={play}
                  alt="play"
                ></Image>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Experiencia práctica garantizada
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Nuestros instructores expertos te brindarán una experiencia de
              aprendizaje práctico inigualable. Aprende técnicas avanzadas y
              perfecciona tus habilidades en nuestras clases especializadas
            </p>
          </div>
          <div className="relative">
            <Link
              href={"https://www.youtube.com/watch?v=hRgRsbuFXv4"}
              target="blank"
            >
              <Image
                className="w-full h-full object-cover object-center"
                src={vista2}
                alt="imagen_vista"
              ></Image>

              <Image
                className="play-button w-16 h-16"
                src={play}
                alt="play"
              ></Image>
            </Link>
          </div>
        </div>

        <div className="grid mt-5 items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Aprende a tu propio ritmo
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              En Autoescuela Sion, te ofrecemos una amplia gama de cursos
              adaptados a tu nivel y ritmo de aprendizaje. Desde clases básicas
              hasta perfeccionamiento, tenemos el curso ideal para ti.
            </p>
          </div>
          <div className="relative">
            <Link
              href={"https://www.youtube.com/watch?v=y3LJ_HqH-ZA"}
              target="blank"
            >
              <Image
                className="w-full h-full object-cover object-center"
                src={vista3}
                alt="imagen_vista"
              ></Image>

              <Image
                className="play-button w-16 h-16"
                src={play}
                alt="play"
              ></Image>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
