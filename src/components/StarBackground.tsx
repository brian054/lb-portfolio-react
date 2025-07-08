import { useEffect, useState } from "react";

// id, size, x, y, opacity, animDuration

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animDuration: number;
};

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  // todo: read docs for useEffect and useState
  useEffect(() => {
    generateStars();
  }, []);

  // generate stars based on browser window size
  const generateStars = () => {
    const numStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // size between 1-4 pixels
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // between 50% - 100% opacity
        animDuration: Math.random() * 4 + 2, // between 2 and 6 seconds (Formula: Math.random() * (max - min) + min)
      });
    }

    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
