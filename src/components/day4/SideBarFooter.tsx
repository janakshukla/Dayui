import Avatar from "../../assets/day3/Avatar.png";
import { ChevronRight } from "lucide-react";

const SideBarFooter = ({ isopen }: { isopen: boolean }) => {
  return (
    <div
      className={`h-1/10 flex sm:justify-center items-center scale-75 xl:scale-100 hover:bg-gray-300  font-inter max-w-full `}
    >
      <img className="scale-50" src={Avatar} alt="Avatar" />
      <div className={`${isopen ? "" : "hidden"}`}>
        <h1 className=" text-s  ">Janak Shukla</h1>
        <p className=" text-[9px]  ">janakshukla509@gmail.com</p>
      </div>
      <ChevronRight size={16} />
    </div>
  );
};

export default SideBarFooter;
