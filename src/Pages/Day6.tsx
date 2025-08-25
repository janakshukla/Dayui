import { ChevronsUpDown } from "lucide-react";
import Avatar from "../assets/day3/Avatar.png";

const Day6 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="aspect-square w-96 bg-red-100 p-2 rounded-3xl flex flex-col  justify-center items-center">
        <div className=" flex w-full gap-4  h-20 m-4  ">
          <div className="w-3/4 flex gap-4 justify-center items-center-safe rounded-3xl bg-white">
            <h1 className="font-inter font-bold text-2xl tracking-tighter ">
              30
              <span className="font-medium ml-1 text-base text-[#898A8D] ">
                mins
              </span>
            </h1>

            <ChevronsUpDown className="text-[#898A8D] size-6 " />
            <button
              className="px-6 py-3 rounded-2xl text-white backdrop-blur-2xl font-medium shadow-lg drop-shadow-2xl drop-shadow-[#939DFB40] "
              style={{
                background:
                  "linear-gradient(-170deg, #FFFFFF, #FCB1A7, #FEB484, #5A65FF90,#5A65FF,#5A65FF)",
              }}
            >
              Book a call
            </button>
          </div>
          <div className="w-1/4 flex justify-center items-center-safe rounded-3xl bg-white">
            <img className="scale-75" src={Avatar} alt="Avatar" />
          </div>
        </div>
        <div className=" flex w-full gap-4 h-40 m-4  ">
          <div className="w-1/2 rounded-3xl bg-green-500"></div>
          <div className="w-1/2 rounded-3xl bg-orange-500"></div>
        </div>
        <div className=" flex w-full gap-4 h-20 m-4  ">
          <div className="w-1/4  rounded-3xl bg-blue-500"></div>
          <div className="w-3/4   rounded-3xl bg-violet-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Day6;
