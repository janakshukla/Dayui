import {ArrowRight } from "lucide-react"

const Button = () => {
  return (
    <button className="bg-green-300 text-xs p-2 rounded-4xl flex items-center justify-center gap-2 text-gray-950 shadow-inner hover:bg-green-400 transition-colors duration-300 shadow-black/40 drop-shadow-sm drop-shadow-black/20  ">
        Get Started for free
        <ArrowRight className="" size={16} />
    
    </button>
  )
}

export default Button