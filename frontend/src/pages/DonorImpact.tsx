import React from 'react';
import './DonorImpact.css';

interface ImpactMetric {
  title: string;
  value: string;
  description: string;
  icon: string;
}

interface StudentStory {
  id: string;
  name: string;
  image: string;
  story: string;
  achievement: string;
}

const DonorImpact: React.FC = () => {
  const impactMetrics: ImpactMetric[] = [
    {
      title: 'Total Donations',
      value: '₹50,000',
      description: 'Total amount donated to support education',
      icon: '💰'
    },
    {
      title: 'Students Supported',
      value: '25',
      description: 'Number of students receiving support',
      icon: '👨‍🎓'
    },
    {
      title: 'Books Donated',
      value: '100',
      description: 'Educational books provided to students',
      icon: '📚'
    },
    {
      title: 'Devices Provided',
      value: '15',
      description: 'Electronic devices for digital learning',
      icon: '💻'
    }
  ];

  const studentStories: StudentStory[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      image: 'https://via.placeholder.com/150',
      story: 'Thanks to the scholarship support, I was able to pursue my dream of becoming a doctor. I am now in my final year of medical school.',
      achievement: 'Medical Student'
    },
    {
      id: '2',
      name: 'Rahul Patel',
      image: 'https://via.placeholder.com/150',
      story: 'The tablet provided through the donation helped me access online learning resources during the pandemic. I scored 95% in my board exams.',
      achievement: 'Engineering Student'
    },
    {
      id: '3',
      name: 'Ananya Singh',
      image: 'https://via.placeholder.com/150',
      story: 'The educational books donated helped me prepare for my competitive exams. I secured admission to a top university.',
      achievement: 'University Student'
    }
  ];

  return (
    <div className="donor-impact">
      <h1>Your Impact</h1>
      
      <div className="impact-metrics">
        {impactMetrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-title">{metric.title}</div>
            <div className="metric-description">{metric.description}</div>
          </div>
        ))}
      </div>

      <div className="impact-stories">
        <h2>Student Success Stories</h2>
        <div className="stories-grid">
          {studentStories.map(story => (
            <div key={story.id} className="story-card">
              <div className="story-image">
                <img src={story.image} alt={story.name} />
              </div>
              <div className="story-content">
                <h3>{story.name}</h3>
                <p className="story-text">{story.story}</p>
                <div className="story-achievement">{story.achievement}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="impact-cta">
        <h2>Continue Making a Difference</h2>
        <p>Your support is transforming lives. Consider making another donation to help more students achieve their dreams.</p>
        <button 
          className="donate-button"
          onClick={() => window.location.href = '/donor/donate'}
        >
          Make a Donation
        </button>
      </div>
    </div>
  );
};

export default DonorImpact; 