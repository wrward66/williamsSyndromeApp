import { useEffect, useState } from "react";
import axios from "axios";

export default function MilestoneDetails({ milestoneId }) {
  const [milestone, setMilestone] = useState(null);

  useEffect(() => {
    if (!milestoneId) return;
    axios.get("http://127.0.0.1:8000/api/milestones/")
      .then(res => {
        const found = res.data.find(m => m.id === parseInt(milestoneId));
        setMilestone(found || null);
      })
      .catch(err => console.error(err));
  }, [milestoneId]);

  if (!milestone) return null;

  return (
    <div>
      <h3>{milestone.milestone_display}</h3>
      <p>{milestone.description}</p>
    </div>
  );
}