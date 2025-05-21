
import React from "react";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center mb-8">
      <div className="bg-violet-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
