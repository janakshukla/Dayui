import Button from "./Button"


const NavBar = () => {
  return (
    <nav className='w-full  p-4 flex items-center justify-between ' >
        <h1 className="text-2xl tracking-tighter font-bold font-geist text-white/80 " ><span className=" font-serif text-3xl text-yellow-500" >D</span>ayUi</h1>
        <Button/>
    </nav>
  )
}

export default NavBar