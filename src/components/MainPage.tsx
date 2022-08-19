import React, { useEffect, useState } from 'react';
import GridBody from './GridBody';
import Navbar from './Navbar';
import SolarSys from '../assets/Solarsys.svg';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, AnchorProvider, web3 } from '@project-serum/anchor';
import idl from '../idl.json';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

import kp from '../keypair.json'

// SystemProgram is a reference to the Solana runtime!
const { SystemProgram, Keypair } = web3;

// Create a keypair for the account that will hold the GIF data.
const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const baseAccount = web3.Keypair.fromSecretKey(secret);

// Get our program's id from the IDL file.
const programID = new PublicKey(idl.metadata.address);

// Set our network to devnet.
const network = clusterApiUrl('devnet');

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed"
}

type GifItem = {
  gifLink: string;
  userAddress: number;
};

type GifListProps = {
  gifListArray: GifItem[]
};

export interface IInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const MainPage = () => {

  // const TEST_GIFS = [
  //   'https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp',
  //   'https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g',
  //   'https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g',
  //   'https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp'
  // ]

  const [walletAddress, setWalletAddress] = useState(null);
  const [message, setMessage] = useState<string>('');
  const [inputGreeting, setInputGreeting] = useState<string>('');
  const [showMsgBox, setShowMsgBox] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [gifList, setGifList] = useState<{}[]>([]);

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


  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const getProvider = () => {
    // @ts-ignore
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(
      // @ts-ignore
      connection, window.solana, opts.preflightCommitment,
    );
    return provider;
  }

  const createGifAccount = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl as any, programID, provider);
      console.log("ping")
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount]
      });
      console.log("Created a new BaseAccount w/ address:", baseAccount.publicKey.toString())
      await getGifList();

    } catch (error) {
      console.log("Error creating BaseAccount account:", error)
    }
  }

  const sendGif = async () => {
    if (inputValue.length === 0) {
      console.log("No gif link given!")
      return
    }
    setInputValue('');
    console.log('Gif link:', inputValue);
    try {
      const provider = getProvider();
      const program = new Program(idl as any, programID, provider);

      await program.rpc.addGif(inputValue, {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
        },
      });
      console.log("GIF successfully sent to program", inputValue)

      await getGifList();
    } catch (error) {
      console.log("Error sending GIF:", error)
    }
  };


  // useEffect(() => {
  //   if (walletAddress) {
  //     console.log('Fetching GIF list...');

  //     // createGifAccount();
  //     // Set state
  //     setGifList(TEST_GIFS);
  //   }
  // }, [walletAddress]);

  const getGifList = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl as any, programID, provider);
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

      console.log('\x1b[33m%s\x1b[0m', "Got the account GIF LIST", account.gifList)
      setGifList(account.gifList)

    } catch (error) {
      console.log("Error in getGifList: ", error)
      setGifList(null as any);
    }
  }

  useEffect(() => {
    if (walletAddress) {
      getGifList()
      console.log('Fetching GIF list...');
    }
    console.log("*******", gifList);
  }, [walletAddress]);

  return (
    <section className="h-screen bg-gray-500">
      <Navbar />
      {!walletAddress ?
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
            >
              <img
                className="absolute inset-0 object-cover  w-full h-full"
                src={SolarSys}
                alt="Solar system animation"
              />
            </div>

            <div className="lg:py-24">

              <h1 className="text-3xl py-4 font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-red-600">My GIF Portal</h1>

              <p className="mt-8 text-gray-200">
                View your GIF collecion in the metaverse ✨.
              </p>

              <button
                className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-gradient-to-r from-green-300 via-blue-500 to-blue-600 active:text-indigo-500 focus:outline-none focus:ring"
                onClick={connectWallet}
              >
                <span className="text-sm font-medium"> Connect Wallet </span>
              </button>
            </div>
          </div></div>
        :
        <>
          <div className="vortex opacity-30">
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
          <h1 className="text-3xl py-8 text-center font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-red-700">My GIF Portal</h1>
          <p className="mt-4 text-gray-200 text-center">
            View my greeting message in the metaverse ✨.
          </p>
          {(gifList === null) ?
            <button className="animate-bounce m-2 p-4 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring" onClick={createGifAccount}>
              Do One-Time Initialization For GIF Program Account
            </button>
            : !showMsgBox ?
              <button className="m-2 p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
                onClick={() => setShowMsgBox(true)}>
                <span className="block p-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
                  Send a message
                </span>
              </button>
              :
              <form className="space-y-4 m-2"
                action="https://formsubmit.co/chuong.tang@aol.com" method="POST"
                onSubmit={async (event) => {
                  event.preventDefault();
                  await sendGif();
                  setShowMsgBox(false)
                }}>
                <div>
                  <label className="sr-only" htmlFor="Email">Email</label>
                  <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Email (optional)" type="text" name="email" id="email" />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    required={true}
                    value={inputValue}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                      const { value } = event.target;
                      setInputValue(value);
                    }}
                    name="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="my-2 inline-flex items-center justify-center w-full border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200 sm:w-auto"
                    disabled={showMsgBox}
                  >Send 🚀
                  </button>
                  <button
                    className="inline-flex float-right items-center justify-center border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200 sm:w-auto"
                    onClick={() => setShowMsgBox(false)}
                  > Cancel ❌
                  </button>
                </div>
              </form>
          }

          <p className="m-8 text-white">{message}</p>
          {/* @ts-ignore */}
          <GridBody gifListArray={gifList} />

        </>

      }

      <footer className="fixed inset-x-0 bottom-0 bottom-0 w-full py-2 bg-gray-100">
        <div className="md:px-8 lg:px-18">
          <div className="container m-auto space-y-6 text-gray-600">

            <div className="text-center">
              <span className="text-sm tracking-wide">Responsively built with </span>
            </div>

            <div className="w-max m-auto flex items-center justify-between space-x-4 pb-2">
              <a href="tel:+243996660436" aria-label="call">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                </svg>
              </a>
              <a href="mailto:hello@mail.com" aria-label="send mail">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                </svg>
              </a>
              <a href="#" title="facebook" target="blank" aria-label="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
              </a>
              <a href="#" title="linkedin" target="blank" aria-label="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </footer>
    </section>

  )
}

export default MainPage