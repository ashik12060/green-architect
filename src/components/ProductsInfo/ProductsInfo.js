import React, { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useTranslation } from "react-i18next";
import axiosInstance from "../../pages/axiosInstance";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ItemType = "product";

const ProductsInfo = ({ isAdmin }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const { t } = useTranslation("Home");
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/products/show`
        );

        const allProducts = data.products || [];
        allProducts.sort((a, b) => a.order - b.order);

        setProducts(allProducts);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const moveCard = (fromIndex, toIndex) => {
    const updatedProducts = [...products];
    const [movedItem] = updatedProducts.splice(fromIndex, 1);
    updatedProducts.splice(toIndex, 0, movedItem);
    setProducts(updatedProducts);
  };

  const saveNewOrder = async () => {
    const reorderedIds = products.map((product) => product._id);

    try {
      await axiosInstance.put(
        `${process.env.REACT_APP_API_URL}/api/products/reorder`,
        { reorderedProducts: reorderedIds }
      );

      console.log("Product order saved successfully!");
    } catch (err) {
      console.error("Failed to save new order", err);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const DraggableCard = ({ index, product }) => {
    const [, drag] = useDrag({
      type: ItemType,
      item: { index },
      canDrag: isAdmin, 
    });

    const [, drop] = useDrop({
      accept: ItemType,
      hover: (item) => {
        if (item.index !== index && isAdmin) {
          moveCard(item.index, index);
          item.index = index;
        }
      },
      drop: isAdmin ? saveNewOrder : undefined, 
    });

    return (
      <motion.div
        ref={(node) => isAdmin && drag(drop(node))} 
        className="relative w-full border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={product.image?.url || "/path/to/placeholder.jpg"}
          alt={product.title[i18n.language] || "Product Image"}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-black truncate">
            {product.title[i18n.language]}
          </h3>
          <button
            onClick={() => openModal(product)}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            {t("viewProduct")}
          </button>
        </div>
      </motion.div>
    );
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center gap-6 px-4 sm:px-8 lg:px-32 mt-10 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {products.map((product, index) => (
          <DraggableCard key={product._id} index={index} product={product} />
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6  justify-center  relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-500 hover:text-gray-800 transition"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image?.url || "/path/to/placeholder.jpg"}
              alt={selectedProduct.title[i18n.language] || "Product Image"}
              className="w-full h-96 object-cover rounded"
            />

            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold mt-4">
                  {selectedProduct.title[i18n.language]}
                </h2>
                <p className="text-gray-700 mt-2">
                  {selectedProduct.content[i18n.language]}
                </p>
              </div>
              <div className="mt-8 ">
              
                <Link to='/contact' className="bg-green-700 p-2 font-bold text-white rounded" >Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsInfo;