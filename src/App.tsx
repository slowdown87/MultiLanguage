import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Learn from "./pages/Learn";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router basename="/MultiLanguage">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:id" element={<Learn />} />
        <Route path="/learn/:id/:moduleId" element={<Learn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
