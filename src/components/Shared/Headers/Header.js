// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { userLogoutAction } from "../../../redux/actions/userAction";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';

// function Header() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userInfo } = useSelector((state) => state.signIn);

//   const [anchorElUser, setAnchorElUser] = useState(null);
//   const [anchorElProducts, setAnchorElProducts] = useState(null);

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleMouseEnterProductsMenu = (event) => {
//     setAnchorElProducts(event.currentTarget);
//   };

//   const handleMouseLeaveProductsMenu = () => {
//     setAnchorElProducts(null);
//   };

//   const logOutUser = () => {
//     dispatch(userLogoutAction());
//     window.location.reload(true);
//     setTimeout(() => {
//       navigate("/");
//     }, 500);
//   };

//   return (
//     <header className="bg-gray-100 text-black py-4 border">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           {/* Logo or Brand Name */}
//         </div>
//         <nav className="flex space-x-6 font-bold">
//           <Link to='/' className='hover:text-green-600'>Home</Link>
//           <Link to='/about-us' className='hover:text-green-600'>About Us</Link>
//           <Link to='/services' className='hover:text-green-600'>Services</Link>
//           <Link to='/projects' className='hover:text-green-600'>Projects</Link>
//           <Link to='/products' className='hover:text-green-600'>Products</Link>

//           {/* Products Dropdown */}
//           {/* <div
//             onMouseEnter={handleMouseEnterProductsMenu}
//             onMouseLeave={handleMouseLeaveProductsMenu}
//           >
//             <button className='hover:text-green-600'>Products <FontAwesomeIcon icon={faChevronDown} /></button>
//             <Menu
//               anchorEl={anchorElProducts}
//               open={Boolean(anchorElProducts)}
//               onClose={handleMouseLeaveProductsMenu}
//               onMouseLeave={handleMouseLeaveProductsMenu}
//             >
//               <MenuItem onClick={handleMouseLeaveProductsMenu}>
//                 <Link className="text-black" to="/products/product1">Product 1</Link>
//               </MenuItem>
//               <MenuItem onClick={handleMouseLeaveProductsMenu}>
//                 <Link className="text-black" to="/products/product2">Product 2</Link>
//               </MenuItem>
//               <MenuItem onClick={handleMouseLeaveProductsMenu}>
//                 <Link className="text-black" to="/products/product3">Product 3</Link>
//               </MenuItem>
//             </Menu>
//           </div> */}

//           <Link to="/research-development" className='hover:text-green-600'>Research & Analysis</Link>
//           <Link to="/blog" className='hover:text-green-600'>Blog</Link>
//           <Link to='/team' className='hover:text-green-600'>Team</Link>
//           <Link to="/contact" className='hover:text-green-600'>Contact</Link>
//         </nav>
//         <Box sx={{ flexGrow: 0 }} className="ms-lg-4 ms-md-4 mt-sm-2 ">
//           <Tooltip title="Open settings">
//             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//               <FontAwesomeIcon className="text-green-700" icon={faCircleUser} />
//             </IconButton>
//           </Tooltip>
//           <Menu
//             sx={{ mt: "45px" }}
//             id="menu-appbar"
//             anchorEl={anchorElUser}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={Boolean(anchorElUser)}
//             onClose={handleCloseUserMenu}
//           >
//             <MenuItem onClick={handleCloseUserMenu}>
//               <Typography textAlign="center">
//                 <Link className="text-black" style={{ textDecoration: "none" }} to="/admin/dashboard">Admin</Link>
//               </Typography>
//             </MenuItem>
//             <MenuItem onClick={handleCloseUserMenu}>
//               <Typography textAlign="center">
//                 <Link className="text-black" style={{ textDecoration: "none" }} to="/register">Register</Link>
//               </Typography>
//             </MenuItem>
//             {userInfo ? (
//               <MenuItem onClick={logOutUser}>
//                 <Typography textAlign="center" className="text-black">Log Out</Typography>
//               </MenuItem>
//             ) : (
//               <MenuItem onClick={handleCloseUserMenu}>
//                 <Typography textAlign="center">
//                   <Link className="text-black" style={{ textDecoration: "none" }} to="/login">Login</Link>
//                 </Typography>
//               </MenuItem>
//             )}
//           </Menu>
//         </Box>
//       </div>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../../../redux/actions/userAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.signIn);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false); // For mobile drawer

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if the screen is mobile size

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Open or close the drawer
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem button component={Link} to='/'>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to='/about-us'>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to='/services'>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to='/projects'>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to='/products'>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to='/research-development'>
          <ListItemText primary="Research & Analysis" />
        </ListItem>
        <ListItem button component={Link} to='/blog'>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component={Link} to='/team'>
          <ListItemText primary="Team" />
        </ListItem>
        <ListItem button component={Link} to='/contact'>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header className="bg-gray-100 text-black py-4 border">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="flex items-center">
          {/* Brand Name or Logo */}
        </div>

        {/* For mobile, display hamburger icon */}
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          // For larger screens, display the full menu
          <nav className="flex space-x-6 font-bold">
            <Link to='/' className='hover:text-green-600'>Home</Link>
            <Link to='/about-us' className='hover:text-green-600'>About Us</Link>
            <Link to='/services' className='hover:text-green-600'>Services</Link>
            <Link to='/projects' className='hover:text-green-600'>Projects</Link>
            <Link to='/products' className='hover:text-green-600'>Products</Link>
            <Link to="/research-development" className='hover:text-green-600'>Research & Analysis</Link>
            <Link to="/blog" className='hover:text-green-600'>Blog</Link>
            <Link to='/team' className='hover:text-green-600'>Team</Link>
            <Link to="/contact" className='hover:text-green-600'>Contact</Link>
          </nav>
        )}

        <Box sx={{ flexGrow: 0 }} className="ms-lg-4 ms-md-4 mt-sm-2">
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <FontAwesomeIcon className="text-green-700" icon={faCircleUser} />
            </IconButton>
          </Tooltip>
          <Menu
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
                <Link className="text-black" style={{ textDecoration: "none" }} to="/admin/dashboard">Admin</Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">
                <Link className="text-black" style={{ textDecoration: "none" }} to="/register">Register</Link>
              </Typography>
            </MenuItem>
            {userInfo ? (
              <MenuItem onClick={logOutUser}>
                <Typography textAlign="center" className="text-black">Log Out</Typography>
              </MenuItem>
            ) : (
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link className="text-black" style={{ textDecoration: "none" }} to="/login">Login</Link>
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
