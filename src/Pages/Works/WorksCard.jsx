import bookingicon from "../../assets/bookingIcon.png"

const features = [
  {
    id: 1,
    image:  bookingicon,
    title: "Booking Pick & Drop",
    description:
      "Stay updated in real-time with our live parcel tracking feature. Monitor your shipment's journey and get instant status updates.",
  },
  {
    id: 2,
    image:  bookingicon,
    title: "Cash On Delivery",
    description:
      "We provide fast and reliable parcel delivery services to ensure your packages reach their destination on time.",
  },
  {
    id: 3,
    image:  bookingicon,
    title: "Delivery Hub",
    description:
      "Your parcels are handled carefully and securely throughout the entire delivery process.",
  },
  {
    id: 4,
    image:  bookingicon,
    title: "Booking SME & Corporate",
    description:
      "Our support team is always ready to help you with your parcel delivery questions and concerns.",
  },
];

const WorksCard = () => {
  return (
    <section className="py-8 bg-base-200">
      <div className="container mx-auto px-4">

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="card bg-base-100 shadow-md p-6"
            >
              {/* Image */}
              <figure className="flex justify-start">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </figure>

              {/* Title and Paragraph */}
              <div className="card-body p-0 mt-5">

                <h2 className="card-title text-xl font-bold">
                  {feature.title}
                </h2>

                <p className="text-gray-500 text-sm leading-6">
                  {feature.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WorksCard;