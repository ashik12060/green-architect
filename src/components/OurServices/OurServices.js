
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import AdditionalServices from "./AdditionalServices";

function OurServices() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation('AdditionalService');
  return (
    <>
    <ServiceCard />
    <AdditionalServices />

    </>
  );
}

export default OurServices;

