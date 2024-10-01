// import React from 'react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import amarSource from "../../../assets/23338.jpg";
// import amarsourcesingle from "../../../assets/23338.jpg"
// import "./Header.css";
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../../../redux/actions/userAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";



import { Link } from 'react-router-dom';



function Header() {

   
const dispatch = useDispatch();
const navigate = useNavigate();
const { userInfo } = useSelector((state) => state.signIn);

const [anchorElNav, setAnchorElNav] = useState(null);
const [anchorElUser, setAnchorElUser] = useState(null);

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

const logOutUser = () => {
  dispatch(userLogoutAction());
  window.location.reload(true);
  setTimeout(() => {
    navigate("/");
  }, 500);
};
  return (
    <header className="bg-gray-100 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          
        </div>
        <nav className="flex space-x-6 font-bold">
          <Link to='/' className='hover:text-green-600 '>Home</Link>
          <Link to='/about-us' className='hover:text-green-600 '>About Us</Link>
          <Link to='/services' className='hover:text-green-600 '>Services</Link>
          <Link to='/projects' className='hover:text-green-600 '>Projects</Link>
          <Link to="/products" className='hover:text-green-600 '>Products</Link>
          <Link to="/research-development" className='hover:text-green-600 '>Research & Analysis</Link>
          <Link to="/blog" className='hover:text-green-600 '>Blog</Link>
          <Link to='/team' className='hover:text-green-600 '>Team</Link>
          <Link to="/contact" className='hover:text-green-600 '>Contact</Link>

          
        </nav>
        <Box sx={{ flexGrow: 0 }} className="ms-lg-4 ms-md-4 mt-sm-2 ">
            <Tooltip title="Open settings ">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className="">
              <FontAwesomeIcon className="text-green-700" icon={faCircleUser} />
                       
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{
                sx: {
                  "& 	.MuiMenu-list": {
                    bgColor: "primary.white",
                    color: "white",
                  },
                },
              }}
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link 
                   className="text-black"
                    style={{ textDecoration: "none" }}
                    to="/admin/dashboard"
                  >
                    Admin{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link  className="text-black" style={{ textDecoration: "none" }} to="/register">
                      Register{" "}
                    </Link>
                  </Typography>
                </MenuItem>
              {userInfo ? (
                <MenuItem onClick={logOutUser}>
                  <Typography textAlign="center"  className="text-black">
                    Log Out{" "}
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link className="text-black" style={{ textDecoration: "none" }} to="/login">
                      Login{" "}
                    </Link>
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
      </div>
    </header>
  );
}

export default Header;