import React, { useEffect, useState } from 'react'

const MainPage = () => {

  const [walletAddress, setWalletAddress] = useState(null);
  const [message, setMessage] = useState<string>('');

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setMessage(`Connected with Public Key: ${response.publicKey.toString()}`)
      setWalletAddress(response.publicKey.toString());
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);



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
            {!walletAddress ?
              <button
                className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-gradient-to-r from-green-300 via-blue-500 to-blue-600 active:text-indigo-500 focus:outline-none focus:ring"
                onClick={connectWallet}
              >
                <span className="text-sm font-medium"> Connect Wallet </span>
              </button> 
              :
              <p className="text-white m-8">{message}</p>}
          </div>
        </div>
      </div>
    </section>

  )
}

export default MainPage