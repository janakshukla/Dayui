import { useState } from "react";
import Logo from "../../assets/day4/GrokLogo.png";
import open from "../../assets/day4/Open.svg";
import SideBarChat from "./SideBarChat";
import SideBarFooter from "./SideBarFooter";

const SideBar = () => {
  const [isopen, setisopen] = useState(true);
  return (
    <div
      className={`bg-[#f7f7f7]  h-full ${
        isopen ? "w-1/6" : "w-14"
      } transition-all duration-300 ease-in-out`}
    >
      <div
        className={`h-1/10 flex ${
          isopen ? "justify-between" : "justify-center"
        } items-center px-4`}
      >
        <img
          className={` ${
            isopen ? "" : "hidden"
          } transition-all duration-300 ease-in-out`}
          src={Logo}
          alt="LOGO"
        />
        <img
          onClick={() => {
            setisopen(!isopen);
          }}
          className="cursor-e-resize p-1 rounded-md  hover:bg-white hover:scale-110 hover:brightness-110 "
          src={open}
          alt="open"
        />
      </div>
      <SideBarChat isopen={isopen} />
      <SideBarFooter isopen={isopen} />
    </div>
  );
};

export default SideBar;
