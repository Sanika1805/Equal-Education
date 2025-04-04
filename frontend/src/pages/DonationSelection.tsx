import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const DonationSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [pickupDate, setPickupDate] = useState<string>('');
  const [pickupAddress, setPickupAddress] = useState<string>('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    taxReceipt: 'yes'
  });

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

  const handleCardClick = (type: string) => {
    setSelectedType(type);
    navigate(`/donor/donation-details/${type}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/donor/confirmation');
  };

  const renderFinancialForm = () => (
    <div className="financial-form">
      {/* Step 1: Amount Selection */}
      <div className="amount-selection">
        <h3 className="section-title">
          <span className="step-number">1</span>
          Select Donation Amount
        </h3>
        <div className="suggested-amounts">
          {(donationTypes.find(d => d.type === 'financial')?.suggestedAmounts || []).map((amount) => (
            <button
              key={amount}
              className={`amount-button ${selectedAmount === amount ? 'selected' : ''}`}
              onClick={() => setSelectedAmount(amount)}
            >
              ₹{amount.toLocaleString()}
            </button>
          ))}
        </div>
        <div className="custom-amount-container">
          <label>Or enter a custom amount:</label>
          <input
            type="number"
            className="custom-amount"
            placeholder="Enter amount in ₹"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
          />
        </div>
      </div>

      {/* Step 2: Donation Frequency */}
      <div className="donation-frequency">
        <h3 className="section-title">
          <span className="step-number">2</span>
          Choose Donation Frequency
        </h3>
        <div className="frequency-options">
          <button
            className={`frequency-button ${donationFrequency === 'one-time' ? 'selected' : ''}`}
            onClick={() => setDonationFrequency('one-time')}
          >
            <span className="icon">🔄</span>
            One-time Donation
          </button>
          <button
            className={`frequency-button ${donationFrequency === 'monthly' ? 'selected' : ''}`}
            onClick={() => setDonationFrequency('monthly')}
          >
            <span className="icon">📅</span>
            Monthly Donation
          </button>
        </div>
      </div>

      {/* Step 3: Payment Method */}
      <div className="payment-methods">
        <h3 className="section-title">
          <span className="step-number">3</span>
          Select Payment Method
        </h3>
        <div className="payment-options">
          <button
            className={`payment-button ${paymentMethod === 'upi' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('upi')}
          >
            <span className="icon">📱</span>
            UPI
          </button>
          <button
            className={`payment-button ${paymentMethod === 'card' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            <span className="icon">💳</span>
            Card
          </button>
          <button
            className={`payment-button ${paymentMethod === 'netbanking' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('netbanking')}
          >
            <span className="icon">🏦</span>
            Net Banking
          </button>
        </div>
      </div>

      {/* Step 4: Donor Information */}
      <div className="donor-info">
        <h3 className="section-title">
          <span className="step-number">4</span>
          Your Information
        </h3>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={donorInfo.name}
            onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={donorInfo.email}
            onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={donorInfo.phone}
            onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Step 5: Additional Details */}
      <div className="additional-details">
        <h3 className="section-title">
          <span className="step-number">5</span>
          Additional Details
        </h3>
        <div className="form-group">
          <label>Message (Optional)</label>
          <textarea
            value={donorInfo.message}
            onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
            placeholder="Add a message with your donation"
          />
        </div>
        <div className="form-group">
          <label>Tax Receipt Required</label>
          <select
            value={donorInfo.taxReceipt}
            onChange={(e) => setDonorInfo({ ...donorInfo, taxReceipt: e.target.value })}
          >
            <option value="yes">Yes, please send tax receipt</option>
            <option value="no">No, thank you</option>
          </select>
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
        <h3>Guidelines for {selectedType === 'books' ? 'Book' : selectedType === 'electronics' ? 'Electronics' : 'Academic'} Donation</h3>
        <ul className="guidelines-list">
          {donationTypes.find(d => d.type === selectedType)?.guidelines?.map((guideline, index) => (
            <li key={index}>{guideline}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="donation-selection">
      <h1>Make a Donation</h1>
      <p className="subtitle">Choose how you would like to contribute to education</p>

      <div className="donation-types">
        {donationTypes.map((donationType) => (
          <div
            key={donationType.type}
            className={`donation-type-card ${selectedType === donationType.type ? 'selected' : ''}`}
            onClick={() => handleCardClick(donationType.type)}
          >
            <div className="card-content">
              <div className="type-icon">{donationType.icon}</div>
              <h3>{donationType.title}</h3>
              <p>{donationType.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedType && (
        <form onSubmit={handleSubmit} className="donation-details">
          {selectedType === 'financial' ? renderFinancialForm() : renderItemDonationForm()}
          
          <button type="submit" className="submit-button">
            {selectedType === 'financial' ? 'Proceed to Payment' : 'Schedule Pickup'}
          </button>
        </form>
      )}
    </div>
  );
};

export default DonationSelection; 