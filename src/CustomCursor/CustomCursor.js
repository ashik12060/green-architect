
import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';  // Import the home icon from React Icons
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isDotCentered, setIsDotCentered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setIsDotCentered(false); // Reset the dot position when moving the cursor
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Lagging effect for the ring
  useEffect(() => {
    let animationFrame;

    const followCursor = () => {
      setRingPosition((prevPosition) => {
        const nextX = prevPosition.x + (cursorPosition.x - prevPosition.x) * 0.5;
        const nextY = prevPosition.y + (cursorPosition.y - prevPosition.y) * 0.5;

        // Calculate the distance between the ring and the cursor
        const distance = Math.sqrt(
          Math.pow(cursorPosition.x - nextX, 2) + Math.pow(cursorPosition.y - nextY, 2)
        );

        // When the ring is very close to the cursor, set the dot at the center
        if (distance < 2) {
          setIsDotCentered(true);
        }

        return { x: nextX, y: nextY };
      });

      animationFrame = requestAnimationFrame(followCursor);
    };

    followCursor(); // Start following the cursor

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [cursorPosition]);

  return (
    <div>
      {/* Home icon positioned outside the dot at the top-left corner */}
      <div
        className="cursor-dot"
        style={{
          left: `${isDotCentered ? ringPosition.x : cursorPosition.x}px`,
          top: `${isDotCentered ? ringPosition.y : cursorPosition.y}px`,
        }}
      >
        {/* Home icon positioned at the top-left corner of the dot */}
        <AiOutlineHome
          size={30}  // Icon size
          color="green"  // Icon color
          style={{
            position: 'absolute',
            left: '-30px',  // Offset to the left (this places the icon to the left of the dot)
            top: '-30px',   // Offset upwards (this places the icon above the dot)
          }}
        />
      </div>

      {/* Ring lags behind the cursor */}
      <div
        className="cursor-ring"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
