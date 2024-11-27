import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import { useDrag, useDrop } from "react-dnd";
import axiosInstance from "../pages/axiosInstance";

const ItemType = "PRODUCT";


const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);
  const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [rnds, setRnd] = useState([]);
  const [members, setMembers] = useState([]);
  const [carousels, setCarousels] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeTab, setActiveTab] = useState("posts");


  // product start
  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/products/show`
        );

        // Ensure products are sorted by order
        const allProducts = data.products || [];
        allProducts.sort((a, b) => a.order - b.order);

        setProducts(allProducts);
      } catch (err) {
        // setError("Failed to load products. Please try again later.");
      } finally {
        // setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to move a product within the array
  const moveProduct = (fromIndex, toIndex) => {
    const updatedProducts = [...products];
    const [movedProduct] = updatedProducts.splice(fromIndex, 1);
    updatedProducts.splice(toIndex, 0, movedProduct);
    setProducts(updatedProducts);
  };

  // Save the new product order to the backend
  const saveNewOrder = async () => {
    const reorderedIds = products.map((product) => product._id);

    try {
      await axiosInstance.put(

        `${process.env.REACT_APP_API_URL}/api/products/reorder`,
        // console.log(`${process.env.REACT_APP_API_URL}/api/products/reorder`)

        { reorderedProducts: reorderedIds }
      );
      console.log(`${process.env.REACT_APP_API_URL}/api/products/reorder`);

      toast.success("Product order updated successfully!");
    } catch (err) {
      console.error("Failed to save new order:", err);
      toast.error("Failed to save new order.");
    }
  };

  // Draggable Product Row Component
  const DraggableRow = ({ index, product }) => {
    const [, drag] = useDrag({
      type: ItemType,
      item: { index },
    });

    const [, drop] = useDrop({
      accept: ItemType,
      hover: (item) => {
        if (item.index !== index) {
          moveProduct(item.index, index);
          item.index = index;
        }
      },
      drop: saveNewOrder, // Save order when dropped
    });
    
    

    return (
      <motion.tr
        ref={(node) => drag(drop(node))}
        className="border-b border-gray-200 hover:bg-gray-100"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <td className="py-3 px-6 text-left">{product._id}</td>
        <td className="py-3 px-6 text-left">{product.title?.en || "No Title"}</td>

        <td className="py-3 px-6 text-left">
          <img src={product.image.url} alt="Product" className="w-20 h-20" />
        </td>
        <td className="py-3 px-6 text-left">
          {product.postedBy?.name || "Unknown"}
        </td>
        <td className="py-3 px-6 text-left">
          {new Date(product.createdAt).toLocaleString()}
        </td>
        <td className="py-3 px-6 text-left">
          <div className="flex items-center space-x-2">
            <Link to={`/admin/product/edit/${product._id}`} className="text-blue-500">
              Edit
            </Link>
            <button
              className="text-red-500"
              onClick={() => console.log("Delete product:", product._id)}
            >
              Delete
            </button>
          </div>
        </td>
      </motion.tr>
    );
  };

  // if (loading) return <div className="text-center py-10">Loading...</div>;
  // if (error)
  //   return <div className="text-center py-10 text-red-500">{error}</div>;



  // end



  // Display posts
  const displayPost = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/posts/show`
      );
      // Extract only English fields for admin panel display
      const englishPosts = data.posts.map((post) => ({
        ...post,
        title: post.title.en, // Use the English translation directly
        content: post.content.en,
      }));

      setPosts(englishPosts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayPost();
  }, []);

  // Display video
  const displayVideo = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/videos/show`
      );
      setVideos(data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayVideo();
  }, []);

  // Display products
  const displayProduct = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/products/show`
      );
      const englishProducts = data.products.map((product) => ({
        ...product,
        title: product.title.en, // Use the English translation directly
        content: product.content.en,
      }));
      setProducts(englishProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayProduct();
  }, []);

  // Display project
  const displayProject = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/projects/show`
      );
      // Extract only English fields for admin panel display
      const englishProjects = data.projects.map((project) => ({
        ...project,
        title: project.title.en, // Use the English translation directly
        content: project.content.en,
      }));

      setProjects(englishProjects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayProject();
  }, []);

  // display research and development
  const displayRnd = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/rnds/show`
      );
      const englishRnd = data.rnds.map((rnd) => ({
        ...rnd,
        title: rnd.title.en, // Use the English translation directly
        content: rnd.content.en,
      }));
      setRnd(englishRnd);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayRnd();
  }, []);

 
  // Fetch members from the backend
  const displayMembers = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/members/show`
      );

      // Extract only English fields for admin panel display
      const englishMembers = data.members.map((member) => ({
        ...member,
        title: member.title.en, // Use the English translation directly
        designation: member.designation.en,
      }));

      setMembers(englishMembers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayMembers();
  }, []);

  
  // Display carousel
  const displayCarousel = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/carousels/show`
      );

      // Check if carousel items have English fields before mapping
      const englishCarousels = data.carousels.map((carousel) => ({
        ...carousel,
        title: carousel.title?.en || "N/A", // Default to "N/A" if English title is missing
      }));

      setCarousels(englishCarousels);
    } catch (error) {
      console.error("Error displaying carousel:", error);
    }
  };

  useEffect(() => {
    displayCarousel();
  }, []);

  // Delete rnd by ID
  const deleteRndById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/rnd/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("Item deleted");
          displayRnd();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  // Delete video by ID
  const deleteVideoById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/video/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("Item deleted");
          displayVideo();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  // Delete post by ID
  const deletePostById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/post/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("Post deleted");
          displayPost();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  // Delete product by ID
  const deleteProductById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/product/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("Product deleted");
          displayProduct();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  // Delete Project by ID
  const deleteProjectById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/project/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("project deleted");
          displayProject();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  // Delete member by ID
  const deleteMemberById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/member/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("Member deleted");
          displayMembers(); // Refresh member list after deletion
        }
      } catch (error) {
        console.error("Error deleting member:", error);
        toast.error("Failed to delete member");
      }
    }
  };

  // ne
  // Delete carousel by ID
  const deleteCarouselById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this carousel item?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/carousel/${id}`
        );

        if (result?.data?.success === true) {
          toast.success("Carousel item deleted");
          displayCarousel(); // Refresh carousel list after deletion
        }
      } catch (error) {
        console.error("Error deleting carousel item:", error);
        toast.error("Failed to delete carousel item");
      }
    }
  };

  // blog posts
  const PostColumns = [
    {
      field: "_id",
      headerName: "Post ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Post title",
      width: 150,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },
    {
      field: "likes",
      headerName: "Likes",
      width: 150,
      renderCell: (params) => params.row.likes.length,
    },
    {
      field: "comments",
      headerName: "Comments",
      width: 150,
      renderCell: (params) => params.row.comments.length,
    },
    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      renderCell: (params) => params.row.postedBy?.name || "Unknown", // Safely access name
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <div className="flex justify-between">
          <Link to={`/admin/post/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deletePostById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];

  // products column
  const ProductColumns = [
    {
      field: "_id",
      headerName: "Product ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Product title",
      width: 150,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },

    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      renderCell: (params) => params.row.postedBy?.name || "Unknown", // Safely access name
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <div className="flex justify-between">
          <Link to={`/admin/product/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteProductById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];

  const ProjectColumns = [
    {
      field: "_id",
      headerName: "Project ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Project title",
      width: 150,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        const imageUrl = Array.isArray(params.row.image) && params.row.image.length > 0
          ? params.row.image[0].url // Use the first image if it's an array
          : params.row.image?.url;   // Use single image if it's an object
  
        return (
          <img
            width="40%"
            src={imageUrl || "/path/to/placeholder.jpg"} // Fallback if no image
            alt="img"
          />
        );
      },
    },
    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      renderCell: (params) => params.row.postedBy?.name || "Unknown", // Safely access name
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <div className="flex justify-between">
          <Link to={`/admin/project/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteProjectById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];
  

  // video column
  const VideoColumns = [
    {
      field: "_id",
      headerName: "Video ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Video title",
      width: 150,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },

    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      renderCell: (params) => params.row.postedBy?.name || "Unknown", // Safely access name
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <div className="flex justify-between">
          <Link to={`/admin/video/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteVideoById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];

  // Research and Development columns
  const RndColumns = [
    {
      field: "_id",
      headerName: "Research ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Rnd title",
      width: 150,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },
    {
      field: "likes",
      headerName: "Likes",
      width: 150,
      renderCell: (params) => params.row.likes.length,
    },
    {
      field: "comments",
      headerName: "Comments",
      width: 150,
      renderCell: (params) => params.row.comments.length,
    },
    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      renderCell: (params) => params.row.postedBy?.name || "Unknown", // Safely access name
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <div className="flex justify-between">
          <Link to={`/admin/rnd/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteRndById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];


  // Define member columns
  const MembersColumns = [
    {
      field: "_id",
      headerName: "Member ID",
      width: 150,
    },
    {
      field: "title",
      headerName: "Member Title",
      width: 150,
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 150,
    },
    {
      field: "image",
      headerName: "Image",
      width: 12,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },
    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      renderCell: (params) => params.row.postedBy?.name || "Unknown",
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <div className="flex justify-between">
          <Link to={`/admin/member/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteMemberById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];

  // Carousel columns
  const CarouselColumns = [
    {
      field: "_id",
      headerName: "Carousel ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Carousel title",
      width: 150,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img width="40%" src={params.row.image.url} alt="img" />
      ),
    },

    {
      field: "postedBy",
      headerName: "Posted by",
      width: 150,
      renderCell: (params) => params.row.postedBy?.name || "Unknown", // Safely access name
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <div className="flex justify-between">
          <Link to={`/admin/carousel/edit/${value.row._id}`}>
            <IconButton aria-label="edit">
              <EditIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            onClick={(e) => deleteCarouselById(e, value.row._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];

  const tabs = [
    { name: "Posts", value: "posts" },
    { name: "Products", value: "products" },
    { name: "Projects", value: "projects" },
    { name: "Videos", value: "videos" },
    { name: "Research & Development", value: "rnd" },
    { name: "Members", value: "members" },
    { name: "Carousel Images", value: "carousel" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return (
          <div>
                       
            <div className="overflow-x-auto">
              {/* Replace with your posts table here */}
              <div>
                <h4 className="text-black text-4xl pb-3">Blog Posts</h4>
                <div className="pb-2 flex justify-end">
                  <Link to="/admin/post/create">
                    <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                      <AddIcon className="mr-2" />
                      Add posts
                    </button>
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        {PostColumns.map((column) => (
                          <th
                            key={column.field}
                            className="py-3 px-6 text-left"
                          >
                            {column.headerName}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      {posts.length > 0 ? (
                        posts.map((post) => (
                          <tr
                            key={post._id}
                            className="border-b border-gray-200 hover:bg-gray-100"
                          >
                            {PostColumns.map((column) => (
                              <td
                                key={column.field}
                                className="py-3 px-6 text-left"
                              >
                                {column.renderCell
                                  ? column.renderCell({ row: post })
                                  : post[column.field]}
                              </td>
                            ))}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={PostColumns.length}
                            className="text-center py-4"
                          >
                            No Post found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <p>Your Posts Table Here</p>
            </div>
          </div>
        );
      case "products":
        return (

          <div className="px-4 py-6">
      <h4 className="text-black text-4xl pb-3">Products</h4>
      <div className="pb-4 flex justify-end">
        <Link to="/admin/product/create">
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            Add Product
          </button>
        </Link>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Product ID</th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Posted By</th>
            <th className="py-3 px-6 text-left">Created At</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <DraggableRow key={product._id} index={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>



          // <div>
                       
          //   <div className="overflow-x-auto">
          //     {/* Replace with your posts table here */}
          //     <div>
          //       <h4 className="text-black text-4xl pb-3">Products</h4>
          //       <div className="pb-2 flex justify-end">
          //         <Link to="/admin/product/create">
          //           <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
          //             <AddIcon className="mr-2" />
          //             Add Product
          //           </button>
          //         </Link>
          //       </div>
          //       <div className="overflow-x-auto">
          //         <table className="min-w-full bg-white">
          //           <thead>
          //             <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          //               {ProductColumns.map((column) => (
          //                 <th
          //                   key={column.field}
          //                   className="py-3 px-6 text-left"
          //                 >
          //                   {column.headerName}
          //                 </th>
          //               ))}
          //             </tr>
          //           </thead>
          //           <tbody className="text-gray-600 text-sm font-light">
          //             {products.length > 0 ? (
          //               products.map((product) => (
          //                 <tr
          //                   key={product._id}
          //                   className="border-b border-gray-200 hover:bg-gray-100"
          //                 >
          //                   {ProductColumns.map((column) => (
          //                     <td
          //                       key={column.field}
          //                       className="py-3 px-6 text-left"
          //                     >
          //                       {column.renderCell
          //                         ? column.renderCell({ row: product })
          //                         : product[column.field]}
          //                     </td>
          //                   ))}
          //                 </tr>
          //               ))
          //             ) : (
          //               <tr>
          //                 <td
          //                   colSpan={PostColumns.length}
          //                   className="text-center py-4"
          //                 >
          //                   No product found.
          //                 </td>
          //               </tr>
          //             )}
          //           </tbody>
          //         </table>
          //       </div>
          //     </div>
          //     <p>Your product Table Here</p>
          //   </div>
          // </div>
        );

    
        
      case "projects":

        return (
          <div>
            
            <div className="overflow-x-auto">
              <div>
                <h4 className="text-black text-4xl pb-3">Project</h4>
                <div className="pb-2 flex justify-end">
                  <Link to="/admin/project/create">
                    <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                      <AddIcon className="mr-2" />
                      Add Project
                    </button>
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        {ProjectColumns.map((column) => (
                          <th
                            key={column.field}
                            className="py-3 px-6 text-left"
                          >
                            {column.headerName}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      {projects.length > 0 ? (
                        projects.map((project) => (
                          <tr
                            key={project._id}
                            className="border-b border-gray-200 hover:bg-gray-100"
                          >
                            {ProjectColumns.map((column) => (
                              <td
                                key={column.field}
                                className="py-3 px-6 text-left"
                              >
                                {column.renderCell
                                  ? column.renderCell({ row: project })
                                  : project[column.field]}
                              </td>
                            ))}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={ProjectColumns.length}
                            className="text-center py-4"
                          >
                            No Projects found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>


              <p>Your Projects Table Here</p>
            </div>
          </div>
        );


      case "videos":
        return (
          <div>
            <h4 className="text-black text-4xl pb-3">Videos</h4>
            <div className="pb-2 flex justify-end">
              <Link to="/admin/video/create">
                <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                  <AddIcon className="mr-2" />
                  Create Video
                </button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              {/* Replace with your videos table here */}
              <p>Your Videos Table Here</p>
            </div>
          </div>
        );
      case "rnd":
        return (
          <div>
            <h4 className="text-black text-4xl pb-3">
              Research and Development
            </h4>
            <div className="pb-2 flex justify-end">
              <Link to="/admin/rnd/create">
                <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                  <AddIcon className="mr-2" />
                  Create R&D
                </button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              {/* Replace with your R&D table here */}

              <div>
                <h4 className="text-black text-4xl pb-3">Products</h4>
                <div className="pb-2 flex justify-end">
                  <Link to="/admin/rnd/create">
                    <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                      <AddIcon className="mr-2" />
                      Add Product
                    </button>
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        {RndColumns.map((column) => (
                          <th
                            key={column.field}
                            className="py-3 px-6 text-left"
                          >
                            {column.headerName}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      {rnds.length > 0 ? (
                        rnds.map((rnd) => (
                          <tr
                            key={rnd._id}
                            className="border-b border-gray-200 hover:bg-gray-100"
                          >
                            {RndColumns.map((column) => (
                              <td
                                key={column.field}
                                className="py-3 px-6 text-left"
                              >
                                {column.renderCell
                                  ? column.renderCell({ row: rnd })
                                  : rnd[column.field]}
                              </td>
                            ))}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={PostColumns.length}
                            className="text-center py-4"
                          >
                            No product found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>


              <p>Your R&D Table Here</p>
            </div>
          </div>
        );
      
      case "members":
        return (
          <div>
            <h4 className="text-black text-4xl pb-3">Members</h4>
            <div className="pb-2 flex justify-end">
              <Link to="/admin/member/create">
                <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                  <AddIcon className="mr-2" />
                  Add Member
                </button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    {MembersColumns.map((column) => (
                      <th key={column.field} className="py-3 px-6 text-left">
                        {column.headerName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {members.length > 0 ? (
                    members.map((member) => (
                      <tr key={member._id} className="border-b border-gray-200 hover:bg-gray-100">
                        {MembersColumns.map((column) => (
                          <td key={column.field} className="py-3 px-6 text-left">
                            {column.renderCell
                              ? column.renderCell({ row: member })
                              : member[column.field]}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={MembersColumns.length} className="text-center py-4">
                        No members found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      
     
      case "carousel":
        return (
          <div>
            <h4 className="text-black text-4xl pb-3">Carousel Images</h4>
            <div className="pb-2 flex justify-end">
              <Link to="/admin/carousel/create">
                <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                  <AddIcon className="mr-2" />
                  Post Image
                </button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              {carousels.length > 0 ? (
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      {CarouselColumns.map((column) => (
                        <th key={column.field} className="py-3 px-6 text-left">
                          {column.headerName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {carousels.map((carousel) => (
                      <tr
                        key={carousel._id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        {CarouselColumns.map((column) => (
                          <td
                            key={column.field}
                            className="py-3 px-6 text-left"
                          >
                            {column.renderCell
                              ? column.renderCell({ row: carousel })
                              : carousel[column.field]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center py-4">No carousel images found.</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex mt-3">
      {/* Sidebar */}
      <div className="w-1/4 border border-1 rounded mr-4 p-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`w-full text-left py-2 px-4 rounded-lg mb-2 ${
              activeTab === tab.value
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4 bg-white border border-1 rounded">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
