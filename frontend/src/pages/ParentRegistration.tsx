import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentRegistration.css';

interface ParentData {
  parentName: string;
  childName: string;
  mobileNumber: string;
  address: string;
  childClass: string;
}

const ParentRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ParentData>({
    parentName: '',
    childName: '',
    mobileNumber: '',
    address: '',
    childClass: ''
  });

  const [errors, setErrors] = useState<Partial<ParentData>>({});

  const validateForm = () => {
    const newErrors: Partial<ParentData> = {};
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }
    
    if (!formData.childName.trim()) {
      newErrors.childName = 'Child name is required';
    }
    
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
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
    if (errors[name as keyof ParentData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Add API call to register parent
      navigate('/parent/dashboard');
    }
  };

  return (
    <div className="parent-registration">
      <div className="registration-container">
        <h1>Parent Registration</h1>
        <p className="subtitle">Join us to track and support your child's educational journey</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Parent Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              placeholder="Enter parent's full name"
              className={errors.parentName ? 'error' : ''}
            />
            {errors.parentName && <span className="error-message">{errors.parentName}</span>}
          </div>

          <div className="form-group">
            <label>Child Name</label>
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleInputChange}
              placeholder="Enter child's full name"
              className={errors.childName ? 'error' : ''}
            />
            {errors.childName && <span className="error-message">{errors.childName}</span>}
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter 10-digit mobile number"
              className={errors.mobileNumber ? 'error' : ''}
            />
            {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label>Child's Class</label>
            <select
              name="childClass"
              value={formData.childClass}
              onChange={handleInputChange}
              className={errors.childClass ? 'error' : ''}
            >
              <option value="">Select class</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>Class {i + 1}</option>
              ))}
            </select>
            {errors.childClass && <span className="error-message">{errors.childClass}</span>}
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default ParentRegistration; 