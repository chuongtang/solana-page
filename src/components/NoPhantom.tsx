import React, { useState } from 'react';
import Solana from '../assets/Solana.svg'
import Navbar from './Navbar'

const NoPhantom = () => {
  const [showForm, SetShowForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [alert, setAlert] = useState<string>('');

  const sendComment = async () => {
    setLoading(true);
    await fetch("https://formsubmit.co/ajax/chuongtang@icloud.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: "FSolanaDapp",
        email: { email },
        message: { comment }
      })
    })
    return false;

    // try {
    //   const dataRes = await fetch("https://formsubmit.co/ajax/chuongtang@icloud.com", {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       name: "FSolanaDapp",
    //       email: { email },
    //       message: { comment }
    //     })
    //   })
    //   console.log("Sent Successfully", '\x1b[35m%s\x1b[0m', dataRes)
    //   setLoading(false)
    //   document.location.href="/";
    //   setAlert('Successfully sent. Thank-you!')
    // } catch (error) {
    //   console.log('\x1b[31m%s\x1b[0m', error)
    // }
  }

  return (
    <section className="overflow-x-hidden text-white bg-gray-900">
      <Navbar />
      {alert !== '' && <div className="p-2 font-medium m-4 text-sm text-center text-yellow-100 border border-green-300 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
        {alert}
      </div>}

      <div className="vortex">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
      <div className="max-w-screen-xl px-4 py-32 mx-auto h-screen lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mt-4 text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Hello, <br /> I'm Chuong, a blockchain follower.
            <br />
            <span className="sm:block m-2">
              This is my dApp on <img className="animate-pulse w-18 mx-auto m-8" src={Solana} alt="Solana Logo" /> devnet.
            </span>

          </h1>

          <p className="flex max-w-xl mx-auto justify-center mt-4 sm:leading-relaxed sm:text-xl">
            It requires  <img src="https://phantom.app/img/phantom-logo.svg" alt="Phantom" className="mx-2 w-24" />wallet to connect
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <a className="borderAnimation  block w-full px-12 py-3 text-sm font-medium rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring " href="https://phantom.app/download"
              target="_blank">
              Install Phantom
            </a>
            <span className="text-xs text-transparent">_</span>
            <a className="block w-full px-12 py-3 text-sm font-medium text-white border-4 border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="https://docs.solana.com/clusters#devnet" target="_blank">
              Learn More
            </a>
          </div>
        </div>
        <button onClick={() => SetShowForm(true)} title="Have questions?"
          className="fixed z-90 bottom-5 right-6 bg-gradient-to-r from-pink-500 to-orange-200 w-8 h-8 rounded-full drop-shadow-xl shadow-white flex justify-center items-center text-white text-lg hover:bg-teal-700 hover:drop-shadow-2xl hover:animate-bounce">?</button>
        {showForm &&
          <div className="fixed inset-x-0 bottom-0 p-4">

            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <form className="space-y-4 relative max-w-xl p-6 bg-gray-100 rounded-lg shadow-sm"
                // onSubmit={sendComment}
                action="https://formspree.io/f/maykygal"
                method="POST"
                >
                <button
                  type="button"
                  className="absolute p-1 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-full -top-1 -right-1"
                  onClick={() => SetShowForm(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <h1 className="text-lg font-semibold text-center text-gray-400 sm:text-3xl">Question / Comment?</h1>
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full p-3 text-gray-500 text-sm border-gray-200 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    required={true}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full p-3 text-gray-500  text-sm border-gray-200 rounded-lg"
                    placeholder="Message"
                    name="message"
                    rows={8}
                    id="message"
                    onChange={e => setComment(e.target.value)}
                    required={true}>

                  </textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full p-3 text-gray-500 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 rounded-lg sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? <span className="animate-ping">Submitting...</span> : <span className="font-medium"> Send</span>}
                    {loading ? <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z" /><path fill="currentColor" d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z" /></svg>
                      :
                      <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.33 3.67a1.45 1.45 0 0 0-1.47-.35L4.23 8.2A1.44 1.44 0 0 0 4 10.85l6.07 3l3 6.09a1.44 1.44 0 0 0 1.29.79h.1a1.43 1.43 0 0 0 1.26-1l4.95-14.59a1.41 1.41 0 0 0-.34-1.47ZM4.85 9.58l12.77-4.26l-7.09 7.09Zm9.58 9.57l-2.84-5.68l7.09-7.09Z" /></svg>}
                  </button>
                </div>
              </form>

            </div>
          </div>
        }

        {/* </div>
          </div>
        </footer> */}
      </div>
    </section >

  )
}

export default NoPhantom;