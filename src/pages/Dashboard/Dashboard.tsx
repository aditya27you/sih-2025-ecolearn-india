import React from 'react';
import { Card } from '@/components/molecules/Card';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-heading mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Eco Points">
          <div className="text-4xl font-bold text-primary">120</div>
          <p className="text-sm text-gray-500">Total earned</p>
        </Card>
        <Card title="Active Challenge">
          <p>Plant a Tree Campaign</p>
          <div className="badge badge-warning mt-2">In Progress</div>
        </Card>
        <Card title="Modules">
          <div className="radial-progress text-secondary" style={{ "--value": 70 } as React.CSSProperties}>70%</div>
          <span className="ml-2">Complete</span>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
