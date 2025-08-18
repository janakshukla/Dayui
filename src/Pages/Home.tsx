import { Link } from "react-router-dom";
import Day1 from "../assets/image.png"
import Day2 from "../assets/day2/day2.png"
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
    }
  ];

  return (
    <div className="min-h-screen w-full bg-orange-50 text-center p-4 ">
      <div className="h-1/5">
        <h1 className="font-semibold text-5xl text-shadow-lg tracking-tighter font-geist text-center">
          Welcome to Dayui.
        </h1>
        <p className=" font-geist font-medium  text-shadow-lg -tracking-normal mt-4 text-center">
        Here I am, recreating everything that @heysatya_ will design in his 30-day challenge. This home UI is not final; I will be creating its design on Day 31.
        </p>
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
