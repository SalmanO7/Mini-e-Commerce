import React from "react";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/SideBar";

const page = () => {
  return (
    <div className="bg-white w-full text-center">
      <Header />
      <Home />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default page;
