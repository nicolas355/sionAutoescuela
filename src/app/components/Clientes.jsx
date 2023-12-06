import testimonial from "../../../public/img/testimonio.jpg"
import testimonial2 from "../../../public/img/testimonio-2.jpg"

import testimonial4 from "../../../public/img/testimonio-4.jpg"
import testimonial5 from "../../../public/img/testimonio-5.jpg"
import testimonial6 from "../../../public/img/testimonio-6.jpeg"


import Image from "next/image"
const Clientes = () => {
  return (
    <div id="clientes">
       <h2 className="h2 p-5 mb-8  font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">Clientes
</h2>

<section  className="testimonial grid md:grid-cols-5 grid-cols-2 gap-7 h-full mx-auto ">
        <Image src={testimonial} alt="testimoniales de escuela sion"  className="img-testimonio "></Image>
        <Image src={testimonial2} alt="testimoniales de autoescuelasion"  className="img-testimonio "></Image>
      
        <Image src={testimonial4} alt="testimoniales de escuela_sion" className="img-testimonio "></Image>
        <Image src={testimonial5} alt="autoescuelaSion testimoniales"className="img-testimonio "></Image>
        <Image src={testimonial6} alt="testimoniales_de_whatsap_sion"className="img-testimonio "></Image>


</section>

      
    </div>
  )
}

export default Clientes
