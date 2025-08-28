import { ChevronsUpDown } from "lucide-react";
import Avatar from "../../assets/day3/Avatar.png";

const Upper = () => {
  return (
    <div className=" flex w-full gap-4  h-20 m-4  ">
          <div className="w-3/4 flex  sm:gap-4 justify-center items-center-safe rounded-3xl bg-white">
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
                  "linear-gradient(210.15deg, #FFFFFF 5.55%, #FCB1A7 23.44%, #FEB484 54.02%, #5A65FF 86.36%)",
              }}
            >
              Book a call
            </button>
          </div>
          <div className="w-1/4 flex justify-center items-center-safe rounded-3xl bg-white">
            <img className="scale-75" src={Avatar} alt="Avatar" />
          </div>
        </div>
  )
}

export default Upper