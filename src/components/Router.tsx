import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day1 from "../Pages/Day1";
import Home from "../Pages/Home";
import Day2 from "../Pages/Day2";

const Router = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/day1" element={<Day1/>}/>
    <Route path="/day2" element={<Day2/>}/>
  </Routes>
  </BrowserRouter>;
};

export default Router;
