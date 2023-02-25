import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Home from "../pages/Home";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={<Course />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
