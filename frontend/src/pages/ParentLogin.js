import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentLogin.css';

const ParentLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    mobileNumber: '',
    address: '',
    childClass: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent Name is required';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Child Name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.childClass) {
      newErrors.childClass = 'Child\'s Class is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to authenticate/register the parent
      // For now, we'll just navigate to the dashboard
      navigate('/parent/dashboard');
    }
  };

  return (
    <div className="parent-login">
      <div className="login-container">
        <h1>Parent Login</h1>
        <p className="subtitle">Enter your details to access your child's educational journey</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="parentName">Parent Name</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className={errors.parentName ? 'error' : ''}
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
              onChange={handleChange}
              className={errors.childName ? 'error' : ''}
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
              onChange={handleChange}
              className={errors.mobileNumber ? 'error' : ''}
              maxLength="10"
            />
            {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'error' : ''}
              rows="3"
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="childClass">Child's Class</label>
            <select
              id="childClass"
              name="childClass"
              value={formData.childClass}
              onChange={handleChange}
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