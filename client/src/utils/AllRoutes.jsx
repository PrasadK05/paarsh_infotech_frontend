import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Home from "../pages/Home";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={<Course />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/admin-login" element={<AdminLogin />}></Route>
      <Route path="/admin" element={<Admin />}></Route>

    </Routes>
  );
}
