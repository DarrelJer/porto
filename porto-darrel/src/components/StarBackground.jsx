import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    generateStars();
    generateClouds();

    const handleResize = () => {
      generateStars();
      generateClouds();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateClouds = () => {
    const numberOfClouds = 8;
    const newClouds = [];

    for (let i = 0; i < numberOfClouds; i++) {
      newClouds.push({
        id: i,
        size: Math.random() * 100 + 100,
        x: Math.random() * 100,
        y: Math.random() * 50,
        duration: Math.random() * 30 + 30,
        delay: Math.random() * 20,
        opacity: Math.random() * 0.1 + 0.05,
      });
    }

    setClouds(newClouds);
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
            animationDuration: star.animationDuration + "s",
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud animate-cloud"
          style={{
            width: cloud.size + "px",
            height: cloud.size * 0.6 + "px",
            left: cloud.x + "%",
            top: cloud.y + "%",
            opacity: cloud.opacity,
            animationDuration: cloud.duration + "s",
            animationDelay: cloud.delay + "s",
            position: "absolute",
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(12px)",
          }}
        />
      ))}
    </div>
  );
};
