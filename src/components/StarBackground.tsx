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

type Meteor = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: string;
  animDuration: number;
};

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  // todo: read docs for useEffect and useState
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: (Math.random() * 15).toString(),
        animDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
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

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
