import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Label
} from "recharts";
import "../styles/MilestoneDetailPage.css";

export default function MilestoneDetailPage() {
  const { milestoneId } = useParams();
  const [milestone, setMilestone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [childAge, setChildAge] = useState("");
  const [childPercentile, setChildPercentile] = useState(null);

  useEffect(() => {
    const fetchMilestone = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/api/milestones/${milestoneId}/`);
        
        // Transform and sort percentile data for the chart
        const chartData = response.data.percentiles
          .map(p => ({
            percentile: p.percentile,
            age: p.age_months
          }))
          .sort((a, b) => a.percentile - b.percentile);

        setMilestone({
          ...response.data,
          chartData
        });
        
        setError(null);
      } catch (err) {
        console.error("Error fetching milestone:", err);
        setError("Failed to load milestone details");
        setMilestone(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMilestone();
  }, [milestoneId]);

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    if (!milestone?.chartData || !childAge) return;
    
    const ageInMonths = parseFloat(childAge);
    const data = milestone.chartData;
    
    // Find the closest data point
    const closest = data.reduce((prev, curr) => 
      Math.abs(curr.age - ageInMonths) < Math.abs(prev.age - ageInMonths) ? curr : prev
    );
    
    setChildPercentile(closest.percentile);
  };

  const getImageUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http') || url.startsWith('https')) return url;
    return `http://127.0.0.1:8000${url}`;
  };

  if (loading) return <p className="loading">Loading milestone...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!milestone) return <p className="not-found">Milestone not found</p>;

  const imageUrl = getImageUrl(milestone.image);

  return (
    <Layout>
      <div className="milestone-detail-container">
        
        {/* Left: Details Box */}
        <div className="milestone-detail">
          <h2 className="milestone-title">
            {milestone.milestone_display || milestone.name}
          </h2>
          
          {milestone.age_range && (
            <p className="age-range">
              <strong>Typical Age Range:</strong> {milestone.age_range}
            </p>
          )}
          
          <p className="milestone-description">{milestone.description}</p>
          
          {/* Percentile Chart Section */}
          <div className="chart-section">
            <h3>Percentile Distribution</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={milestone.chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="percentile"
                    label={{ value: 'Percentile', position: 'insideBottomRight', offset: -5 }}
                  />
                  <YAxis 
                    label={{ value: 'Age (months)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value} months`, "Age"]}
                    labelFormatter={(percentile) => `${percentile}th percentile`}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="age" 
                    name="Age (months)"
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }}
                    dot={{ r: 4 }}
                  />
                  {childAge && childPercentile && (
                    <ReferenceLine 
                      x={childPercentile}
                      stroke="red"
                      label={{
                        value: `Your child (${childAge} months)`, 
                        position: 'top',
                        fill: 'red'
                      }}
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Child Age Input Section */}
          <div className="input-section">
            <h3>Find Your Child's Percentile</h3>
            <form onSubmit={handleAgeSubmit}>
              <div className="input-group">
                <label htmlFor="child-age">
                  Enter your child's age when they achieved this milestone (in months):
                </label>
                <input
                  id="child-age"
                  type="number"
                  step="0.5"
                  min="0"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  placeholder="e.g., 12.5"
                />
              </div>
              <button type="submit" className="submit-button">
                Calculate Percentile
              </button>
            </form>
            
            {childPercentile && (
              <div className="result">
                <p>
                  <strong>Result:</strong> At <strong>{childAge} months</strong>, your child is at the{" "}
                  <strong>{childPercentile}th percentile</strong> for this milestone.
                </p>
                <p className="interpretation">
                  {childPercentile >= 75
                    ? "This is later than most children."
                    : childPercentile <= 25
                    ? "This is earlier than most children."
                    : "This is within the typical range."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Image Box */}
        {imageUrl && (
          <div className="milestone-image">
            <img 
              src={imageUrl} 
              alt={`Illustration of ${milestone.milestone_display || milestone.name}`} 
            />
          </div>
        )}
      </div>
    </Layout>

  );
}