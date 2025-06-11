import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgeDropdown from "../components/AgeDropdown";
import MilestoneDropdown from "../components/MilestoneDropdown";
import Layout from "../components/Layout";

export default function Home() {
  const [ageGroupId, setAgeGroupId] = useState("");
  const [milestoneId, setMilestoneId] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (ageGroupId && milestoneId) {
      navigate(`/age/${ageGroupId}/milestone/${milestoneId}`);
    }
  };

  return (
    <Layout>
    <div>
      <h1>WS Milestone Info</h1>
      <AgeDropdown onSelect={(id) => {
        setAgeGroupId(id);
        setMilestoneId("");
      }} />
      <MilestoneDropdown ageGroupId={ageGroupId} onSelect={setMilestoneId} />
      <button disabled={!ageGroupId || !milestoneId} onClick={handleNavigate}>
        View Details
      </button>
    </div>
    </Layout>
  );
}
