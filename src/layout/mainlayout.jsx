import { useEffect } from "react";
import PageTitle from "../layout/PageTitle";
import Aos from "aos";
import "aos/dist/aos.css"
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
// import Footer from "../components/Footer";

function MainLayout() {
  PageTitle();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
