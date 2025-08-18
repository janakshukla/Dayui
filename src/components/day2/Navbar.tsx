import { useState } from "react";
import Logo from "../../assets/day2/Logo.png";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="m-auto sm:w-3/5 bg-white mt-8 drop-shadow-sm drop-shadow-[#FF675C]/20 rounded-2xl py-2 px-2">
      <div className="flex justify-between items-center">
        <img className="scale-75 sm:scale-100" src={Logo} alt="logo" />
        
 
        <ul className="hidden sm:flex gap-4 text-sm tracking-tight font-medium font-geist items-center">
          <li className="cursor-pointer hover:scale-110">Home</li>
          <li className="cursor-pointer hover:scale-110">How it works</li>
          <li className="cursor-pointer hover:scale-110">Resources</li>
          <Button/>
        </ul>

   
        <button 
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-5 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 mt-4' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-3 text-sm tracking-tight font-medium font-geist pb-4">
          <li className="cursor-pointer hover:scale-110 px-2 py-1">Home</li>
          <li className="cursor-pointer hover:scale-110 px-2 py-1">How it works</li>
          <li className="cursor-pointer hover:scale-110 px-2 py-1">Resources</li>
          <div className="px-2">
            <Button/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;