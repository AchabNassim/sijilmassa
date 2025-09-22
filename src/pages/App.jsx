import React from "react";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import MeccaExplore from "../components/meccaExplore/MeccaExplore.jsx";
import AyaBanner from "../components/AyaBanner.jsx";
import PacksExplore from "../components/meccapacks/PacksExplore.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import Testimonials from "../components/testimonials/Testimonials.jsx";
import ConnectWithUs from "../components/ConnectWithUs.jsx";
import Footer from "../components/Footer.jsx";

const App = () => {
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