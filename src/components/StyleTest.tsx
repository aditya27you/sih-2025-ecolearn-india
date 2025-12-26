import React from 'react';

const StyleTest: React.FC = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-heading text-primary">Style Verification</h1>
      <p className="font-sans">This is a test of the EcoLearn India theme.</p>
      
      <div className="flex gap-4">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-base-200 rounded-box">
          <h3 className="font-bold">Base 200 Card</h3>
        </div>
        <div className="p-4 bg-base-300 rounded-box">
          <h3 className="font-bold">Base 300 Card</h3>
        </div>
      </div>
    </div>
  );
};

export default StyleTest;
