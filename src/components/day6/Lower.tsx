import { Sun } from "lucide-react";
import Plus from "../../assets/day6/Plus.svg";

const Lower = () => {
  return (
    <div className=" flex w-full gap-4 h-20 m-4  ">
      <div className="w-1/4  rounded-3xl place-content-center bg-white">
        <img src={Plus} alt="icon" />
      </div>
      <div className="bg-white w-full font-inter py-2 px-6 rounded-2xl h-full  ">
        <p className="text-[#F9BD36]  flex gap-2 items-center ">
          {" "}
          <Sun size={18} fill="#F9BD36" />{" "}
          <span className="text-[#B2B2B2] text-[10px] font-bold ">MORNING DOMINIC</span>{" "}
        </p>
        <p className="text-[#B2B2B2] text-sm font-semibold px-1 ">
          {" "}
          You Should
          <span className="text-slate-950">
            {" "}
            finish your portfolio <br />
          </span>
          today, what do you think?
         
        </p>
      </div>
    </div>
  );
};

export default Lower;
