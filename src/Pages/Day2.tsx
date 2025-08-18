import bgimage from '../assets/day2/Frame 2147225952.svg';
import Navbar from '../components/day2/Navbar';
const Day2 = () => {
  return (
    <div className="bg-cover container fixed object-fill min-h-screen w-full" style={{ backgroundImage: `url(${bgimage})` }}>
    <Navbar/>

    </div>
  )
}

export default Day2