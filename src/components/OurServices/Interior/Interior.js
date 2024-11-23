import React from 'react';
import { Link } from 'react-router-dom';

const Interior = () => {
  const sections = [
    { title: 'Residential', link: '/interior/residential' },
    { title: 'Industrial', link: '/interior/industrial' },
    { title: 'Retail', link: '/interior/retail' },
    { title: 'Office', link: '/interior/office' },
    { title: 'Furniture', link: '/interior/furniture' },
    { title: 'Sculpture', link: '/interior/sculpture' },
    { title: 'Lighting', link: '/interior/lighting-interior' },
    { title: 'Accessories', link: '/interior/accessories' },
  ];

  return (
    <>
      {/* <Header /> */}
      <div className="container mx-auto px-4 pb-32 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-md shadow-lg px-4 py-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(to right, #2e7d32, #66bb6a)',
                color: 'white',
              }}
            >
              <Link to={section.link} className="text-lg font-semibold hover:text-green-200">
                {section.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Interior;
