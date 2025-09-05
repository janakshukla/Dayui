import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day1 from "../Pages/Day1";
import Home from "../Pages/Home";
import Day2 from "../Pages/Day2";
import Day3 from "../Pages/Day3";
import Day4 from "../Pages/Day4";
import Day5 from "../Pages/Day5";
import Day6 from "../Pages/Day6";
import Day7 from "../Pages/Day7";
import Day8 from "../Pages/Day8";

const Router = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/day1" element={<Day1/>}/>
    <Route path="/day2" element={<Day2/>}/>
    <Route path="/day3" element={<Day3/>}/>
    <Route path="/day4" element={<Day4/>}/>
    <Route path="/day5" element={<Day5/>}/>
    <Route path="/day6" element={<Day6/>}/>
    <Route path="/day7" element={<Day7/>}/>
    <Route path="/day8" element={<Day8/>}/>
  </Routes>
  </BrowserRouter>;
};

export default Router;
