import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import amarSource from "../../../images/amar.jpeg";
import amarsourcesingle from "../../../images/amarsource-single-removebg-preview.png"
import "./Header.css";
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../../../redux/actions/userAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

const theme = createTheme(
  {
    pelette:{
      primary:{
        midblue:'#0c2685'
      }
    }
  }
)

  
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid mx-lg-5">
        <Link className="navbar-brand d-flex"  to="/">
          <img
            src={amarsourcesingle}
            className="d-inline-block align-top source-img h-100"
            alt="amarsource logo"
          />
          <div className="header-image-container rounded">
              <img
                src={amarSource}
                alt="amarsource logo"
                id="myImage"
                className="header-rotate-image"
              />
            </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ps-2">
              <span className="nav-link" href="#">
                <Link to="/" className="colorScheme header-hover">
                  HOME
                </Link>
              </span>
            </li>
            <li className="nav-item ps-2">
              <span className="nav-link" href="#">
                <Link to="/products" className="colorScheme header-hover">
                  PRODUCTS
                </Link>
              </span>
            </li>
            <li className="nav-item ps-2">
              <span className="nav-link" href="#">
                <Link to="/services" className="colorScheme header-hover">
                  SERVICES
                </Link>
              </span>
            </li>
            <li className="nav-item ps-2">
              <span className="nav-link" href="#">
                <Link to="/about" className="colorScheme header-hover">
                  ABOUT US
                </Link>
              </span>
            </li>

            <li className="nav-item dropdown ms-2">
              <a
                className="nav-link dropdown-toggle fw-bold text-black"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TEAM
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-li">
                  <Link className="dropdown-plus fw-bold " to="/advisors">
                    Advisors
                  </Link>
                </li>
                <li  className="dropdown-li">
                  <Link className="dropdown-plus fw-bold" to="/team">
                    Core Team
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item ps-2">
              <span className="nav-link" href="#">
                <Link to="/bloghome" className="colorScheme header-hover">
                  NEWS & BLOGS
                </Link>
              </span>
            </li>

            <li className="ps-lg-4 anchor-style">
              <button className="btn-style fw-bold">
                <Link to="/contact">CONTACT</Link>
              </button>
            </li>
          </ul>

          <Box sx={{ flexGrow: 0 }} className="ms-lg-4 ms-md-4 mt-sm-2 ">
            <Tooltip title="Open settings ">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className="">
              <FontAwesomeIcon className="bg-admin" icon={faCircleUser} />
                {/* <Avatar alt="Remy Sharp" className=" midblue fs-3 " >
                <FontAwesomeIcon className="bg-admin" icon={faUser} />
                  </Avatar> */}
              
            
              
           
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
                    style={{ textDecoration: "none" }}
                    to="/admin/dashboard"
                  >
                    Admin{" "}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: "none" }} to="/register">
                      Register{" "}
                    </Link>
                  </Typography>
                </MenuItem>
              {userInfo ? (
                <MenuItem onClick={logOutUser}>
                  <Typography textAlign="center" color="#8e67b2">
                    Log Out{" "}
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: "none" }} to="/login">
                      Login{" "}
                    </Link>
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <a className="ms-lg-4 ms-md-4 mt-sm-2 fw-bold" href="https://site.amarsource.com/" target="_blank"><u>Visit Old Site</u></a>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
