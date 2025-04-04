import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Select, SelectItem } from '../components/ui/Select';
import DashboardLayout from '../components/layout/DashboardLayout';
import StudentDashboard from './dashboards/StudentDashboard';
import TeacherDashboard from './dashboards/TeacherDashboard';
import SpecialChildrenDashboard from './dashboards/SpecialChildrenDashboard';
import '../components/ui/styles.css';

const UserRoles = [
  { label: 'Student', value: 'student' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Special Children', value: 'special_children' },
  { label: 'Alumni', value: 'alumni' },
  { label: 'Parents', value: 'parents' },
  { label: 'Donor', value: 'donor' }
];

interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

// Mock authentication service
const AuthService = {
  users: [] as Array<{
    email: string;
    password: string;
    role: UserRole;
    id: string;
    name: string;
    createdAt: Date;
  }>,
  
  login: function(email: string, password: string, role: UserRole) {
    const user = this.users.find(
      u => u.email === email && u.password === password && u.role === role
    );
    return user ? { 
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    } : null;
  },
  
  register: function(email: string, password: string, role: UserRole) {
    const existingUser = this.users.find(u => u.email === email && u.role === role);
    if (existingUser) {
      throw new Error('User already exists with this email and role');
    }
    
    const newUser = { 
      email, 
      password, 
      role,
      id: Math.random().toString(),
      name: email.split('@')[0],
      createdAt: new Date()
    };
    this.users.push(newUser);
    return {
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
      name: newUser.name
    };
  },
  
  resetPassword: function(email: string) {
    const user = this.users.find(u => u.email === email);
    return user !== undefined;
  }
};

export type UserRole = 'student' | 'teacher' | 'special_children';

const AuthenticationPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const handleAuthentication = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        const loggedInUser = AuthService.login(email, password, selectedRole);
        if (loggedInUser) {
          setUser(loggedInUser);
        } else {
          setError('Invalid email, password, or role');
        }
      } else {
        if (!selectedRole) {
          setError('Please select a role');
          return;
        }

        const registeredUser = AuthService.register(email, password, selectedRole);
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
        {user.role === 'teacher' && <TeacherDashboard user={user} />}
        {user.role === 'special_children' && <SpecialChildrenDashboard user={user} />}
        {(user.role === 'student' || !user.role) && <StudentDashboard user={user} />}
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
                  value={selectedRole} 
                  onValueChange={(value) => setSelectedRole(value as UserRole)}
                >
                  {UserRoles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
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