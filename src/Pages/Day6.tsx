import Lower from "../components/day6/Lower";
import Middle from "../components/day6/Middle";
import Upper from "../components/day6/Upper";


const Day6 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="aspect-square w-96 bg-gray-200 scale-75 sm:scale-100 p-2 rounded-3xl flex flex-col  justify-center items-center">
        <Upper/>
        <Middle/>
        <Lower/>
       
      </div>
    </div>
  );
};

export default Day6;
