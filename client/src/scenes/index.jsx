import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../components/spinner";
import { Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "@/components/ui/Footer";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


import "../App.css";

function Root() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      try {
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, []);


  return (
    <>
      <Navbar />
      <div className="flex bg-background">
        <Sidebar loading={loading} />
        <div className="w-full flex bg-primary-background">
          {loading && <Spinner />}
          {!loading && <Outlet />}
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  );
}

export default Root;
