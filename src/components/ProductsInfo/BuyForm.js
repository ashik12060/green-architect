import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Shared/Headers/Header';
import Footer from '../Shared/Footer/Footer';

const BuyForm = () => {
  const query = new URLSearchParams(useLocation().search);
  const productName = query.get('productName') || '';

  return (
    <div className='bg-gray-100'>
    <Header />
    <div className="container mx-auto p-4 mb-10 ">
      <h2 className="text-2xl font-bold mb-6 text-center"><span className='border-b-4 border-green-700'>Purchase <span className='text-green-700 font-bold'>{productName}</span></span></h2>
      <form className="bg-white p-4 rounded shadow-xl">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="mt-1 p-2 w-full border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="mt-1 p-2 w-full border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input type="number" className="mt-1 p-2 w-full border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input type="text" value={productName} readOnly className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea 
            className="mt-1 p-2 w-full border rounded h-24" 
            placeholder="Write your message here..."
          />
        </div>
        <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition">
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default BuyForm;
