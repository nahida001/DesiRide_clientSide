import {
  FaTruckFast,
  FaBox,
  FaShieldHalved,
  FaLocationDot,
  FaWarehouse,
  FaGlobe,
} from "react-icons/fa6";

const icons = {
  express: FaTruckFast,
  parcel: FaBox,
  security: FaShieldHalved,
  tracking: FaLocationDot,
  warehouse: FaWarehouse,
  international: FaGlobe,
};

const ServiceCard = ({ service, isActive, onClick }) => {
  const Icon = icons[service.icon];

  return (
    <div
      onClick={onClick}
      className={`card cursor-pointer border transition-all duration-300
        ${
          isActive
            ? "bg-[#CAEB66] text-emerald-900 border-primary shadow-xl"
            : "bg-base-100 border-base-300 hover:border-primary hover:shadow-lg"
        }`}
    >
      <div className="card-body">

        {/* Icon */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors
            ${
              isActive
                ? "bg-primary-content/20 text-black"
                : "bg-primary/10 text-[#94c004]"
            }`}
        >
          <Icon size={28} />
        </div>

        {/* Title */}
        <h3 className="card-title mt-3 text-xl font-semibold">
          {service.title}
        </h3>

        {/* Description */}
        <p
          className={`leading-7 ${
            isActive
              ? "text-blue-800/80"
              : "text-base-content/70"
          }`}
        >
          {service.description}
        </p>

      </div>
    </div>
  );
};

export default ServiceCard;