// // Allahu akbar
// import React, { useEffect, useState } from "react";
// import { Box, Button, Paper, Typography } from "@mui/material";
// import { DataGrid, gridClasses } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";
// import moment from "moment";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { toast } from "react-toastify";
// import axiosInstance from "../pages/axiosInstance";

// const AdminDashboard = () => {

//   const [posts, setPosts] = useState([]);


//   // display post
//   const displayPost = async () => {
//     try {
//       const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/posts/show`);
//       setPosts(data.posts);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     displayPost();
//   }, []);

//    // display item
  


 

//   //delete post by Id
//   const deletePostById = async (e, id) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       try { 
//         const result = await axiosInstance.delete(`${process.env.REACT_APP_API_URL}/api/delete/post/${id}`);
//         if (result?.data?.success === true) {
//           toast.success("post deleted");
//           displayPost();
//         }
//       } catch (error) {
//         console.log(error);
//         toast.error(error);
//       }
//     }
//   };
 

//   // post columns
//   const PostColumns = [
//     {
//       field: "_id",
//       headerName: "Post ID",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "title",
//       headerName: "Post title",
//       width: 150,
//     },

//     {
//       field: "image",
//       headerName: "Image",
//       width: 150,
//       renderCell: (params) => (
//         <img width="40%" src={params.row.image.url} alt="img" />
//       ),
//     },
//     {
//       field: "likes",
//       headerName: "Likes",
//       width: 150,
//       renderCell: (params) => params.row.likes.length,
//     },
//     {
//       field: "comments",
//       headerName: "Comments",
//       width: 150,
//       renderCell: (params) => params.row.comments.length,
//     },
//     {
//       field: "postedBy",
//       headerName: "Posted by",
//       width: 150,
//       // valueGetter: (data) => data.row.postedBy.name,
//     },
//     {
//       field: "createdAt",
//       headerName: "Create At",
//       width: 150,
//       renderCell: (params) =>
//         moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
//     },

//     {
//       field: "Actions",
//       width: 100,
//       renderCell: (value) => (
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "170px",
//           }}
//         >
//           <Link to={`/admin/post/edit/${value.row._id}`}>
//             <IconButton aria-label="edit">
//               <EditIcon sx={{ color: "#1976d2" }} />
//             </IconButton>
//           </Link>
//           <IconButton
//             aria-label="delete"
//             onClick={(e) => deletePostById(e, value.row._id)}
//           >
//             <DeleteIcon sx={{ color: "red" }} />
//           </IconButton>
//         </Box>
//       ),
//     },
//   ];
  
//   return (
//     <div className="">
//       {/* post  */}
//       <Box>
//         <Typography variant="h4" sx={{ color: "black", pb: 3 }}>
//          Blog Posts
//         </Typography>
//         <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
//           <Button
//             variant="contained"
//             color="success"
//             startIcon={<AddIcon />}
//             sx={{
//               fontSize: "1rem", 
//               padding: "8px 16px", 
//               "@media (max-width: 768px)": {
               
//                 fontSize: "0.9rem", 
//                 padding: "6px 12px", 
//               },
//             }}
//           >
//             <Link
//               style={{ color: "white", textDecoration: "none" }}
//               to="/admin/post/create"
//             >
//               Create Post
//             </Link>{" "}
//           </Button>
//         </Box>
//         <Paper sx={{ bgColor: "white" }}>
//           <Box sx={{ height: 400, width: "100%" }}>
//             <DataGrid
//               getRowId={(row) => row._id}
//               sx={{
//                 "& .MuiTablePagination-displayedRows": {
//                   color: "black",
//                 },
//                 color: "black",
//                 [`& .${gridClasses.row}`]: {
//                   bgColor: "white",
//                 },
//               }}
//               rows={posts}
//               columns={PostColumns}
//               pageSize={3}
//               rowsPerPageOptions={[3]}
//               checkboxSelection
//             />
//           </Box>
//         </Paper>
//       </Box>


      
//     </div>
//   );
// };

// export default AdminDashboard;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";
import axiosInstance from "../pages/axiosInstance";

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);

  // Display posts
  const displayPost = async () => {
    try {
      const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/posts/show`);
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayPost();
  }, []);

  // Delete post by ID
  const deletePostById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const result = await axiosInstance.delete(`${process.env.REACT_APP_API_URL}/api/delete/post/${id}`);
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

  // Post columns
  // const PostColumns = [
  //   {
  //     field: "_id",
  //     headerName: "Post ID",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "title",
  //     headerName: "Post title",
  //     width: 150,
  //   },
  //   {
  //     field: "image",
  //     headerName: "Image",
  //     width: 150,
  //     renderCell: (params) => (
  //       <img width="40%" src={params.row.image.url} alt="img" />
  //     ),
  //   },
  //   {
  //     field: "likes",
  //     headerName: "Likes",
  //     width: 150,
  //     renderCell: (params) => params.row.likes.length,
  //   },
  //   {
  //     field: "comments",
  //     headerName: "Comments",
  //     width: 150,
  //     renderCell: (params) => params.row.comments.length,
  //   },
  //   {
  //     field: "postedBy",
  //     headerName: "Posted by",
  //     width: 150,
  //   },
  //   {
  //     field: "createdAt",
  //     headerName: "Created At",
  //     width: 150,
  //     renderCell: (params) =>
  //       moment(params.row.createdAt).format("YYYY-MM-DD HH:mm:ss"),
  //   },
  //   {
  //     field: "Actions",
  //     width: 100,
  //     renderCell: (value) => (
  //       <div className="flex justify-between">
  //         <Link to={`/admin/post/edit/${value.row._id}`}>
  //           <IconButton aria-label="edit">
  //             <EditIcon sx={{ color: "#1976d2" }} />
  //           </IconButton>
  //         </Link>
  //         <IconButton aria-label="delete" onClick={(e) => deletePostById(e, value.row._id)}>
  //           <DeleteIcon sx={{ color: "red" }} />
  //         </IconButton>
  //       </div>
  //     ),
  //   },
  // ];

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
          <IconButton aria-label="delete" onClick={(e) => deletePostById(e, value.row._id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      ),
    },
  ];
  
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 h-screen p-5">
        <h2 className="text-white text-2xl font-bold mb-5">Admin Dashboard</h2>
        <ul>
          <li className="text-white mb-2">
            <Link to="/admin">Home</Link>
          </li>
          <li className="text-white mb-2">
            <Link to="/admin/posts">Posts</Link>
          </li>
          <li className="text-white mb-2">
            <Link to="/admin/users">Users</Link>
          </li>
          <li className="text-white mb-2">
            <Link to="/admin/settings">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h4 className="text-black text-4xl pb-3">Blog Posts</h4>
        <div className="pb-2 flex justify-end">
          <Link to="/admin/post/create">
            <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
              <AddIcon className="mr-2" />
              Create Post
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                {PostColumns.map((column) => (
                  <th key={column.field} className="py-3 px-6 text-left">
                    {column.headerName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {posts.map((post) => (
                <tr key={post._id} className="border-b border-gray-200 hover:bg-gray-100">
                  {PostColumns.map((column) => (
                    <td key={column.field} className="py-3 px-6 text-left">
                      {column.renderCell ? column.renderCell({ row: post }) : post[column.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
