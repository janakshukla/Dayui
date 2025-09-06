import { Card, CardFooter, CardHeader } from "./Card";
import BGhero from "../../assets/day8/hero.png";

const Hero = () => {
  return (
    <div className="h-full">
      <Card
        className="w-1/2 h-1/2 mx-auto mt-10 flex flex-col items-center justify-between text-center gap-6 text-white bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${BGhero})`,
        }}
      >
        <CardHeader></CardHeader>
        <CardFooter className="">
          <button className="border border-white py-2 text-white w-2/3 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Book Demo call{" "}
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Hero;
