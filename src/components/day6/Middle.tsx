import { Sun, EllipsisVertical,Image,Video,File,Music } from "lucide-react";
import Folder from "../../assets/day6/Folder.png";

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
        <h1 className="font-inter font-semibold tracking-tighter pt-4 pl-4 text-4xl">
          9:41 <span className="text-xl font-medium -ml-1 ">AM</span>
        </h1>
        <div className="h-1/2 w-full p-0.5 ">
          <div
            className=" absolute w-4/5 left-4  h-1/2 rounded-2xl -z-10 -mt-2 "
            style={{
              background:
                "linear-gradient(245.39deg, rgba(217, 217, 217, 0.1) -4.23%, #C591D1 40.96%, rgba(225, 206, 202, 0.28309) 89.96%)",
              border: "1px solid #FFFFFF66",
            }}
          >
            {" "}
          </div>
          <div className="bg-white w-full py-2 px-1 rounded-2xl h-full  ">
            <p className="text-[#F9BD36] text-[10px] flex gap-2 items-center ">
              {" "}
              <Sun size={18} fill="#F9BD36" />{" "}
              <span className="text-[#B2B2B2]">MORNING DOMINIC</span>{" "}
            </p>
            <p className="text-[#B2B2B2] text-nowrap text-[10px] px-1 ">
              {" "}
              You have to start{" "}
              <span className="text-slate-950">
                {" "}
                delegating <br /> tasks
              </span>
              , now go to <span className="text-slate-950">
                {" "}
                carpe diem{" "}
              </span>{" "}
              ;){" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 rounded-3xl bg-white/90">
        <div className="flex justify-between p-4">
          <div>
            <img className="h-16 " src={Folder} alt="folder" />
          </div>
          <EllipsisVertical className="text-black size-7 " />
        </div>
        <p className="px-6 text-[#B2B2B2] font-black font-inter text-sm -mt-2 " >NEW</p>
        <h1 className="px-6 text-black font-bold font-inter text-xl tracking-tighter " >Happy Files</h1>
        <ul className="flex gap-4 text-[#CACACA] justify-center items-center">
            <li className="flex gap-1 text-[10px] items-center-safe " > <Image size={10} /> 24 </li>
            <li className="flex gap-1 text-[10px] items-center-safe " > <Video size={10} /> 88 </li>
            <li className="flex gap-1 text-[10px] items-center-safe " > <File size={10} /> 9 </li>
            <li className="flex gap-1 text-[10px] items-center-safe " > <Music size={10} /> 89</li>
        </ul>
      </div>
    </div>
  );
};

export default Middle;
