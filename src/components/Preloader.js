import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container">
      {/* Add the vertical line */}
      <div className="vertical-line"></div>
      <h1 className="percentage">
        <span className="number">{percentage}</span>%
      </h1>
    </div>
  );
};

export default Preloader;



