import Logo from "../../assets/day4/GrokLogo.png";
import open from "../../assets/day4/Open.svg";
import SideBarChat from "./SideBarChat";
import SideBarFooter from "./SideBarFooter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const SideBar = () => {
  const [isopen, setisopen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setisopen(!isopen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md md:hidden"
      >
        {isopen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {isopen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setisopen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative 
          top-0 left-0 h-full 
          bg-[#f7f7f7] 
          transition-all duration-300 ease-in-out 
          z-40
          ${
            isopen
              ? "w-72 translate-x-0"
              : "w-0 md:w-16 -translate-x-full md:translate-x-0"
          }
          md:flex md:flex-col
        `}
      >
        <div
          className={`flex h-16 ${
            isopen ? "justify-between" : "justify-center"
          } items-center px-2`}
        >
          <img
            className={`${
              isopen ? "" : "hidden"
            } transition-all duration-300 ease-in-out`}
            src={Logo}
            alt="LOGO"
          />
          <img
            onClick={() => {
              setisopen(!isopen);
            }}
            className="cursor-e-resize p-1 rounded-md hover:bg-gray-300 hover:scale-110 hidden md:block"
            src={open}
            alt="open"
          />
        </div>
        <SideBarChat isopen={isopen} />
        <SideBarFooter isopen={isopen} />
      </div>
    </>
  );
};

export default SideBar;
