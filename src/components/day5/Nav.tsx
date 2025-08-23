import Logo from "../../assets/day5/Day5Logo.png";
const Nav = () => {
  return (
    <nav className=" text-white py-4 px-4 sm:px-8  flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <img className="size-8" src={Logo} alt="" />
        <h1 className="font-inter text-xl bg-linear-to-r from-white to-[#999999] text-transparent bg-clip-text">
          Sprrrint
        </h1>
      </div>
      <button className="font-medium font-geist text-xs hover:bg-black bg-linear-to-br  from-white/1 to-white/0.1 px-3 py-3 rounded-4xl drop-shadow-[0_24px_43px_rgba(0,0,0,0,.25)] shadow-[inset_0_0px_10px_1px_rgba(255,255,255,0.15)] ">
        {" "}
        Request Access{" "}
      </button>
    </nav>
  );
};

export default Nav;
