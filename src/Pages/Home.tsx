import { Link } from "react-router-dom";
import Day1 from "../assets/image.png";
import Day2 from "../assets/day2/day2.png";
import Day3 from "../assets/day3/day3.png";
import Day4 from "../assets/day4/day4.png";
import Day5 from "../assets/day5/day5.png";
import Day6 from "../assets/day6/day6.png";
import Day7 from "../assets/day7/day7.png";
import Day8 from "../assets/day8/day8.png";
import NavBar from "../components/Home/NavBar";
import HeroSection from "../components/Home/HeroSection";
import bgimage from "../assets/Home/hero.png";
import Footer from "../components/Home/Footer";
import { Github } from "lucide-react";
const Home = () => {
  const days = [
    {
      day: 1,
      title: "Day1",
      description: "Pricing card",
      image: Day1,
      link: "/day1",
    },
    {
      day: 2,
      title: "Day2",
      description: "Landing page",
      image: Day2,
      link: "/day2",
    },
    {
      day: 3,
      title: "Day3",
      description: "Intro card",
      image: Day3,
      link: "/day3",
    },
    {
      day: 4,
      title: "Day4",
      description: "Grok dashboard",
      image: Day4,
      link: "/day4",
    },
    {
      day: 5,
      title: "Day5",
      description: "Sprrrint email client",
      image: Day5,
      link: "/day5",
    },
    {
      day: 6,
      title: "Day6",
      description: "Widgets screen",
      image: Day6,
      link: "/day6",
    },
    {
      day: 7,
      title: "Day7",
      description: "Grok homepage",
      image: Day7,
      link: "/day7",
    },
    {
      day: 8,
      title: "Day8",
      description: "portfolio inspiration ",
      image: Day8,
      link: "/day8",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-orange-50 ">
      <div
        className="bg-cover container relative  min-h-screen min-w-full"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="absolute inset-0 bg-gray-950/50">
          <NavBar />
          <HeroSection />
        </div>
      </div>
      <div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4">
          {days.map((day) => (
            <div key={day.day} className="relative group">
            <Github
            onClick={() => {
              window.open(`https://github.com/janakshukla/Dayui/blob/main/src/Pages/${day.title}.tsx`)
            }
            }
            className="absolute top-4 right-4 hover:scale-110  "
            
            />
            <Link to={day.link}>
              <div className="bg-white hover:bg-gradient-to-r  from-[#C145FF]/20 to-[#1FDDF2]/20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold">{day.title}</h3>
                <p className="text-gray-600">{day.description}</p>
                <img className="mt-2 md:h-48 mx-auto " src={day.image} alt={day.title} />
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
