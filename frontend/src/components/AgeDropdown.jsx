import { useState, useEffect } from "react";
import axios from "axios";

export default function AgeDropdown({ onSelect }) {
  const [ageGroups, setAgeGroups] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/age-groups/")
      .then(res => setAgeGroups(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select age group</option>
      {ageGroups.map(group => (
        <option key={group.id} value={group.id}>{group.label}</option>
      ))}
    </select>
  );
}