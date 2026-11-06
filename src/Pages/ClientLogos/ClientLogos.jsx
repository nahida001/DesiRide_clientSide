import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

import logo1 from "../../assets/brands/amazon.png";
import logo2 from "../../assets/brands/amazon_vector.png";
import logo3 from "../../assets/brands/casio.png";
import logo4 from "../../assets/brands/moonstar.png";
import logo5 from "../../assets/brands/randstad.png";
import logo6 from "../../assets/brands/star.png";
import logo7 from "../../assets/brands/start_people.png";

const logos = [
  { id: 1, image: logo1, name: "Amazon" },
  { id: 2, image: logo2, name: "Amazon Vector" },
  { id: 3, image: logo3, name: "Casio" },
  { id: 4, image: logo4, name: "Moonstar" },
  { id: 5, image: logo5, name: "Randstad" },
  { id: 6, image: logo6, name: "Star" },
  { id: 7, image: logo7, name: "Start People" },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-base-100">

      <div className="text-center mb-8 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-base-content">
          We've helped thousands of sales teams
        </h2>
      </div>

      <Marquee
        direction="right"
        speed={40}
        pauseOnHover={true}
        gradient={false}
      >
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="mx-10 w-26 h-15 flex items-center justify-center"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="w-full h-6 object-contain  hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>

    </section>
  );
};

export default ClientLogos;
