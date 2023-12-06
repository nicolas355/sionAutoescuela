import React from 'react'
import Link from 'next/link'
const CallToAction = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
      
  
        <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">Agenda tu primera clase
</h2>
  
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link href="https://api.whatsapp.com/send?phone=5491132558919" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Comenzar</Link>
  
          <Link href="https://www.facebook.com/AutoescuelaSion" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Facebook</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CallToAction
