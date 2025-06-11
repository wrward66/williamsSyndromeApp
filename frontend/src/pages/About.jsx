import React from 'react';
import Layout from '../components/Layout';
import { Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Williams Syndrome</h1>
            <p className="text-xl text-gray-600">
              Understanding the unique characteristics and needs of children with Williams Syndrome
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Williams Syndrome?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Williams Syndrome is a rare genetic condition that affects approximately 1 in 10,000 people worldwide. 
              It is caused by the deletion of genetic material from chromosome 7 and results in a unique combination 
              of medical and developmental characteristics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Children with Williams Syndrome often have distinctive facial features, cardiovascular issues, 
              developmental delays, and a unique cognitive profile that includes relative strengths in language 
              and music alongside challenges in visuospatial processing and motor skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Characteristics</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Friendly, outgoing personality</li>
                <li>• Strong verbal and musical abilities</li>
                <li>• Challenges with fine and gross motor skills</li>
                <li>• Attention difficulties</li>
                <li>• Anxiety and fears</li>
                <li>• Cardiovascular issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <Award className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strengths & Abilities</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Excellent social communication skills</li>
                <li>• Strong auditory memory</li>
                <li>• Musical talent and rhythm</li>
                <li>• Empathy and emotional intelligence</li>
                <li>• Determination and persistence</li>
                <li>• Love of learning new things</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 mb-8">
            <Globe className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              This resource hub aims to provide comprehensive, evidence-based information and practical strategies 
              to support children with Williams Syndrome across all developmental stages. We believe every child 
              deserves access to resources that help them reach their full potential while celebrating their 
              unique strengths and abilities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Disclaimer</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
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
