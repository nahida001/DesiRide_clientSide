import { useState } from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    icon: "express",
    title: "Express & Fast Delivery",
    description:
      "Get your parcels delivered quickly and safely with our express delivery service.",
  },
  {
    id: 2,
    icon: "parcel",
    title: "Parcel Delivery",
    description:
      "Send your personal packages anywhere with our convenient parcel delivery service.",
  },
  {
    id: 3,
    icon: "security",
    title: "Safe & Secure Delivery",
    description:
      "We handle your parcels with care and ensure safe delivery to your destination.",
  },
  {
    id: 4,
    icon: "tracking",
    title: "Real-Time Tracking",
    description:
      "Track your parcel in real time and stay updated on its delivery status.",
  },
  {
    id: 5,
    icon: "warehouse",
    title: "Warehouse Solutions",
    description:
      "Manage your inventory efficiently with our reliable warehouse solutions.",
  },
  {
    id: 6,
    icon: "international",
    title: "International Shipping",
    description:
      "Send packages worldwide with our reliable international shipping service.",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-[#03373D] py-6 md:py-20 rounded-xl">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <h2 className="mb-4 text-amber-50 text-2xl font-bold md:text-2xl">
            Our Services
          </h2>

          <p className="leading-7 text-amber-50 ">
            Enjoy fast, reliable parcel delivery with real-time tracking
            and zero hassle. From personal packages to business shipments
            — we deliver on time, every time.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id
                )
              }
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;