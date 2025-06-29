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

  // Virgo di pojok kiri atas (10-40%)
//   const virgoConstellation = [
//   { x: 10, y: 12 },  // Vindemiatrix
//   { x: 18, y: 18 },  // Heze
//   { x: 22, y: 25 },  // Zaniah
//   { x: 28, y: 30 },  // Porrima
//   { x: 36, y: 35 },  // Auva
//   { x: 44, y: 40 },  // Spica (paling terang)
//   { x: 52, y: 48 },  // Syrma
// ];



  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
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
      

      {/* <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polyline
          points={virgoConstellation.map(p => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.2"
        />
      </svg> */}

    </div>
  );
};
