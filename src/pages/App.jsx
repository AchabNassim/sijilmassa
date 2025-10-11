import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import MeccaExplore from "../components/meccaExplore/MeccaExplore.jsx";
import AyaBanner from "../components/AyaBanner.jsx";
import PacksExplore from "../components/meccapacks/PacksExplore.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import Testimonials from "../components/testimonials/Testimonials.jsx";
import ConnectWithUs from "../components/ConnectWithUs.jsx";
import Footer from "../components/Footer.jsx";
import Loader from "../components/loader/Loader.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Header />
      <PacksExplore />
      <MeccaExplore />
      <AyaBanner />
      <ServicesSection />
      <Testimonials />
      <ConnectWithUs />
      <Footer />
    </>
  );
};

export default App;