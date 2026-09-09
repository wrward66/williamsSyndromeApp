import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MilestoneDetailPage from "./pages/MilestoneDetailPage";
import About from "./pages/About";
import Milestones from "./pages/Milestones";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/milestones" element={<Milestones />} />
      <Route path="/milestone/:id" element={<MilestoneDetailPage />} />
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  );
}
