
import React from "react";
import trackingImg from "../../assets/live-tracking.png";
import deliveryImg from "../../assets/safe-delivery.png";


const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: trackingImg,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with care and delivered safely to their destination. Our reliable delivery process gives you confidence with every shipment.",
    image: deliveryImg,
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is always ready to help. Get quick answers to your questions and assistance whenever you need it.",
    image: deliveryImg,
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 gap-6">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="card bg-base-100 shadow-sm border border-base-300"
            >
              <div className="card-body flex flex-col md:flex-row items-center gap-6">

                {/* Left Side Image */}
                <div className="w-full md:w-1/6 flex justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-40 h-40 object-contain"
                  />
                </div>
                  <div className="w-px h-32 bg-gray-300"></div>
                 
              
                {/* Right Side Content */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    {feature.title}
                  </h2>

                  <p className="text-base-content/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;
