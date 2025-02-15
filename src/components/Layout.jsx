import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import GoogleTranslate from "./GoogleTranslate";

const Layout = () => {
  const [fade, setFade] = useState("opacity-100");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setFade("opacity-0"); // Start fade-out
    setLoading(true); // Show loading spinner

    const timeout = setTimeout(() => {
      setFade("opacity-100"); // Fade-in new content
      setLoading(false); // Hide loading spinner
    }, 500); // Transition duration

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [location.pathname]); // Runs on every route change

  return (
    <div className="min-h-screen relative font-montserrat overflow-x-clip font-medium bg-bgPri text-text">
      <Navbar />

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-bgPri bg-opacity-50 z-50">
          <div className="w-10 h-10 border-4 border-sec border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Page Transition */}
      <div className={`transition-opacity duration-500 ${fade} h min-h-svh`}>
        <Outlet />
      </div>
      
      <GoogleTranslate />
      <Footer />
    </div>
  );
};

export default Layout;
