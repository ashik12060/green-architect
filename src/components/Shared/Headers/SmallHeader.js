// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useTheme } from "../../../context/ThemeContext";
// import LanguageIcon from "@mui/icons-material/Language";
// import { useTranslation } from "react-i18next";
// import { AppBar, Toolbar, Typography, IconButton, MenuItem, Select } from "@mui/material";
// import logo from '../../../assets/Green Shelter Design and Development.jpeg'

// const SmallHeader = () => {
//   const { isDarkMode, setIsDarkMode } = useTheme(); // Use context
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("EN");

//   const { i18n } = useTranslation();
//   const { t } = useTranslation('ProjectComplete'); 

//   const handleLanguageChange = (event) => {
//     i18n.changeLanguage(event.target.value); // Switch language
//   };



//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const selectLanguage = (lang) => {
//     setSelectedLanguage(lang);
//     setIsOpen(false);
//   };

//   const toggleSwitch = () => {
//     setIsDarkMode(prev => !prev);
//   };

//   return (
//     <header className={`shadow-md py-2 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//       <div className="container mx-auto flex justify-between items-center px-10">
//         {/* Logo Section */}
//         <div className="text-2xl font-bold ps-">
          
//           <Link to='/'>
//           <img src={logo} className="w-20" alt="Green Shelter Design and Development logo" />
//           </Link>
//         </div>

//         {/* Header Content */}
//         <div className="flex gap-8 items-center">
//           {/* Dark Mode Toggle Button */}
//           <div className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${isDarkMode ? "bg-green-600" : "bg-gray-300"}`} onClick={toggleSwitch}>
//             <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${isDarkMode ? "translate-x-6" : "translate-x-0"}`} />
//           </div>


//           <IconButton color="inherit" sx={{ mr: 1 }}>
//           <LanguageIcon />
//         </IconButton>
//         <Select
//           value={i18n.language} // Set the selected language
//           onChange={handleLanguageChange}
//           variant="outlined"
//           size="small"
//           sx={{ color: "green", borderColor: "white" }}
//         >
//           <MenuItem value="en">English</MenuItem>
//           <MenuItem value="bn">Bengali</MenuItem>
//           <MenuItem value="es">Danish</MenuItem>
//         </Select>

          

//           {/* Sign Up Button */}
//           <Link to='/contact' className={`px-4 py-1 rounded ${isDarkMode ? "bg-gray-700 text-white hover:bg-green-600" : "bg-green-700 text-white hover:bg-green-500 hover:text-white"} transition duration-300`}>
//             {t('buyNow')}
          
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default SmallHeader;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Select } from "@mui/material";
import logo from '../../../assets/Green Shelter Design and Development.jpeg'

const SmallHeader = () => {
  const { isDarkMode, setIsDarkMode } = useTheme(); // Use context
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const { i18n } = useTranslation();
  const { t } = useTranslation('ProjectComplete'); 

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); // Switch language
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  const toggleSwitch = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <header className={`shadow-md py-2 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        {/* Logo Section */}
        <div className="text-xl md:text-2xl font-bold">
          <Link to='/'>
            <img src={logo} className="w-16 md:w-20" alt="Green Shelter Design and Development logo" />
          </Link>
        </div>

        {/* Header Content */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Dark Mode Toggle Button */}
          <div
            className={`w-10 md:w-12 h-5 md:h-6 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
              isDarkMode ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={toggleSwitch}
          >
            <div
              className={`bg-white w-4 h-4 md:w-5 md:h-5 rounded-full shadow-md transform transition duration-300 ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>

          {/* Language Selector */}
          <div className="flex items-center  md:flex">
            <IconButton color="inherit">
             
            </IconButton>
            <Select
              value={i18n.language} // Set the selected language
              onChange={handleLanguageChange}
              variant="outlined"
              size="small"
              className="text-sm md:text-base"
              sx={{ color: "green", borderColor: "white", fontSize: "14px" }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="bn">Bengali</MenuItem>
              <MenuItem value="es">Danish</MenuItem>
            </Select>
          </div>

          {/* Sign Up Button */}
          <Link
            to='/contact'
            className={`px-3 py-1 text-sm md:px-4 md:py-1 rounded hidden md:inline ${
              isDarkMode
                ? "bg-gray-700 text-white hover:bg-green-600"
                : "bg-green-700 text-white hover:bg-green-500"
            } transition duration-300`}
          >
            {t('buyNow')}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SmallHeader;
