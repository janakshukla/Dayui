import shop from "../../assets/day2/shop.png";

const Button = () => {
  return (
    <button className="py-1 px-2 text-sm font-medium font-geist bg-[#FF7A68] cursor-pointer hover:scale-110 flex gap-0.5 rounded-lg  text-white drop-shadow-sm drop-shadow-[#FF5E49]/50 shadow-[inset_0_-3.57px_11.78px_0_#EB4630,inset_0_0.89px_0.89px_0px_#FFFFFF] ">
    <img src={shop} alt="shop" />
    Install Customizer{" "}
  </button> 
  )
}

export default Button