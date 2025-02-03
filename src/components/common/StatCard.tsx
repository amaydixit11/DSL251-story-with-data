// src/components/common/StatCard.tsx
import React from 'react';

interface StatCardProps {
  icon: React.ReactElement;
  title: string;
  value: string | number;
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center">
        <div className="p-2 bg-indigo-100 rounded-lg">
          {React.cloneElement(icon, { className: "w-6 h-6 text-indigo-600" })}
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-lg font-semibold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default StatCard;