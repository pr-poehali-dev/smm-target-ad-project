
import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100">
      <div className="text-5xl font-bold text-violet-600 mb-3">{value}</div>
      <p className="text-gray-700 font-medium">{label}</p>
    </div>
  );
};
