import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Select, SelectItem } from '../components/ui/Select';
import DashboardLayout from '../components/layout/DashboardLayout';
import StudentDashboard from './dashboards/StudentDashboard';
import TeacherDashboard from './dashboards/TeacherDashboard';
import '../components/ui/styles.css';

const UserRoles = [
  'Student',
  'Teacher',
  'Alumni',
  'Special Children',
  'Parents',
  'Donor'
];

interface User {
  id: string;
  email: string;
  role: string;
  name: string;
}

// Mock authentication service
const AuthService = {
  users: [] as Array<{
    email: string;
    password: string;
    role: string;
    id: string;
    name: string;
    createdAt: Date;
  }>,
  
  login: function(email: string, password: string) {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );
    return user ? { ...user, id: Math.random().toString() } : null;
  },
  
  register: function(email: string, password: string, role: string) {
    const existingUser = this.users.find(u => u.email === email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    const newUser = { 
      email, 
      password, 
      role,
      id: Math.random().toString(),
      name: email.split('@')[0], // Using email prefix as default name
      createdAt: new Date()
    };
    this.users.push(newUser);
    return newUser;
  },
  
  resetPassword: function(email: string) {
    const user = this.users.find(u => u.email === email);
    return user !== undefined;
  }
};

const AuthenticationPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const handleAuthentication = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        const loggedInUser = AuthService.login(email, password);
        if (loggedInUser) {
          setUser(loggedInUser);
        } else {
          setError('Invalid email or password');
        }
      } else {
        if (!role) {
          setError('Please select a role');
          return;
        }

        const registeredUser = AuthService.register(email, password, role);
        setUser(registeredUser);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handlePasswordReset = async () => {
    try {
      const resetSuccessful = AuthService.resetPassword(email);
      if (resetSuccessful) {
        alert('Password reset email sent!');
      } else {
        setError('No user found with this email');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <DashboardLayout userRole={user.role} onLogout={handleLogout}>
        {user.role === 'Student' && <StudentDashboard />}
        {user.role === 'Teacher' && <TeacherDashboard user={user} />}
      </DashboardLayout>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-content">
        <Card className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Equal Education</h1>
            <p className="auth-subtitle">
              {isLogin ? 'Welcome back!' : 'Create your account'}
            </p>
          </div>

          <form onSubmit={handleAuthentication} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <Input 
                id="email"
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input 
                id="password"
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="role">Select Role</label>
                <Select 
                  value={role} 
                  onValueChange={setRole}
                >
                  {UserRoles.map((userRole) => (
                    <SelectItem key={userRole} value={userRole}>
                      {userRole}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <Button type="submit" className="auth-button">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>

            {isLogin && (
              <Button 
                type="button" 
                variant="link" 
                onClick={handlePasswordReset}
                className="forgot-password"
              >
                Forgot your password?
              </Button>
            )}
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsLogin(!isLogin)}
              className="switch-auth-mode"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AuthenticationPage; 