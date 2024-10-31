import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../pages/axiosInstance';
import { useTranslation } from 'react-i18next';

const ProductsInfo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const { t, i18n } = useTranslation(); 


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/products/show`);
        console.log(data);
        setProducts(data.products || []); // Accessing the correct key
      } catch (err) {
        console.error("Error fetching images:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };


  const handleBuyNow = () => {
    if (selectedProduct) {
      // Navigate to the form with the product name as a query parameter
      navigate(`/buy?productName=${encodeURIComponent(selectedProduct.name)}`);
    }
  };
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={product.image.url} alt="fd" className="w-full h-40 object-cover" />
              <div className="p-4">
              {/* {product.title} */}
                <h3 className="text-lg text-black font-semibold"> {product.title[i18n.language]}</h3>
                <p className="text-gray-600 line-clamp-3">{product.content[i18n.language]}</p>
                <button
                  onClick={() => handleOpen(product)}
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Product Description */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white text-black rounded-lg shadow-lg w-11/12 sm:w-1/2 max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold">{selectedProduct?.title[i18n.language]}</h2>
            </div>
            <div className="p-4 overflow-y-auto max-h-[70vh]">
              <p>{selectedProduct?.content[i18n.language]}</p>
              <img src={selectedProduct?.image.url} alt={selectedProduct?.title} className="mt-4 w-full" />
            </div>
            <div className="p-4 border-t flex justify-between">
              <button
                onClick={handleClose}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
              >
                Close
              </button>
              <button
                 onClick={handleBuyNow}
                className="bg-green-700 text-white py-2 px-4 rounded  transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsInfo;
