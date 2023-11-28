import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Protected = () => {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/signin" />;
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Protected;
