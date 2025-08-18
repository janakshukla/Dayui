import Logo from "../../assets/day2/Logo.png";
import shop from "../../assets/day2/shop.png";
const Navbar = () => {
  return (
    <div className=" m-auto w-3/5 bg-white mt-8 drop-shadow-sm drop-shadow-[#FF675C]/20 rounded-2xl flex justify-between items-center py-2 px-2  ">
      <img src={Logo} alt="logo" />
      <ul className="flex gap-4 text-sm tracking-tight font-medium font-geist items-center ">
        <li className="cursor-pointer hover:scale-110" > Home</li>
        <li className="cursor-pointer hover:scale-110" > How it works</li>
        <li className="cursor-pointer hover:scale-110"  >Resources</li>
        <button className="py-2 px-2 bg-[#FF7A68] cursor-pointer hover:scale-110 flex gap-0.5 rounded-lg  text-white drop-shadow-sm drop-shadow-[#FF5E49]/50 shadow-[inset_0_-3.57px_11.78px_0_#EB4630,inset_0_0.89px_0.89px_0px_#FFFFFF] ">
          <img src={shop} alt="shop" />
          Install Customizer{" "}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
