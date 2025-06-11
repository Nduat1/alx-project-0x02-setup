import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm mx-auto border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
    </div>
  );
};

export default Card;
