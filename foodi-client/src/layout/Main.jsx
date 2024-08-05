import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import "../../src/App.css";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="bg-prigmayBG">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;
