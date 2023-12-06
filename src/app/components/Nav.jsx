


import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/logo.jpg";

const Nav = () => {


  return (

    <div className="menu ">
      <nav className="flex-col sm:flex sm:flex-row  max-w-[1200px] mx-auto items-center justify-between p-6">
        <div className="flex items-center">
          <Image
            className="logo rounded-full mx-auto"
            src={logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>



        <div className=" space-x-4 block md:fle text-center mt-2 ">
          <Link className="text-white text-sm md:text-lg" href="#inicio">
            Inicio
          </Link>
          <Link className="text-white text-sm md:text-lg" href="#nosotros">
            Nosotros
          </Link>

          <Link className="text-white text-sm md:text-lg" href="#clientes">
            Clientes
          </Link>
          <Link className="text-white text-sm md:text-lg" href="#servicios">
            Servicios
          </Link>
          <Link className="text-white text-sm md:text-lg" href="#contacto">
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
