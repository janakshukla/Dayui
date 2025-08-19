import Button from './Button'
import Avatar from "../../assets/day3/Avatar.png"
import { Copy, PlusCircle } from 'lucide-react'

const ContentCard = () => {
  return (
    <div>
        <div className='flex w-full gap-4 mt-4 px-4' >
            <img src={Avatar} alt="Avatar" />
            <div>
                <h1 className='text-white text-2xl font-inter ' >Janak Shukla</h1>
                <p className='text-white/50  font-inter '>Full Stack Developer</p>
            </div>
            
             </div>
        <div className='flex mt-4 w-full gap-1 justify-between px-4' >
            <Button icon={PlusCircle} value='Hire Me' color='bg-[#FFFFFF]/20' />
            <Button icon={Copy} value='Copy Email' color='bg-[#FFFFFF]/10' />
             </div>
    </div>
  )
}

export default ContentCard