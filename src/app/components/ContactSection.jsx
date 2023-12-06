import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
 return (
  <section className='section mx-auto flex flex-col items-center'>
    <h2 id='contacto' className='h2 '>Contáctanos</h2>
    <p className='mb-4'>Síguenos en nuestras redes sociales:</p>
    <div className='flex space-x-4'>
   
        <Link target='_blank' href={'https://www.facebook.com/AutoescuelaSion'} rel='noopener noreferrer' className='text-blue-500 hover:text-blue-700'>Facebook</Link>
    

        <Link target='_blank'  href={'https://www.instagram.com/autoescuela_sion'} rel='noopener noreferrer' className='text-pink-500 hover:text-pink-700'>Instagram</Link>
    
  
        <Link target='_blank'  href={'https://api.whatsapp.com/send?phone=5491132558919'} rel='noopener noreferrer' className='text-green-500 hover:text-green-700'>WhatsApp</Link>
  
    </div>
  </section>
 );
};

export default ContactSection;