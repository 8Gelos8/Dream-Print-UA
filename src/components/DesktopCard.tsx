"use client";

import React, { useState } from "react";

interface DesktopCardProps {
  id: number;
  title: string;
  category: string;
  image?: string;
  onExpand?: () => void;
}

export const DesktopCard = ({ id, title, category, image, onExpand }: DesktopCardProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
    onExpand?.();
  };

  return (
    <div
      className={`absolute transition-all duration-500 cursor-pointer transform ${
        isZoomed ? "z-50 w-96 h-80 shadow-2xl" : "hover:shadow-lg hover:scale-105"
      }`}
      onClick={handleClick}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl">
        <div className="relative w-full h-48 bg-gradient-to-br from-purple-200 to-indigo-200 flex items-center justify-center text-6xl">
          
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800 truncate">{title}</h3>
          <p className="text-sm text-purple-600 font-semibold">{category}</p>
          {isZoomed && <p className="text-xs text-gray-600 mt-2">Натисніть щоб закрити</p>}
        </div>
      </div>
    </div>
  );
};
