import { Link } from "react-router-dom";
import Day1 from "../assets/image.png"
import Day2 from "../assets/day2/day2.png"
import Day3 from "../assets/day3/day3.png";
import Day4 from "../assets/day4/day4.png";
import Day5 from "../assets/day5/day5.png";
import NavBar from "../components/Home/NavBar";
import HeroSection from "../components/Home/HeroSection";
const Home = () => {
  const days = [
    {
      day: 1,
      title: "Day 1",
      description: "Pricing card",
      image: Day1,
      link: "/day1",
    },
    {
      day: 2,
      title: "Day 2",
      description: "Landing page",
      image: Day2,
      link: "/day2",
    },
    {
      day: 3,
      title: "Day 3",
      description: "Intro card",
      image: Day3,
      link: "/day3",
    },
    {
      day: 4,
      title: "Day 4",
      description: "Grok dashboard",
      image: Day4,
      link: "/day4",
    },
    {
      day: 5,
      title: "Day 5",
      description: "Sprrrint email client",
      image: Day5,
      link: "/day5",
    }
    
  ];

  return (
    <div className="min-h-screen w-full bg-orange-50 p-4 ">
      <div className="h-screen">
        <NavBar/>
        <HeroSection/>
       </div>
      <div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {days.map((day) => (
            <Link to={day.link} key={day.day}>
              <div className="bg-white hover:bg-gradient-to-r  from-[#C145FF]/20 to-[#1FDDF2]/20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">{day.title}</h3>
                <p className="text-gray-600">{day.description}</p>
                <img className="mt-2" src={day.image} alt={day.title} />
              </div>
            </Link>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Home;
