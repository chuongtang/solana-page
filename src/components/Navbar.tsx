import React from 'react';

const toggleNavbar = (collapseID: string) => {
  const menuClass = document.getElementById(collapseID) as HTMLButtonElement;
  menuClass.classList.toggle("hidden");
  menuClass.classList.toggle("block");
}

const Navbar = () => {
  return (
    <nav className="sticky top-0  z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {/* <!-- Nav Left Side --> */}
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a className="animate-pulse text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white" href="https://buildspace.so/@chuongtang" target="_blank">
            Web3 Explorer
          </a>
          {/* <!-- Hamburger Menu (Mobile) --> */}
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => toggleNavbar('menuCollapse')}>
            {/* <!-- Icon --> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1={4} y1={6} x2={20} y2={6}></line>
              <line x1={4} y1={12} x2={20} y2={12}></line>
              <line x1={4} y1={18} x2={20} y2={18}></line>
            </svg>
          </button>
        </div>

        <div className="lg:flex flex-grow items-center bg-gray-100 lg:bg-transparent lg:shadow-none hidden" id="menuCollapse">
          {/* <!-- Nav Right Side --> */}
          <ul className="flex flex-col rounded-lg lg:flex-row list-none lg:ml-auto">
            {/* <!--Email Button --> */}
            <li className="flex items-center">
              <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                href="mailto:email@chuongtang.com?subject=Hello%20Chuong">
                {/* <!-- Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x={3} y={5} width={18} height={14} rx={2}></rect>
                  <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
                <span className="lg:hidden inline-block ml-2">Email</span>
              </a>
            </li>
            {/* <!--LinkedIn Button --> */}
            <li className="flex items-center">
              <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                href="https://linkedin.com/in/chuong-tang" target="_blank">
                {/* <!-- Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width={20} height={20} viewBox="0 0 20 20" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x={4} y={4} width={16} height={16} rx={2}></rect>
                  <line x1={8} y1={11} x2={8} y2={16}></line>
                  <line x1={8} y1={8} x2={8} y2="8.01"></line>
                  <line x1={12} y1={16} x2={12} y2={11}></line>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
                <span className="lg:hidden inline-block ml-2">LinkedIn</span>
              </a>
            </li>
            {/* <!-- MyPage Button --> */}
            <li className="flex items-center">
              <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                href="https://chuongtang.pages.dev" target="_blank">
                {/* <!-- Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-network" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="9" r="6"></circle>
                  <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6"></path>
                  <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6"></path>
                  <path d="M6 9h12"></path>
                  <path d="M3 19h7"></path>
                  <path d="M14 19h7"></path>
                  <circle cx="12" cy="19" r="2"></circle>
                  <path d="M12 15v2"></path>
                </svg>
                <span className="lg:hidden inline-block ml-2">MyWeb2.0</span>
              </a>
            </li>
            {/* <!-- Twitter Button --> */}
            <li className="flex items-center">
              <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                href="https://twitter.com/chuongtang3" target="_blank">
                {/* <!-- Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>
            {/* <!-- Github Button --> */}
            <li className="flex items-center">
              <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                href="https://github.com/chuongtang" target="_blank">
                {/* <!-- Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
                <span className="lg:hidden inline-block ml-2">Github</span>
              </a>
            </li>

            {/* <!--Discord Button --> */}
            <li className="flex items-center">
              <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                href="https://discord.gg/Z76uAC3u7x" target="_blank">
                {/* <!-- Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx={9} cy={12} r={1}></circle>
                  <circle cx={15} cy={12} r={1}></circle>
                  <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
                  <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
                  <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
                </svg>
                <span className="lg:hidden inline-block ml-2">Discord</span>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar