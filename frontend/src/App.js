import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MilestoneDetailPage from "./pages/MilestoneDetailPage";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/age/:ageId/milestone/:milestoneId" element={<MilestoneDetailPage />} />
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  );
}