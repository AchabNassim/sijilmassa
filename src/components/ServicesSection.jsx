import React, {useState, useEffect} from "react";
import { FaPlane, FaHotel, FaMapMarkedAlt, FaShuttleVan } from "react-icons/fa";

const services = [
  {
    icon: <FaPlane size={48} className="text-[color:var(--color-gold-500)] mb-4" />,
    name: "Flights"
  },
  {
    icon: <FaHotel size={48} className="text-[color:var(--color-gold-500)] mb-4" />,
    name: "Hotels"
  },
  {
    icon: <FaMapMarkedAlt size={48} className="text-[color:var(--color-gold-500)] mb-4" />,
    name: "Guided Tours"
  },
  {
    icon: <FaShuttleVan size={48} className="text-[color:var(--color-gold-500)] mb-4" />,
    name: "Transport"
  }
];

const ServicesSection = () => (
  <section id="services" className="w-full py-16 bg-white flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[color:var(--color-green-500)]">
      We only offer the highest quality possible for each of our services
    </h2>
    <div className="flex flex-row flex-wrap items-center md:flex-row gap-10 w-full max-w-4xl justify-center xl:items-stretch">
      {services.map(service => (
        <div
          key={service.name}
          className="flex-1 min-w-[160px] max-w-[240px] rounded-2xl shadow-lg flex flex-col items-center p-8 border border-gray-100 bg-[color:var(--color-gray-100)] hover:shadow-2xl transition-shadow"
        >
          {service.icon}
          <h3 className="text-xl font-bold text-center text-[color:var(--color-gold-500)]">{service.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
