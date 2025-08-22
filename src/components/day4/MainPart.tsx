import Logo from "../../assets/day4/Logo.png";
import Input from "./Input";
import  {LucideScanSearch,Lightbulb,PenIcon,Clock,Lock,Users} from "lucide-react";

const MainPart = () => {
  return (
    <div className='h-full w-full  bg-white rounded-4xl ' >
        <div className=" flex justify-center items-center h-11/12"  >
           <div className="font-inter" >
           <img src={Logo} alt="LOGO" />
            <h1 className="font-semibold text-2xl tracking-tight leading-relaxed text-black/82 " >How can I help today?</h1>
            <p className=" text-xs  leading-loose text-black/60 " >Try out new features: Deep Search, Think, Edit Image</p>
            <Input/>
            <div className="font-inter font-medium mt-4 flex gap-4 items-center justify-center-safe text-xs text-black/82 leading-[11px]" >
                <div className="border flex gap-2 border-[#EBEBEB] p-2 rounded-lg drop-shadow-sm drop-shadow-[#0A0D14]/3  " ><LucideScanSearch size={12} color="#51BB7A" /> Deep Search</div>
                <div className="border flex gap-2  border-[#EBEBEB] p-2 rounded-lg drop-shadow-sm drop-shadow-[#0A0D14]/3  " > <Lightbulb size={12} color="#4662EC" /> Think</div>
                <div className="border flex gap-2  border-[#EBEBEB] p-2 rounded-lg drop-shadow-sm drop-shadow-[#0A0D14]/3  " ><PenIcon size={12} color="#F49F23" />Edit Image</div>
            </div>
           </div>
        </div>
        <div className="flex justify-center gap-10 items-center-safe h-1/12" >
        <div className="font-inter text-xs flex justify-center items-center gap-2 text-black/82 ">
        <Clock size={12} />
        Available 24/7

        </div>
        <div className="font-inter text-xs flex justify-center items-center gap-2 text-black/82 ">
        <Lock size={12} />
        Securely Encrypted

        </div>
        <div className="font-inter text-xs flex justify-center items-center gap-2 text-black/82 ">
        <Users size={12} />
        For the people

        </div>

        </div>
        
    </div>
  )
}

export default MainPart
