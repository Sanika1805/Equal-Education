import React from 'react';
import './DonationHistory.css';

interface Donation {
  id: string;
  date: string;
  type: string;
  amount: string;
  status: 'completed' | 'pending' | 'cancelled';
  description: string;
}

const DonationHistory: React.FC = () => {
  // Mock data for donations
  const donations: Donation[] = [
    {
      id: '1',
      date: '2024-03-15',
      type: 'Financial Support',
      amount: '₹10,000',
      status: 'completed',
      description: 'Monthly scholarship for student'
    },
    {
      id: '2',
      date: '2024-02-20',
      type: 'Books',
      amount: '50 books',
      status: 'completed',
      description: 'Educational books for library'
    },
    {
      id: '3',
      date: '2024-01-10',
      type: 'Electronics',
      amount: '5 tablets',
      status: 'completed',
      description: 'Tablets for digital learning'
    }
  ];

  const getStatusColor = (status: Donation['status']) => {
    switch (status) {
      case 'completed':
        return '#4caf50';
      case 'pending':
        return '#ff9800';
      case 'cancelled':
        return '#f44336';
      default:
        return '#666';
    }
  };

  return (
    <div className="donation-history">
      <h1>Donation History</h1>
      
      <div className="donation-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search donations..."
            className="search-input"
          />
        </div>
        <div className="filter-options">
          <select className="filter-select">
            <option value="all">All Types</option>
            <option value="financial">Financial Support</option>
            <option value="books">Books</option>
            <option value="electronics">Electronics</option>
            <option value="academic">Academic Support</option>
          </select>
          <select className="filter-select">
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="donations-list">
        {donations.map(donation => (
          <div key={donation.id} className="donation-card">
            <div className="donation-header">
              <div className="donation-type">{donation.type}</div>
              <div 
                className="donation-status"
                style={{ backgroundColor: getStatusColor(donation.status) }}
              >
                {donation.status}
              </div>
            </div>
            <div className="donation-details">
              <div className="donation-amount">{donation.amount}</div>
              <div className="donation-date">{donation.date}</div>
            </div>
            <div className="donation-description">{donation.description}</div>
            <div className="donation-actions">
              <button className="action-button">View Details</button>
              <button className="action-button">Download Receipt</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationHistory; 