import React from 'react'

const NoPhantom = () => {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Hi, thanks for stopping by.

            <span className="sm:block">
              This is my dApp on Solana blockchain.
            </span>
          </h1>

          <p className="flex max-w-xl mx-auto justify-center mt-4 sm:leading-relaxed sm:text-xl">
            It requires  <img src="https://phantom.app/img/phantom-logo.svg" alt="Phantom" className="mx-2 w-24"/>wallet to connect
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="https://phantom.app/download"
            target="_blank">
              Install Phantom
            </a>

            <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="/about">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default NoPhantom;