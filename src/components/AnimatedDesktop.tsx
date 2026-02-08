"use client";

import React, { useState, useEffect } from "react";
import { DesktopCard } from "./DesktopCard";
import { galleryImages } from "@/data/products";

interface CardPosition {
  id: number;
  x: number;
  y: number;
}

export const AnimatedDesktop = () => {
  const [cardPositions, setCardPositions] = useState<CardPosition[]>([]);

  useEffect(() => {
    const initialPositions: CardPosition[] = galleryImages.map((item) => ({
      id: item.id,
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth - 300 : 800),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight - 380 : 600) + 80,
    }));
    setCardPositions(initialPositions);
  }, []);

  return (
    <div
      className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative w-full h-full">
        {cardPositions.map((position, index) => (
          <div
            key={position.id}
            className="absolute transition-all duration-700 hover:z-40"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            }}
          >
            <DesktopCard
              id={position.id}
              title={galleryImages[index].title}
              category={galleryImages[index].category}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};
