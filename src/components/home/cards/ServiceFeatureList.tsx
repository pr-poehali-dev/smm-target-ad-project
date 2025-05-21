
import React from "react";

interface ServiceFeatureListProps {
  features: string[];
}

export const ServiceFeatureList: React.FC<ServiceFeatureListProps> = ({ features }) => {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className="mr-2 h-5 w-5 text-violet-400">✓</div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};
