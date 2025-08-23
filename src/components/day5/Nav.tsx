import Logo from '../../assets/day5/Day5Logo.png'
const Nav = () => {
  return (
    <nav className=" text-white p-4 flex justify-between items-center">
      <div>
        <img src={Logo} alt="" />
        <h1 className='font-geist text-5xl bg-linear-to-r from-white to-[#999999] text-transparent bg-clip-text' >Sprrrint</h1>
      </div>
      <button></button>
    </nav>
  )
}

export default Nav