

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Headers/Header';
import Footer from '../../Shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkedAlt,
  faRoad,
  faBuilding,
  faDraftingCompass,
  faBolt,
  faCogs,
  faFaucet,
  faLightbulb,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';

const Design = () => {
  const designItems = [
    { path: '/design/master-planing', label: 'Master Planning', icon: faMapMarkedAlt },
    { path: '/design/infrastructure', label: 'Infrastructure', icon: faRoad },
    { path: '/design/architecture', label: 'Architecture', icon: faBuilding },
    { path: '/design/structure', label: 'Structure', icon: faDraftingCompass },
    { path: '/design/electrical', label: 'Electrical', icon: faBolt },
    { path: '/design/mechanical', label: 'Mechanical', icon: faCogs },
    { path: '/design/plumbing', label: 'Plumbing', icon: faFaucet },
    { path: '/design/lighting', label: 'Lighting', icon: faLightbulb },
    { path: '/design/leed-consultancy', label: 'LEED Consultancy', icon: faLeaf },
    { path: '/design/model-making', label: 'Model Making', icon: faLeaf },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mt-20 mb-56 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {designItems.map((item, index) => (
            <div
              key={index}
              className="rounded-md shadow-md bg-green-700 px-2 py-6 text-center hover:bg-green-700 transition-colors duration-300"
            >
              <Link
                to={item.path}
                className="text-white font-semibold hover:text-green-200 flex flex-col items-center"
              >
                <FontAwesomeIcon icon={item.icon} size="2x" className="mb-2" />
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Design;
