import Companies from "../assets/day5/companies.svg"
import HeroPart from "../components/day5/HeroPart";
import Nav from "../components/day5/Nav";

const Day5 = () => {
  return (
    <div className="bg-gray-950 h-screen min-w-full p-4 ">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[700px] 
              bg-gradient-to-b from-white via-white/50 to-transparent 
              rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className=" relative h-11/12 bg-[#2B2B2B]/54 overflow-hidden outline outline-white/21 backdrop-blur-3xl drop-shadow-md drop-shadow-[#000000]/25 rounded-4xl ">
        <Nav />
        <HeroPart />
      </div>
     <img className="w-1/2 m-auto mt-2" src={Companies} alt="footer" />
    </div>
  );
};

export default Day5;
