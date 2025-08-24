import Companies from "../../assets/day5/companies.svg";
import Button from "./Button";
import {BookmarkCheck } from "lucide-react"
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-6 justify-center text-center p-4 ">
      <BookmarkCheck className="p-3 size-12 border border-white backdrop-blur-2xl bg-white/10 text-white rounded-xl rotate-12 " />
      <h1 className="text-6xl text-white/80 tracking-tighter  font-serif " >One Place For <br /> Every Design you Make. </h1>
      <p className=" text-white/70 tracking-tight font-inter text-sm " >This Library is more of a result of @_heysataya design challenge <br /> where i developed everything pixel perfect from his designs,if you like any thing feel free to use. </p>
      <Button />
      <img className="sm:w-1/2 m-auto mt-2" src={Companies} alt="footer" />
    </div>
  );
};

export default HeroSection;
