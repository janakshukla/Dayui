import Navbar from "../components/day7/Navbar"
import bgimage from "../assets/day7/bgimage.png"
import Hero from "../components/day7/Hero"

const Day7 = () => {
  return (
    <div
    style={{ background:`url(${bgimage})`}}
    className=" bg-cover h-screen w-full fixed">
        <Navbar/>
        <Hero/>
</div>
    
  )
}

export default Day7