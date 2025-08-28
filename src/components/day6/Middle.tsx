import { Sun } from "lucide-react";

const Middle = () => {
  return (
    <div className=" flex w-full gap-4 h-40 m-4  ">
      <div
        className="text-white backdrop-blur-2xl border-4 border-white/90 flex flex-col justify-between  font-medium  w-1/2 rounded-3xl "
        style={{
          background:
            "linear-gradient(206.7deg, rgba(217, 217, 217, 0.1) 21.15%, rgba(252, 165, 147, 0.940278) 31.41%, #FFB883 62.55%, #5A65FF 86.33%)",
          boxShadow: "0px 4px 4px 0px #00000008",
        }}
      >
        <h1 className="font-inter font-semibold tracking-tighter pt-4 pl-4 text-4xl" >
          9:41 <span className="text-xl font-medium -ml-1 " >AM</span>
        </h1>
        <div className="h-1/2 w-full p-0.5 "  >
          <div className=""></div>
          <div className="bg-white w-full py-2 px-1 rounded-2xl h-full  ">
            <p className="text-[#F9BD36] text-[10px] flex gap-2 items-center " > <Sun size={18} fill="#F9BD36" /> <span className="text-[#B2B2B2]" >MORNING DOMINIC</span> </p>
            <p className="text-[#B2B2B2] text-[10px] px-1 " > You have to start <span className="text-slate-950" > delegating <br /> tasks</span>, now go to <span className="text-slate-950" > carpe diem </span> ;) </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 rounded-3xl bg-orange-500"></div>
    </div>
  );
};

export default Middle;
