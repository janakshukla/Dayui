import {ArrowRight } from "lucide-react"

const Button = () => {
  return (
    <button
    onClick={()=>{
      window.scrollTo({
        top: 1000, // Scroll to the bottom of the page
        behavior: 'smooth' // Smooth scrolling
      });
    }}
    className="bg-green-300 text-xs p-2 rounded-4xl flex items-center justify-center gap-2 text-gray-950 shadow-inner hover:bg-green-400 transition-colors duration-300 shadow-black/40 drop-shadow-sm drop-shadow-black/20  ">
        Get Started for free
        <ArrowRight className="bg-gray-900 rounded-2xl text-white/80 " size={18} />
    
    </button>
  )
}

export default Button