import ContentCard from "../components/day3/ContentCard";
import Light from "../assets/day3/Light.svg";
import watch from "../assets/day3/AlarmWatch.svg";
const Day3 = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white ">
      <div className="h-1/3 w-1/3 rounded-[52px] bg-[#A1F452] shadow-[inset_0px_-2px_4px_0_#74D816]/51 drop-shadow-[inset_0px_14px_12px_0_#A1F452]/13 ">
        <div className="w-full bg-fixed h-5/6 rounded-[52px] bg-[#0A0A0A] shadow-[inset_0px_1px_2px_0_#FFFFFF]/17 drop-shadow-[inset_0px_14px_22px_0_#000000]/24 ">
          <div className="w-4/5   flex font-inter text-[15px] text-white/50 justify-between items-center pt-4 m-auto  ">
            <p className="flex items-center-safe  gap-2 ">
              {" "}
              <span className="h-1.5 w-1.5 rounded-full bg-[#A1F450] "></span>{" "}
              Available for work
            </p>
            <p className="flex items-center-safe  gap-2">
              <img src={watch} alt="watch" />
              7:15PM
            </p>
          </div>
          <ContentCard />
        </div>
        <div className="w-full h-1/6 flex justify-center items-center-safe font-inter font-medium text-[15px] tracking-tight text-[#000000] ">
          <img src={Light} alt="Lighiting" />
          Currently High on Creativity
        </div>
      </div>
    </div>
  );
};

export default Day3;
