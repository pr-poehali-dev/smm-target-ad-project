
import React from "react";

interface TestimonialCardProps {
  initial: string;
  name: string;
  company: string;
  text: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ initial, name, company, text }) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
          {initial}
        </div>
        <div className="ml-4">
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
      <p className="text-gray-700">{text}</p>
    </>
  );
};
