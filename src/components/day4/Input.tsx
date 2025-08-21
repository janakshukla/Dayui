import  {Paperclip,SendHorizontal} from "lucide-react";
import Logo from "../../assets/day4/Logo.png";
import vector from "../../assets/day4/Vector.svg";

const Input = () => {
  return (
    <div className="mt-8 relative w-96 h-28">
      <input
        className=" h-full w-full  rounded-2xl bg-[#F7F7F7]/90 "
        type="text"
      />
      <div className="absolute flex flex-col justify-between p-2 h-full w-full left-0 top-0">
        <div className="flex items-center gap-2 m-2">
          <p className="flex items-center justify-center gap-1 px-2 py-1  bg-white rounded-md  ">
            <img className="size-3" src={Logo} alt="LOGO" />
            <span className="font-inter  text-[9px] text-[#171717]/60 ">
              V3
            </span>
          </p>
          <p className="font-inter  text-[11px] text-[#171717]/40 ">
            Ask anything...
          </p>
        </div>
        <div className="flex justify-between items-baseline" >
            <Paperclip size={18} className=" text-[#5C5C5C] -rotate-[40deg]" />
            <div className="flex gap-2">
                <img src={vector} alt="vector" />
               <div className=" bg-black w-fit rounded-md " > <SendHorizontal className=" text-white p-1.5 -rotate-45" /></div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
