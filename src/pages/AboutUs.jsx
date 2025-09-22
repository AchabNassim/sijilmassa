import React from "react";
import ConnectWithUs from "../components/ConnectWithUs.jsx";
import Testimonials from "../components/testimonials/testimonials.jsx";
import AyaBanner from "../components/AyaBanner.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const AboutUs = () => (
    <div className="w-full flex flex-col items-center">
        <Navbar />
        <div className="w-full flex justify-center bg-black">
        <video
            className="w-full max-w-4xl h-[320px] md:h-[480px] object-cover rounded-3xl shadow-xl my-8"
            controls
            poster="imgs/aboutus-poster.jpg"
        >
            <source src="vids/aboutUs.mp4" type="video/mp4" />
            المتصفح لا يدعم تشغيل الفيديو.
        </video>
        </div>
        <AyaBanner />
        <Testimonials />
        <ConnectWithUs />
        <Footer />
  </div>
);

export default AboutUs;