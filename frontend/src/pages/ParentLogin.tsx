import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentLogin.css';

interface ParentLoginForm {
  parentName: string;
  childName: string;
  mobileNumber: string;
  address: string;
  childClass: string;
}

const ParentLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ParentLoginForm>({
    parentName: '',
    childName: '',
    mobileNumber: '',
    address: '',
    childClass: ''
  });

  const [errors, setErrors] = useState<Partial<ParentLoginForm>>({});

  const validateForm = () => {
    const newErrors: Partial<ParentLoginForm> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Child name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.childClass) {
      newErrors.childClass = 'Child\'s class is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof ParentLoginForm]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to authenticate
      // For now, we'll just redirect to the dashboard
      navigate('/parent/dashboard');
    }
  };

  return (
    <div className="parent-login">
      <div className="login-container">
        <div className="login-header">
          <h1>Parent Login</h1>
          <p>Access your child's educational journey</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="parentName">Parent Name</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              className={errors.parentName ? 'error' : ''}
              placeholder="Enter parent's full name"
            />
            {errors.parentName && <span className="error-message">{errors.parentName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="childName">Child Name</label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleInputChange}
              className={errors.childName ? 'error' : ''}
              placeholder="Enter child's full name"
            />
            {errors.childName && <span className="error-message">{errors.childName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={errors.mobileNumber ? 'error' : ''}
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
            />
            {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={errors.address ? 'error' : ''}
              placeholder="Enter your address"
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="childClass">Child's Class</label>
            <select
              id="childClass"
              name="childClass"
              value={formData.childClass}
              onChange={handleInputChange}
              className={errors.childClass ? 'error' : ''}
            >
              <option value="">Select Class</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Class {i + 1}
                </option>
              ))}
            </select>
            {errors.childClass && <span className="error-message">{errors.childClass}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentLogin; 