import { useEffect, useState } from "react";
import axios from "axios";

export default function MilestoneDropdown({ ageGroupId, onSelect }) {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    if (!ageGroupId) return;
    axios.get(`http://127.0.0.1:8000/api/age-groups/${ageGroupId}/`)
      .then(res => setMilestones(res.data.milestones))
      .catch(err => console.error(err));
  }, [ageGroupId]);

  return (
    <select onChange={(e) => onSelect(e.target.value)} disabled={!ageGroupId}>
      <option value="">Select milestone</option>
      {milestones.map(ms => (
        <option key={ms.id} value={ms.id}>
          {ms.milestone_display}
        </option>
      ))}
    </select>
  );
}