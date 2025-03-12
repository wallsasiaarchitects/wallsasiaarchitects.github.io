
import { useLocation, Link } from "react-router-dom";
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-6xl font-bold mb-6 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for cannot be found.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-architect-dark text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
