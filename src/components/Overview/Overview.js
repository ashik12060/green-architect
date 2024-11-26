import React from 'react';
import Slider from 'react-slick';

function Overview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button className="custom-prev-arrow absolute top-0 left-0 bg-gray-600 text-white p-2 rounded-full">
        &lt;
      </button>
    ),
    nextArrow: (
      <button className="custom-next-arrow absolute top-0 right-0 bg-gray-600 text-white p-2 rounded-full">
        &gt;
      </button>
    ),
  };

  return (
    <div className="container mx-auto p-4 relative">
      <h1 className="text-3xl font-bold text-center mb-8">OVERVIEW</h1>
      <Slider {...settings}>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 14v5l-5 2 5 2v5l-2 5-2-5v-5l-5-2 5-2v-5l-2-5-2 5v-5l5-2 5 2v5l2-5 2 5z" />
          </svg>
          <p className="mt-4 font-medium text-gray-700">Verandah/Balcony</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.25 12.75h15.5" />
            <path d="M4.25 10.5h15.5" />
            <path d="M6 18h12" />
            <path d="M12 21v-9" />
            <path d="M9 21v-9" />
          </svg>
          <p className="mt-4 font-medium text-gray-700">Bedrooms</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l9 9-9 9-9-9 9-9z" />
          </svg>
          <p className="mt-4 font-medium text-gray-700">Living Room</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
          <p className="mt-4 font-medium text-gray-700">Kitchen</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20" />
          </svg>
          <p className="mt-4 font-medium text-gray-700">Bathroom</p>
        </div>
      </Slider>
    </div>
  );
}

export default Overview;
