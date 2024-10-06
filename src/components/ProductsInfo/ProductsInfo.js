// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProductsInfo = () => {

//     const navigate = useNavigate();
//     const products = [
//     {
//       id: 1,
//       name: 'Product 1',
//       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAPZfrna3OaTDoriwFW5j2OeQueHmpbAl8DZJVGbTYLax0jhOfKD-1qikHVRKB1xfcvA&usqp=CAU',
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAPZfrna3OaTDoriwFW5j2OeQueHmpbAl8DZJVGbTYLax0jhOfKD-1qikHVRKB1xfcvA&usqp=CAU',
//     },
//     {
//       id: 4,
//       name: 'Product 4',
//       description: 'This is a description for Product 4.',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAPZfrna3OaTDoriwFW5j2OeQueHmpbAl8DZJVGbTYLax0jhOfKD-1qikHVRKB1xfcvA&usqp=CAU',
//     },
//   ];

//   const [open, setOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleOpen = (product) => {
//     setSelectedProduct(product);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedProduct(null);
//   };


//   const handleBuyNow = () => {
//     if (selectedProduct) {
//       // Navigate to the form with the product name as a query parameter
//       navigate(`/buy?productName=${encodeURIComponent(selectedProduct.name)}`);
//     }
//   };
  
//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//               <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <p className="text-gray-600 line-clamp-3">{product.description}</p>
//                 <button
//                   onClick={() => handleOpen(product)}
//                   className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
//                 >
//                   View Product
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Product Description */}
//       {open && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 max-h-[90vh] overflow-hidden">
//             <div className="p-4 border-b">
//               <h2 className="text-xl font-semibold">{selectedProduct?.name}</h2>
//             </div>
//             <div className="p-4 overflow-y-auto max-h-[70vh]">
//               <p>{selectedProduct?.description}</p>
//               <img src={selectedProduct?.image} alt={selectedProduct?.name} className="mt-4 w-full" />
//             </div>
//             <div className="p-4 border-t flex justify-between">
//               <button
//                 onClick={handleClose}
//                 className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
//               >
//                 Close
//               </button>
//               <button
//                  onClick={handleBuyNow}
//                 className="bg-green-700 text-white py-2 px-4 rounded  transition"
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductsInfo;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../pages/axiosInstance';

const ProductsInfo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);


  //   const products = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAPZfrna3OaTDoriwFW5j2OeQueHmpbAl8DZJVGbTYLax0jhOfKD-1qikHVRKB1xfcvA&usqp=CAU',
  //   },
  //   {
  //     id: 3,
  //     name: 'Product 3',
  //     description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAPZfrna3OaTDoriwFW5j2OeQueHmpbAl8DZJVGbTYLax0jhOfKD-1qikHVRKB1xfcvA&usqp=CAU',
  //   },
  //   {
  //     id: 4,
  //     name: 'Product 4',
  //     description: 'This is a description for Product 4.',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAPZfrna3OaTDoriwFW5j2OeQueHmpbAl8DZJVGbTYLax0jhOfKD-1qikHVRKB1xfcvA&usqp=CAU',
  //   },
  // ];


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
              <img src={product.image.url} alt={product.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg text-black font-semibold">{product.title}</h3>
                <p className="text-gray-600 line-clamp-3">{product.content}</p>
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
              <h2 className="text-xl font-semibold">{selectedProduct?.title}</h2>
            </div>
            <div className="p-4 overflow-y-auto max-h-[70vh]">
              <p>{selectedProduct?.content}</p>
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
