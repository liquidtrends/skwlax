import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from './ActiveLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='container mx-auto flex items-center flex-wrap bg-green-400 p-3 '>
        <style jsx>{`
          .nav-link {
            text-decoration: none;
          }
          .active {
            border: 1px solid black;
            color: black;
          }
        `}</style>
        <Link href='/'>
          <a href="#"><img className="transition duration-500 ease-in-out object-contain md:object-scale-down transform hover:scale-110 w-40 md:w-40" src="img/logo.png"/></a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-skwlax ml-auto hover:text-black outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='black'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <ActiveLink activeClassName="active" href="/">
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-skwlax items-center justify-center hover:bg-green-600 hover:text-black uppercase'>
                Home
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/about-us">
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-skwlax items-center justify-center hover:bg-green-600 hover:text-black uppercase'>
                About Us
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/partnership">
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-skwlax items-center justify-center hover:bg-green-600 hover:text-black uppercase'>
                Partnership
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/capabilities">
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-skwlax items-center justify-center hover:bg-green-600 hover:text-black uppercase'>
                Capabilities
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/contact">
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-skwlax items-center justify-center hover:bg-green-600 hover:text-black uppercase'>
                Contact Us
              </a>
            </ActiveLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar
