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
  const [rnds, setRnd] = useState([]);
  const [members, setMembers] = useState([]);

  // Display posts
  const displayPost = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/posts/show`
      );
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayPost();
  }, []);

  // display research and development
  const displayRnd = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/rnds/show`
      );
      setRnd(data.rnds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayRnd();
  }, []);

  // display members
  const displayMembers = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/api/members/show`
      );
      setMembers(data.members);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayMembers();
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

  // Delete member by ID
  const deleteMemberById = async (e, id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        const result = await axiosInstance.delete(
          `${process.env.REACT_APP_API_URL}/api/delete/member/${id}`
        );
        if (result?.data?.success === true) {
          toast.success("Member deleted");
          displayMembers();
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
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

  // Research and Development columns
  const MembersColumns = [
    {
      field: "_id",
      headerName: "Member ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Member title",
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

  return (
    <div className="flex ">
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

      <div className="flex flex-col">


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
                  <tr
                    key={post._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {PostColumns.map((column) => (
                      <td key={column.field} className="py-3 px-6 text-left">
                        {column.renderCell
                          ? column.renderCell({ row: post })
                          : post[column.field]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Research and development */}
        <div className="flex-1 p-10 bg-gray-100">
          <h4 className="text-black text-4xl pb-3">Research and development</h4>
          <div className="pb-2 flex justify-end">
            <Link to="/admin/rnd/create">
              <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                <AddIcon className="mr-2" />
                Create Research and Dev
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  {RndColumns.map((column) => (
                    <th key={column.field} className="py-3 px-6 text-left">
                      {column.headerName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {rnds.map((rnd) => (
                  <tr
                    key={rnd._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {RndColumns.map((column) => (
                      <td key={column.field} className="py-3 px-6 text-left">
                        {column.renderCell
                          ? column.renderCell({ row: rnd })
                          : rnd[column.field]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        {/* Team members */}
        <div className="flex-1 p-10 bg-gray-100">
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
                <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  {MembersColumns.map((column) => (
                    <th key={column.field} className="py-3 px-6 text-left">
                      {column.headerName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {members.map((member) => (
                  <tr
                    key={member._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {MembersColumns.map((column) => (
                      <td key={column.field} className="py-3 px-6 text-left">
                        {column.renderCell
                          ? column.renderCell({ row: member })
                          : member[column.field]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        



      </div>
    </div>
  );
};

export default AdminDashboard;
