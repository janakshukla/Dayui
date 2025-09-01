import { ChevronDown } from "lucide-react";
import Logo from "../../assets/day7/Logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="w-1/2 h-12 m-auto bg-black/87 font-inter text-xs mt-4 rounded-lg flex items-center justify-around">
        <img className="w-16" src={Logo} alt="logo" />
        <p className="  text-white flex items-center-safe gap-1">
          Products <ChevronDown size={12} />
        </p>
        <p className="  text-white flex items-center-safe gap-1">
        Resources <ChevronDown size={12} />
        </p>
        <p className="  text-white flex items-center-safe gap-1">
        Integrations <ChevronDown size={12} />
        </p>
        <p className="  text-white flex items-center-safe gap-1">
        More <ChevronDown size={12} />
        </p>

        <button className="bg-[#FFFFFF14] px-3 py-2 text-white  hover:bg-[#FFFFFF30] rounded-md " >Login</button>
        <button className="text-black px-4 py-2 bg-white  hover:bg-white/95 rounded-lg  font-semibold " >Join the waitlist</button>
       
      </div>
    </nav>
  );
};

export default Navbar;
