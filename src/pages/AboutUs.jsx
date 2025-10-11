import React, { useState, useEffect } from "react";
import ConnectWithUs from "../components/ConnectWithUs.jsx";
import Testimonials from "../components/testimonials/testimonials.jsx";
import AyaBanner from "../components/AyaBanner.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

// Slideshow component
const Slideshow = ({ images, interval = 3000 }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-4xl">
                <img
                    src={images[current]}
                    alt={`slide-${current}`}
                    className="w-full h-[320px] md:h-[480px] object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, idx) => (
                        <span
                            key={idx}
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                idx === current 
                                    ? "bg-white shadow-md" 
                                    : "bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// New component for Arabic text and slideshow
const WakalatonaSection = () => {
    const images = [];
    for (let i = 1; i <= 8; i++) {
        images.push(`imgs/aboutUs/wakala${i}.webp`);
    }

    return (
        <div className="w-full flex flex-col items-center py-16 px-4 bg-gray-100">
            <div className="w-full max-w-6xl mx-auto text-center">
                <h2 
                    className="text-4xl md:text-5xl font-bold text-green-500 mb-12" 
                    dir="rtl"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                    وكالتنا وكالتكم
                </h2>
                <Slideshow images={images} />
            </div>
        </div>
    );
};

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
        <WakalatonaSection />
        <AyaBanner />
        <Testimonials />
        <ConnectWithUs />
        <Footer />
    </div>
);

export default AboutUs;