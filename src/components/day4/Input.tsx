import { Paperclip, SendHorizontal } from "lucide-react";
import Logo from "../../assets/day4/Logo.png";
import vector from "../../assets/day4/Vector.svg";
import { useRef, useState } from "react";

const Input = () => {
  const [inputval, setinputval] = useState("");
  const inputref = useRef(null);
  return (
    <div className="mt-8 relative w-96 h-28">
      <input
        value={inputval}
        onChange={(e) => setinputval(e.target.value)}
        ref={inputref}
        className=" h-full w-full font-inter focus:outline-[#171717]/60 text-[11px] text-[#171717] p-4 rounded-2xl bg-[#F7F7F7]/90 "
        type="text"
      />
      <div
        onClick={() => {
          if (inputref.current) {
            (inputref.current as HTMLInputElement).focus();
          }
        }}
        className="absolute flex flex-col justify-between p-2 h-full w-full left-0 top-0"
      >
        <div className="flex flex-col  gap-2 m-2">
          <p className="flex items-center bg-white rounded-md  gap-1 px-2 py-1 w-fit   ">
            <img className="size-3 " src={Logo} alt="LOGO" />
            <span className="font-inter  text-[9px] text-[#171717]/60 ">
              V3
            </span>
          </p>
          <p
            className={`font-inter mt-1  text-[11px] text-[#171717]/40 ${
              inputval.length > 0 ? "scale-0" : ""
            } transition-all duration-300 ease-in-out`}
          >
            Ask anything...
          </p>
        </div>
        <div className="flex justify-between items-baseline">
          <Paperclip size={18} className=" text-[#5C5C5C] -rotate-[43deg]" />
          <div className="flex gap-2">
            <img src={vector} alt="vector" />
            <div className=" bg-black hover:bg-black/80 hover:scale-105 w-fit rounded-md ">
              {" "}
              <SendHorizontal className=" text-white p-1.5 -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
