import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DonationSelection.css';

interface DonationItem {
  type: string;
  title: string;
  description: string;
  icon: string;
  minAmount?: number;
  suggestedAmounts?: number[];
  guidelines?: string[];
}

const DonationDetails: React.FC = () => {
  const navigate = useNavigate();
  const { type } = useParams<{ type: string }>();
  const [amount, setAmount] = useState<string>('');
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [pickupDate, setPickupDate] = useState<string>('');
  const [pickupAddress, setPickupAddress] = useState<string>('');
  const [donationType, setDonationType] = useState<DonationItem | null>(null);

  const donationTypes: DonationItem[] = [
    {
      type: 'financial',
      title: 'Financial Support',
      description: 'Support students with financial aid for education',
      icon: '💰',
      minAmount: 1000,
      suggestedAmounts: [1000, 2000, 5000, 10000],
      guidelines: [
        'Donations are tax-deductible',
        'Monthly or one-time options available',
        '100% of funds go to student education'
      ]
    },
    {
      type: 'books',
      title: 'Books Donation',
      description: 'Donate educational books and study materials',
      icon: '📚',
      guidelines: [
        'Academic books in good condition',
        'School textbooks and reference materials',
        'Educational magazines and journals'
      ]
    },
    {
      type: 'electronics',
      title: 'Electronics',
      description: 'Donate devices for digital learning',
      icon: '💻',
      guidelines: [
        'Working laptops, tablets, or smartphones',
        'Educational software and tools',
        'Charging accessories included'
      ]
    },
    {
      type: 'academic',
      title: 'Academic Support',
      description: 'Volunteer for tutoring and mentoring',
      icon: '👨‍🏫',
      guidelines: [
        'Minimum 2 hours per week commitment',
        'Subject expertise required',
        'Online or in-person options'
      ]
    }
  ];

  useEffect(() => {
    const foundType = donationTypes.find(d => d.type === type);
    if (foundType) {
      setDonationType(foundType);
    } else {
      navigate('/donor/donate');
    }
  }, [type, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/donor/confirmation');
  };

  const renderFinancialForm = () => (
    <div className="donation-form financial-form">
      <div className="amount-selection">
        <h3>Select Amount</h3>
        <div className="suggested-amounts">
          {donationType?.suggestedAmounts?.map((suggestedAmount) => (
            <button
              key={suggestedAmount}
              type="button"
              className={`amount-button ${amount === suggestedAmount.toString() ? 'selected' : ''}`}
              onClick={() => setAmount(suggestedAmount.toString())}
            >
              ₹{suggestedAmount.toLocaleString()}
            </button>
          ))}
          <input
            type="number"
            placeholder="Other Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min={donationType?.minAmount}
            className="custom-amount"
          />
        </div>
      </div>

      <div className="donation-frequency">
        <h3>Donation Frequency</h3>
        <div className="frequency-options">
          <button
            type="button"
            className={`frequency-button ${!isRecurring ? 'selected' : ''}`}
            onClick={() => setIsRecurring(false)}
          >
            One Time
          </button>
          <button
            type="button"
            className={`frequency-button ${isRecurring ? 'selected' : ''}`}
            onClick={() => setIsRecurring(true)}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="payment-methods">
        <h3>Payment Method</h3>
        <div className="payment-options">
          <button type="button" className="payment-button">
            <span className="payment-icon">💳</span>
            Credit/Debit Card
          </button>
          <button type="button" className="payment-button">
            <span className="payment-icon">🏦</span>
            Net Banking
          </button>
          <button type="button" className="payment-button">
            <span className="payment-icon">📱</span>
            UPI
          </button>
        </div>
      </div>
    </div>
  );

  const renderItemDonationForm = () => (
    <div className="donation-form item-form">
      <div className="pickup-details">
        <h3>Pickup Details</h3>
        <div className="form-group">
          <label htmlFor="pickupDate">Preferred Pickup Date</label>
          <input
            type="date"
            id="pickupDate"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pickupAddress">Pickup Address</label>
          <textarea
            id="pickupAddress"
            value={pickupAddress}
            onChange={(e) => setPickupAddress(e.target.value)}
            placeholder="Enter complete address with landmark"
            required
          />
        </div>
      </div>

      <div className="item-guidelines">
        <h3>Guidelines for {donationType?.title}</h3>
        <ul className="guidelines-list">
          {donationType?.guidelines?.map((guideline, index) => (
            <li key={index}>{guideline}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (!donationType) return null;

  return (
    <div className="donation-selection">
      <button 
        onClick={() => navigate('/donor/donate')} 
        className="back-button"
      >
        ← Back to Donation Types
      </button>
      
      <h1>{donationType.title}</h1>
      <p className="subtitle">{donationType.description}</p>

      <form onSubmit={handleSubmit} className="donation-details">
        {donationType.type === 'financial' ? renderFinancialForm() : renderItemDonationForm()}
        
        <button type="submit" className="submit-button">
          {donationType.type === 'financial' ? 'Proceed to Payment' : 'Schedule Pickup'}
        </button>
      </form>
    </div>
  );
};

export default DonationDetails; 