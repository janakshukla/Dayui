import { Card, CardFooter, CardHeader } from "./Card";
import BGhero from "../../assets/day8/hero.png";
import { ArrowRightIcon,Circle } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-4/6 mt-4 flex flex-col  sm:flex-row justify-around   ">
      <Card
        className="sm:w-1/2 h-80 lg:h-96  flex p-2 flex-col items-center justify-between text-center gap-6 text-white bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${BGhero})`,
        }}
      >
        <CardHeader
        className="flex justify-end-safe "
        >
          <div className="flex gap-2 bg-black px-5   py-3 -mt-2.5 -mr-2.5 rounded-bl-3xl">
          <Circle size={10} fill="#FFFFFF" />
          <Circle size={10} />
          </div>
         
        </CardHeader>
        <CardFooter>
          <button className="border text-nowrap flex items-center justify-between  border-white p-2 text-white w-2/3 rounded-2xl hover:backdrop-blur-3xl transition-all duration-300">
            Book Demo call{" "}
            <ArrowRightIcon
              className="p-1 rounded-full bg-white "
              size={26}
              color="#000000"
            />
          </button>
        </CardFooter>
      </Card>
      <h1 className="text-white/70 uppercase text-5xl  lg:text-6xl font-thin leading-18 tracking-tight "  >exiciting <br /> ideas await <br /> you,each <br /> coooler than <br /> the last!</h1>
    </div>
  );
};

export default Hero;
