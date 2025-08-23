import Hero from "../../assets/day5/Hero.png"

const HeroPart = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center  sm:mt-6 h-[90%] ">
      <h1 className="font-inter text-center tracking-tighter leading-[3rem] text-3xl  sm:text-5xl font-bold bg-linear-to-r from-white/92 to-[#999999]/92 text-transparent bg-clip-text">
        The Smarter Way to <br />  Manage Emails
      </h1>
      <p className="text-center text-[#D9D9D9] text-[10px]" >
        Auto-segmentation, smart filtering, AI auto-complete, and built-in
        CRM. <br /> Stop wasting time on repetitive tasks.
      </p>

      <button className="font-medium mt-2 sm:mt-4  text-xs hover:bg-[#7CFF36]/80 bg-[#7CFF36] px-4 py-3 rounded-4xl  drop-shadow-xl drop-shadow-[#7FDE4B]/51 ">
        {" "}
        Request Access{" "}
      </button>
      <p className="text-center -mt-2 text-white/70 text-[8px]" >Get 3 month free now</p>
      <img className=" scale-100 sm:scale-95 mt-6 sm:-mt-8 " src={Hero} alt="hero" />
    </div>
  );
};

export default HeroPart;
