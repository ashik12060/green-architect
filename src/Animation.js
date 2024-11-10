import React from 'react';
import { motion } from 'framer-motion';

const Animation = ({ isVisible }) => {
  const blocks = Array.from({ length: 30 }, (_, index) => index);

  return (
    <div className="w-full h-screen relative">
      {isVisible &&
        blocks.map((block, index) => (
          <motion.div
            key={block}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }} // Blink effect (fade in and out)
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 2,
              delay: index * 0.2, // Stagger delay for each block
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}vh`,  // Randomize position vertically
              left: `${Math.random() * 100}vw`, // Randomize position horizontally
              width: '50px',
              height: '50px',
              backgroundColor: 'rgba(255, 0, 0, 0.7)', // Block color
              borderRadius: '8px',
            }}
          />
        ))}
    </div>
  );
};

export default Animation;
