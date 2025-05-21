
import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
      {icon}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};
