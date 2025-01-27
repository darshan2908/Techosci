import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    const scrollableElement = document.documentElement || document.body;

    requestAnimationFrame(() => {
      scrollableElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, [location]);

  return null; // This component does not render anything
};

export default ScrollToTop;