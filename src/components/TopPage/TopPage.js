import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TopPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on every route change
  }, [pathname]);

  return null;
};

export default TopPage;
