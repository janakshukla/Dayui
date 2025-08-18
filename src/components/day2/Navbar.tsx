import Logo from "../../assets/day2/Logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" m-auto sm:w-3/5  bg-white mt-8 drop-shadow-sm drop-shadow-[#FF675C]/20 rounded-2xl flex justify-between items-center py-2 px-2  ">
      <img className="scale-75 sm:scale-100" src={Logo} alt="logo" />
      <ul className="flex sm:gap-4 gap-2 text-xs sm:text-sm tracking-tight font-medium font-geist items-center ">
        <li className="cursor-pointer hover:scale-110" > Home</li>
        <li className="cursor-pointer hover:scale-110" > How it works</li>
        <li className="cursor-pointer hover:scale-110"  >Resources</li>
       <Button/>
      </ul>
    </div>
  );
};

export default Navbar;
