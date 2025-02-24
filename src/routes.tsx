import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RaceCalendar from "./pages/RaceCalendar";
import Info from "./pages/Info";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/calendar" element={<RaceCalendar />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
