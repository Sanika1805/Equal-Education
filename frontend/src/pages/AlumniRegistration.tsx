import React, { useState } from 'react';
import './AlumniRegistration.css';

interface AlumniData {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  mobileNumber: string;
  email: string;
  qualification: string;
  profession: string;
  passOutYear: string;
}

const AlumniRegistration: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [alumniData, setAlumniData] = useState<AlumniData>({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    mobileNumber: '',
    email: '',
    qualification: '',
    profession: '',
    passOutYear: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAlumniData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save alumni data
    window.location.href = '/alumni/dashboard';
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="alumni-auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>{isLogin ? 'Alumni Login' : 'Alumni Registration'}</h2>
          <p>Join our alumni network to make a difference</p>
        </div>

        <div className="social-login">
          <button className="google-btn" onClick={() => handleSocialLogin('Google')}>
            <span className="icon">🔍</span>
            Continue with Google
          </button>
          <button className="facebook-btn" onClick={() => handleSocialLogin('Facebook')}>
            <span className="icon">📘</span>
            Continue with Facebook
          </button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={alumniData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Gender</label>
                  <select name="gender" value={alumniData.gender} onChange={handleInputChange} required>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={alumniData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  value={alumniData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={alumniData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={alumniData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    value={alumniData.qualification}
                    onChange={handleInputChange}
                    placeholder="Enter your qualification"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Profession</label>
                  <input
                    type="text"
                    name="profession"
                    value={alumniData.profession}
                    onChange={handleInputChange}
                    placeholder="Enter your profession"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Pass-Out Year</label>
                <input
                  type="number"
                  name="passOutYear"
                  value={alumniData.passOutYear}
                  onChange={handleInputChange}
                  placeholder="Enter your pass-out year"
                  min="1900"
                  max={new Date().getFullYear()}
                  required
                />
              </div>
            </>
          )}

          {isLogin && (
            <>
              <div className="form-group">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={alumniData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>OTP</label>
                <div className="otp-input">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    maxLength={6}
                  />
                  <button type="button" className="send-otp-btn">Send OTP</button>
                </div>
              </div>
            </>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              className="toggle-auth-btn"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Register here' : 'Login here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlumniRegistration; 