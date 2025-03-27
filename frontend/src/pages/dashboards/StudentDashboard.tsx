import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const StudentDashboard: React.FC = () => {
  return (
    <div className="dashboard-content">
      {/* Scholarship Applications */}
      <Card className="dashboard-card">
        <h3 className="card-title">Scholarship Applications</h3>
        <p className="card-description">
          View and manage your scholarship applications
        </p>
        <Button className="mt-4">View Applications</Button>
      </Card>

      {/* Educational Resources */}
      <Card className="dashboard-card">
        <h3 className="card-title">Educational Resources</h3>
        <p className="card-description">
          Access study materials and learning resources
        </p>
        <Button className="mt-4">Browse Resources</Button>
      </Card>

      {/* Financial Aid Status */}
      <Card className="dashboard-card">
        <h3 className="card-title">Financial Aid Status</h3>
        <p className="card-description">
          Check your financial aid and scholarship status
        </p>
        <Button className="mt-4">View Status</Button>
      </Card>

      {/* Mentorship Program */}
      <Card className="dashboard-card">
        <h3 className="card-title">Mentorship Program</h3>
        <p className="card-description">
          Connect with mentors and get guidance
        </p>
        <Button className="mt-4">Find Mentor</Button>
      </Card>

      {/* Upcoming Events */}
      <Card className="dashboard-card">
        <h3 className="card-title">Upcoming Events</h3>
        <p className="card-description">
          View workshops, webinars, and other events
        </p>
        <Button className="mt-4">View Events</Button>
      </Card>

      {/* Support Requests */}
      <Card className="dashboard-card">
        <h3 className="card-title">Support Requests</h3>
        <p className="card-description">
          Submit and track your support requests
        </p>
        <Button className="mt-4">New Request</Button>
      </Card>
    </div>
  );
};

export default StudentDashboard; 