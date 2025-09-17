import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MeccaExplore from "./components/meccaExplore/MeccaExplore";
import AyaBanner from "./components/AyaBanner";
import PacksExplore from "./components/meccapacks/PacksExplore";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import ConnectWithUs from "./components/ConnectWithUs";
import Footer from "./components/Footer";

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