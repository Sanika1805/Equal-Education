import React, { useEffect, useState } from 'react';
import './DonationConfirmation.css';

const DonationConfirmation: React.FC = () => {
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  const [donorName, setDonorName] = useState('John Doe'); // Replace with actual donor name
  const [donationType, setDonationType] = useState('Financial Support'); // Replace with actual donation type
  const [donationDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    // Simulate certificate generation
    const timer = setTimeout(() => {
      setCertificateGenerated(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCertificate = () => {
    // TODO: Implement certificate download functionality
    console.log('Downloading certificate...');
  };

  const handleReturnHome = () => {
    window.location.href = '/donor/home';
  };

  return (
    <div className="donation-confirmation">
      <div className="confirmation-content">
        <div className="success-animation">
          {certificateGenerated ? (
            <div className="checkmark">✓</div>
          ) : (
            <div className="loading-spinner"></div>
          )}
        </div>

        <h1>Thank You for Your Donation!</h1>
        <p className="thank-you-message">
          Your generous contribution will help make education accessible to those in need.
        </p>

        <div className="donation-details">
          <h2>Donation Summary</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Donor Name:</span>
              <span className="value">{donorName}</span>
            </div>
            <div className="detail-item">
              <span className="label">Donation Type:</span>
              <span className="value">{donationType}</span>
            </div>
            <div className="detail-item">
              <span className="label">Date:</span>
              <span className="value">{donationDate}</span>
            </div>
          </div>
        </div>

        <div className="certificate-section">
          <h2>Donation Certificate</h2>
          {certificateGenerated ? (
            <>
              <p>Your donation certificate has been generated successfully!</p>
              <button 
                className="download-button"
                onClick={handleDownloadCertificate}
              >
                Download Certificate
              </button>
            </>
          ) : (
            <p>Generating your donation certificate...</p>
          )}
        </div>

        <div className="next-steps">
          <h2>What's Next?</h2>
          <ul>
            <li>You will receive a confirmation email shortly</li>
            <li>Track your donation impact in your donor dashboard</li>
            <li>Share your contribution to inspire others</li>
          </ul>
        </div>

        <div className="social-share">
          <h3>Share Your Contribution</h3>
          <div className="share-buttons">
            <button className="share-button facebook">
              Share on Facebook
            </button>
            <button className="share-button twitter">
              Share on Twitter
            </button>
          </div>
        </div>

        <button 
          className="return-home"
          onClick={handleReturnHome}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default DonationConfirmation; 