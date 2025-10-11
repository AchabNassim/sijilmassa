import React from "react";
import ConnectWithUs from "../components/ConnectWithUs.jsx";
import Testimonials from "../components/testimonials/testimonials.jsx";
import AyaBanner from "../components/AyaBanner.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { useParams } from "react-router";


const PackDetails = () => {
    const {id} = useParams();
    console.log(id);
    <div className="w-full flex flex-col items-center">
        <Navbar />
        <AyaBanner />
        <Testimonials />
        <ConnectWithUs />
        <Footer />
    </div>
};

export default PackDetails;