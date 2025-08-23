import Footer from "../components/day5/Footer";
import HeroPart from "../components/day5/HeroPart";
import Nav from "../components/day5/Nav";

const Day5 = () => {
  return (
    <div className="bg-gray-950 h-screen min-w-full p-4 ">
      <div className="h-11/12 bg-[#2B2B2B]/54 rounded-4xl ">
        <Nav />
        <HeroPart />
      </div>
      <Footer />
    </div>
  );
};

export default Day5;
