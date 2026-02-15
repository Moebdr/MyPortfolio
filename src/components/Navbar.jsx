import { use, useRef, useState } from "react";
import logo from '../assets/logo.png'
export const NavMenue = ["Services", "about", "Contact", "Skills"]
  .toString()
  .toUpperCase()
  .split(",");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const  {hoverAction,setHoverAction} = useState("");
  return (
    <header
      className="fixed w-full 
         py-2 text-blck z-10
          bg-gradient-to-l from-blue-950 to-gray-950 shadow 
          shadow-md shadow-white
           top-0
           md:p-0
           "
    >
      <nav className="container text-white flex justify-between items-center relative px-5">
        <div className="text-3xl shadow  shadow-md  w-17 ">
          <img src={logo} alt="" srcset="" className=" aspect-square inline" />
        </div>

        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 
       5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                fill="currentColor"
              ></path>
              <path
                d="M4 18C4 17.4477 4.44772 17 5 
       17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772
        19 4 18.5523 4 18Z"
                fill="currentColor"
              ></path>
              <path
                d="M5 11C4.44772 11 4 
        11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14
         11.4477 13.5523 11 13 11H5Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090
             0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 
             0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854
              4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 
              0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 
              0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"
              ></path>
            </svg>
          )}
        </button>

        <ul
          className={`${isOpen ? "flex" : "hidden"} text-center absolute text-white bg-blue-950 font-bold flex-col left-0 top-17 w-full md:flex md:static md:flex-row md:bg-transparent gap-2 md:gap-5 justify-end p-2 md:p-5 `}
        >
          {NavMenue.map((link, index) => (
            <li
              className={`text-xs md:text-sm p-3 transition md:p-0 
                 border-b-[rgba(255,255,255,.2)]
                  ${index !== NavMenue.length - 1 ? 
                    "border-b md:border-none" : ""} 
                    flex items-center justify-center cursor-pointer ${hoverAction}`}
              key={link}
              onMouseOver={()=> setHoverAction('hover:bg-white hover:text-blue-950') }
              onMouseLeave={()=> setHoverAction('') }
            >
              <a href={"#" + link}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
