import React from 'react'
import SolarSys from '../assets/SolarSys.svg'

const SuccessPage = () => {
  return (
    <section className="text-gray-600 bg-gray-500 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Solar Animation" src={SolarSys} />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-400">Thanks for your message!</h1>
          <p className="mb-8 text-3xl text-rose-200 leading-relaxed">I will look into this as soon as I can</p>
          <div className="flex justify-center">
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-fuchsia-400 rounded text-lg"
            href="/">Go back Home</a>
            <a className="ml-4 inline-flex text-gray-700 bg-yellow-100 border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg"
            href="https://chuongtang.pages.dev" target="_blank">My web2 page</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessPage