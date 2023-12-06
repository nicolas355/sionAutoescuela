import {  Montserrat } from 'next/font/google'
import './globals.css'

const monserat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoescuelaSion',
  description: 'Autoescuela Sion ofrece cursos de manejo personalizados puerta a puerta para superar el miedo al volante y aprender a conducir con confianza. Nuestro servicio especializado te brinda la oportunidad de dominar las habilidades de manejo de manera cómoda y efectiva, permitiéndote adquirir la destreza necesaria para enfrentar cualquier desafío',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={monserat.className}>{children}</body>


    </html>
  )
}
