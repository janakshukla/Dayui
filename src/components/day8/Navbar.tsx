import {SquareUserRound,ArrowRightCircleIcon} from 'lucide-react'

const Navbar = () => {
  return (
   <div>
     <nav className="w-11/12  mx-auto text-[#b2b2b2] flex items-center border  justify-between sm:p-2 p-1 rounded-4xl">
        <div className='flex items-center justify-around gap-1 w-1/3' >
            <SquareUserRound size={32} fill='#2B4491' />
            <p className='uppercase text-nowrap font-medium text-xs ' >about  us</p>
            <p className='uppercase text-nowrap font-medium text-xs ' >services</p>
            <p className='uppercase text-nowrap font-medium text-xs ' >cases</p>


        </div>
        <button className='flex items-center gap-1 border hover:bg-white/30 transition-all duration-300 border-white px-2 py-0.5 rounded-2xl text-xs '>SIGN UP <ArrowRightCircleIcon fill='#FFFFFF' color='#000000' /> </button>

    </nav>
   </div>
  )
}

export default Navbar