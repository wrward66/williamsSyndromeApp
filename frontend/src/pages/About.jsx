import React from 'react';
import Layout from '../components/Layout';
import { Heart, Users, Award, Globe } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <Heart className="about-icon" />
            <h1>About Williams Syndrome</h1>
            <p className="about-subtitle">
              Understanding the unique characteristics and needs of children with Williams Syndrome
            </p>
          </div>

          <div className="about-card">
            <h2>What is Williams Syndrome?</h2>
            <p>
              Williams Syndrome is a rare genetic condition that affects approximately 1 in 10,000 people worldwide. 
              It is caused by the deletion of genetic material from chromosome 7 and results in a unique combination 
              of medical and developmental characteristics.
            </p>
            <p>
              Children with Williams Syndrome often have distinctive facial features, cardiovascular issues, 
              developmental delays, and a unique cognitive profile that includes relative strengths in language 
              and music alongside challenges in visuospatial processing and motor skills.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <Users className="about-icon-sm" />
              <h3>Common Characteristics</h3>
              <ul className="about-list">
                <li>• Friendly, outgoing personality</li>
                <li>• Strong verbal and musical abilities</li>
                <li>• Challenges with fine and gross motor skills</li>
                <li>• Attention difficulties</li>
                <li>• Anxiety and fears</li>
                <li>• Cardiovascular issues</li>
              </ul>
            </div>

            <div className="about-card">
              <Award className="about-icon-sm accent" />
              <h3>Strengths & Abilities</h3>
              <ul className="about-list">
                <li>• Excellent social communication skills</li>
                <li>• Strong auditory memory</li>
                <li>• Musical talent and rhythm</li>
                <li>• Empathy and emotional intelligence</li>
                <li>• Determination and persistence</li>
                <li>• Love of learning new things</li>
              </ul>
            </div>
          </div>

          <div className="about-blue-card">
            <Globe className="about-icon-sm" />
            <h3>Our Mission</h3>
            <p>
              This resource hub aims to provide comprehensive, evidence-based information and practical strategies 
              to support children with Williams Syndrome across all developmental stages. We believe every child 
              deserves access to resources that help them reach their full potential while celebrating their 
              unique strengths and abilities.
            </p>
          </div>

          <div className="about-card disclaimer">
            <h3>Important Disclaimer</h3>
            <p>
              The information provided on this website is for educational purposes only and should not replace 
              professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare 
              professionals, therapists, and specialists who are familiar with Williams Syndrome for personalized 
              guidance and treatment plans.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;