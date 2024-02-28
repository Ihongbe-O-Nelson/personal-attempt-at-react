import React from "react";
import bgImage from "../assets/images/bg-mobile-dark.jpg";
import bgImageLight from "../assets/images/bg-mobile-light.jpg";
import { BsBrightnessHighFill } from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";
import bgImageLarge from "../assets/images/bg-desktop-dark.jpg";

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-slate-900 h-screen fixed w-full">
      {/* for small screen */}
      <div>
        {darkMode ? (
          <img src={bgImage} alt="" className="absolute z-[-10] w-full" />
        ) : (
          <img src={bgImageLight} alt="" className="absolute z-[-10] w-full" />
        )}
      </div>
      <div className="flex text-white justify-between px-8 py-10 items-center">
        <p className="text-3xl font-medium tracking-widest">TODO</p>
        <div onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? 
            <BsBrightnessHighFill className="text-xl" />
           : 
            <IoIosMoon className="text-xl" />
          }
        </div>
      </div>

      {/* for large screens */}
      {/* <div id='largeScreen'>
        <img src= {bgImageLarge} alt="" className='lg:absolute z-[-10] w-full'/>
      </div>
      <div className='lg:flex text-white justify-between py-10 items-center px-[27.7%]'>
        <p className='text-3xl font-medium tracking-widest'>TODO</p>
        <BsBrightnessHighFill className='text-xl'/>
      </div> */}
    </nav>
  );
};

export default NavBar;

// import imageLogo from "../assets/linkedin Logo.png"

// const NavBar = () => {
//   return (
//     <NavBar>
//         <div>
//             <img src="{imageLogo}" alt="" />
//             <input type="text" placeholder="search" className="bg-grey-400" />
//         </div>
//     </NavBar>
//   )
// }

// export default NavBar
