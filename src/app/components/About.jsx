import React from 'react'
import uno from '../../../public/img/1.jpg'
import dos from '../../../public/img/2.jpg'
import tres from '../../../public/img/3.jpg'
import cuatro from '../../../public/img/4.jpg'

import Image from 'next/image'
const About = () => {
  return (
    <div>

      <h2 id='nosotros' className='h2'>Nosotros</h2>

<div className='w-full '>

<section className='hero d-flex justify-center items-center mt-5'>


</section>

<section className='section mx-auto  '>
    <Image className='image' src={uno} alt='personas_con_certificado'></Image>
    <Image className='image' src={dos} alt='personas_con_certificado_sion'></Image>
    <Image className='image' src={tres} alt='personas_con_certificado_autoescuelasion'></Image>
    <Image className='image' src={cuatro} alt='autoescuelasion_alumnos'></Image>
    


</section>


</div>




      
    </div>
  )
}

export default About
