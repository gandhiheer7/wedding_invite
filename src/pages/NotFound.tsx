import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4">
      <h1 className="font-display text-6xl text-pink-600 mb-4">404</h1>
      <p className="font-display text-xl text-gray-600 mb-8">Oops! Page not found</p>
      <a 
        href="/" 
        className="text-pink-600 hover:text-pink-800 underline font-body"
      >
        Return to Wedding Invitation
      </a>
    </div>
  );
};

export default NotFound;