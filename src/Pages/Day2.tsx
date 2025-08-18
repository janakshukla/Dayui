import bgimage from "../assets/day2/Frame 2147225952.svg";
import Navbar from "../components/day2/Navbar";
const Day2 = () => {
  return (
    <div
      className="bg-cover container fixed object-fill min-h-screen w-full"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Navbar />
      <h1 className="w-1/8 font-geist font-medium py-0.5 drop-shadow-sm drop-shadow-[#B93C3C]/20 text-xs m-auto place-content-center bg-white mt-12 rounded-lg">
        <span className="px-1 py-0.5 text-white mr-4 rounded-lg bg-[#FF7A68] shadow-[inset_0_0.89px_0.89px_0_#FFFFFF,inset_0_-3.57px_1.78px_0px_#EB4630] drop-shadow-sm drop-shadow-[#FF5E49]/45 ">31%</span>
        Increased AOV Value 🎉
      </h1>
    </div>
  );
};

export default Day2;
