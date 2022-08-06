import React from 'react'

const MainPage = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
          >
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src="https://www.hyperui.dev/photos/man-1.jpeg"
              alt="Man using a computer"
            />
          </div>

          <div className="lg:py-24">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-red-600">My GIF Portal</h1>

            <p className="mt-4 text-gray-200">
              View your GIF collecion in the metaverse ✨.
            </p>

            <button
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-gradient-to-r from-green-300 via-blue-500 to-blue-600 active:text-indigo-500 focus:outline-none focus:ring"
              
            >
              <span className="text-sm font-medium"> Connect Wallet </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default MainPage