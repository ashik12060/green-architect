import React from "react";
import "./Ourclients.css";
import { motion } from 'framer-motion';


import img1 from "../../assets/partners logo/army.png";
import img2 from "../../assets/partners logo/RFL.jpg";
import img3 from "../../assets/partners logo/abul khair grp.jpg";
import img4 from "../../assets/partners logo/aci.jpg";
import img5 from "../../assets/partners logo/akij.jpg";
import img6 from "../../assets/partners logo/bar council.jpg";
import img7 from "../../assets/partners logo/bashundhara.jpg";
import img8 from "../../assets/partners logo/berger.png";
import img9 from "../../assets/partners logo/beximco.png";
import img10 from "../../assets/partners logo/bgb.png";
import img11 from "../../assets/partners logo/citi bank.png";
import img12 from "../../assets/partners logo/grameen bank.png";
import img13 from "../../assets/partners logo/holcim.png";
import img14 from "../../assets/partners logo/marine academy.png";
import img15 from "../../assets/partners logo/meta english.jpg";
import img16 from "../../assets/partners logo/mrs industry.png";
import img17 from "../../assets/partners logo/navy.png";
import img18 from "../../assets/partners logo/partext.png";
import img19 from "../../assets/partners logo/police.jpg";
import img20 from "../../assets/partners logo/square grp.png";
import img21 from "../../assets/partners logo/us bangla.png";
import img22 from "../../assets/partners logo/sky bath.jpeg";
import img23 from "../../assets/partners logo/pratinidhi.jpeg";
import img24 from "../../assets/partners logo/inbuild.png";
import img25 from "../../assets/partners logo/jcx.png";
import { useTranslation } from "react-i18next";

const logos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img22,
  img23,
  img24,
  img25,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  
];
const headerVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const OurClients = () => {
  const { t } = useTranslation('ServiceMain');
  return (
    <div className="our-clients-container">
       <motion.h2
      className="text-center lg:text-2xl text-xl font-bold text-gray-800 mb-8"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={headerVariants}
    >
     
      {t('partners')}
    </motion.h2>
      <div className="our-clients-scroll">
        {/* Render logos twice for seamless scrolling */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="rounded-lg shadow-lg w-20"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;

