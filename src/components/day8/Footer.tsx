import { Circle,ArrowUpRight, Play } from "lucide-react";
import { Card, CardFooter, CardHeader } from "./Card";

const Footer = () => {
  return (
    <div className="px-4 flex gap-1 -mt-8">
      <Card className="w-1/5 h-44 bg-[#39D8EE] flex p-4 flex-col items-center justify-between gap-6 ">
        <CardHeader className="flex justify-between ">
          <h1 className="text-black/80  font-inter uppercase font-light" >successful <br /> projects</h1>
          <div className="flex gap-2 bg-[#39D8EE] h-12 w-12 -mt-6 -mr-[16.5px] rounded-tl-sm rounded-tr-2xl"></div>
        </CardHeader>
        <CardFooter className="text-black text-3xl font-inter" >900+</CardFooter>
      </Card>
      <Card className="w-1/5 h-44 bg-[#E1E1E1] flex p-4 flex-col items-center justify-between gap-6 ">
        <CardHeader className="flex justify-between ">
          <h1 className="text-black/80  font-inter uppercase font-light" >unique <br /> business solution</h1>
          <div className="flex gap-2 bg-[#E1E1E1] h-12 w-12 -mt-6 -mr-[16.5px] rounded-tl-sm rounded-tr-2xl"></div>
        </CardHeader>
        <CardFooter className="text-black text-3xl font-inter lowercase select-none rotate-6 " >x</CardFooter>
      </Card>
      <Card className="w-1/5 h-44 bg-[#FDC959] flex p-4 flex-col items-center justify-between gap-6 ">
        <CardHeader className="flex justify-between ">
          <h1 className="text-black/80 flex font-inter uppercase font-light" ><Circle size={10} fill="#000000" />
          <Circle size={10} /></h1>
          <div className="flex gap-2 bg-[#FDC959] h-12 w-12 -mt-6 -mr-[16.5px] rounded-tl-sm rounded-tr-2xl">
            <ArrowUpRight className="mt-4" size={30} />
          </div>
        </CardHeader>
        <CardFooter className="text-black/90  tracking-tighter leading-tight text-3xl  font-inter" >OUR CASE <br /> STUDIES</CardFooter>
      </Card>
      <div className="w-1/5 h-44 flex flex-col gap-1 justify-end p-4 " >
        <h1 className="px-4 py-1.5 w-fit uppercase font-medium font-inter border rounded-3xl  text-white/70 border-white/70 " >email marketing</h1>
        <h1 className="px-4 py-1.5 w-fit uppercase font-medium font-inter border rounded-3xl  text-white/70 border-white/70 " >web analytics</h1>
        <h1 className="px-4 py-1.5 w-fit uppercase font-medium font-inter border rounded-3xl  text-white/70 border-white/70 " >seo</h1>
      </div>
      <div className="w-1/5 h-44 flex   gap-2 p-4 mt-6 " >
      <Play fill="black" className="size-8 rounded-full p-2 bg-white/70 text-black" />
      <h1 className="text-xs  text-white/70 " >Let's See <br /> How We Did it. </h1>

      </div>
    </div>
  );
};

export default Footer;
