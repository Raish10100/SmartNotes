import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Page not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-7xl font-bold text-blue-600 mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-700 dark:text-gray-300 mb-6"
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
