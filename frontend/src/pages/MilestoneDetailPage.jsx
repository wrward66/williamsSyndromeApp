import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

export default function MilestoneDetailPage() {
  const { ageId, milestoneId } = useParams();
  const [milestone, setMilestone] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/milestones/`)
      .then(res => {
        const found = res.data.find(m => m.id === parseInt(milestoneId));
        setMilestone(found || null);
      })
      .catch(err => console.error(err));
  }, [milestoneId]);

  if (!milestone) return <p>Loading milestone...</p>;

  return (
    <Layout>
    <div>
      <h2>{milestone.milestone_display}</h2>
      <p><strong>Age Group ID:</strong> {ageId}</p>
      <p>{milestone.description}</p>
    </div>
    </Layout>
  );
}
