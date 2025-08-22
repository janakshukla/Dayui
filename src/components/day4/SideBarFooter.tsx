import Avatar from "../../assets/day3/Avatar.png";
import { ChevronRight } from "lucide-react";

const SideBarFooter = ({ isopen }: { isopen: boolean }) => {
  return (
    <div
      className={`h-1/10 flex justify-center items-center hover:bg-gray-300  font-inter w-full ${
        isopen ? "xl:gap-6  " : ""
      } `}
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
