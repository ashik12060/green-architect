import React from "react";
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Select } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const Theader = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); // Switch language
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo/Brand */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {/* Language Selector */}
        <IconButton color="inherit" sx={{ mr: 1 }}>
          <LanguageIcon />
        </IconButton>
        <Select
          value={i18n.language} // Set the selected language
          onChange={handleLanguageChange}
          variant="outlined"
          size="small"
          sx={{ color: "white", borderColor: "white" }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="bn">Bengali</MenuItem>
          <MenuItem value="es">Danish</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Theader;
