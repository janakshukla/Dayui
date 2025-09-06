import { Circle,ArrowUpRight } from "lucide-react";
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
    </div>
  );
};

export default Footer;
