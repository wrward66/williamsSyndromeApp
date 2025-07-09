import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MilestoneDropdown from "../components/MilestoneDropdown";
import Layout from "../components/Layout";
import "../styles/Home.css";

export default function Home() {
  const [milestoneId, setMilestoneId] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (milestoneId) {
      navigate(`/milestone/${milestoneId}`);
    }
  };

  return (
    <Layout>
      <div className="home-container">
        <h1 className="home-title">Understanding Williams Syndrome</h1>
        <h3 className="home-description">
          A journey through developmental milestones and achievements
        </h3>

        {/* Input Box */}
        <div className="content-card">
          <div className="card-title">Explore Developmental Milestone</div>
          <div className="dropdowns-container">
            <MilestoneDropdown
              onSelect={setMilestoneId}
              selectedValue={milestoneId}
            />
          </div>
          <div className="button-container">
            <button
              className="view-button"
              disabled={!milestoneId}
              onClick={handleNavigate}
            >
              View Details
            </button>
          </div>
        </div>

        {/* New White Info Box */}
        <div className="info-card">
          <h2>Welcome to the Williams Syndrome Motor Milestones Information Hub</h2>
          <p>
            We are proud to present the first dedicated webpage designed specifically to support parents and carers of children with Williams syndrome (WS) in understanding the typical timing of key gross motor developmental milestones. Here, you will find information on six major milestones:
          </p>
          <ul>
            <li>Sitting without support</li>
            <li>Standing with assistance</li>
            <li>Hands-and-knees crawling</li>
            <li>Walking with assistance</li>
            <li>Standing without support</li>
            <li>Walking without support</li>
          </ul>
          <p>
            These are the same six motor milestones for which the World Health Organization (WHO, 2006) provides developmental windows for typically developing children. On this page, we offer similar milestone guidance tailored for children with Williams syndrome.
          </p>
          <p>
            The information presented here is based on data collected through a combination of prospective and retrospective questionnaires completed by an international sample of XX parents of children with WS. These insights offer valuable reference points to help families better understand the expected variability and timing of motor development in WS.
          </p>
          <p>
            Please note that the data provided on this page are drawn from a single study. While they offer a meaningful starting point, future research may yield slightly different estimates as our understanding of WS continues to grow.
          </p>
          <p>
            We hope this resource empowers you with knowledge, fosters informed expectations, and supports you in celebrating the unique developmental journeys of children with Williams syndrome.
          </p>
        </div>

        <hr className="section-divider" />

        {/* Footer */}
        <div className="footer-info">
          <div className="footer-left">
            <h3>Contact Information</h3>
            <p>Email: example@email.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>

          <div className="footer-right">
            <h3>Research Sources</h3>
            <p>This information is sourced from the University of Surrey</p>
            <img src="./media/uniofSurrey.jpg" alt="Research source" className="footer-image" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
