
import React from "react";
import customer from "../../assets/customer-top.png";

import {
  FaQuoteRight,
  FaUserCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    review:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 2,
    name: "Michael Smith",
    review:
      "This product has made a huge difference in my daily routine. I feel more comfortable and confident while working.",
  },
  {
    id: 3,
    name: "Emily Davis",
    review:
      "Excellent quality and very comfortable to use. I highly recommend this product to anyone looking to improve their posture.",
  },
  {
    id: 4,
    name: "David Wilson",
    review:
      "I noticed a great improvement in my posture after using this product regularly. It is easy to use and very effective.",
  },
  {
    id: 5,
    name: "Sophia Brown",
    review:
      "The product is comfortable, lightweight, and easy to wear throughout the day. Really happy with my purchase.",
  },
  {
    id: 6,
    name: "James Taylor",
    review:
      "Amazing experience! It provides excellent support and helps me maintain a better sitting position.",
  },
  {
    id: 7,
    name: "Olivia Martin",
    review:
      "This product helps me stay comfortable and reminds me to maintain proper posture.",
  },
  {
    id: 8,
    name: "Daniel Anderson",
    review:
      "Very useful product with great quality. The design is simple, comfortable, and easy to use.",
  },
  {
    id: 9,
    name: "Ava Thomas",
    review:
      "I love how comfortable this product feels. It has become an important part of my everyday routine.",
  },
  {
    id: 10,
    name: "Noah Garcia",
    review:
      "Great product and excellent experience. I would definitely recommend it to my friends and family.",
  },
];

const Review = () => {
  return (
    <section className="bg-base-200 py-16 px-4 md:px-10 lg:px-20">

      {/* Heading Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        
        {/* Customer Image */}
        <img
          src={customer}
          alt="Customer Review"
          className="w-36 h-36 object-contain mx-auto mb-5"
        />
       
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Customers Are Saying
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-7">
          Enhance posture, mobility, and well-being effortlessly with
          Posture Pro. Achieve proper alignment, reduce pain, and
          strengthen your body with ease!
        </p>

      </div>

      {/* Testimonial Slider */}
      <div className="max-w-7xl mx-auto">

        <Swiper
          modules={[Autoplay, Navigation]}

          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}

          spaceBetween={24}

          slidesPerView={1}

          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}

          loop={true}

          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          speed={3000}

          allowTouchMove={true}

          className="testimonialSwiper"

        >

          {/* Testimonial Cards */}
          {testimonials.map((item) => (

            <SwiperSlide key={item.id}>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[280px] flex flex-col">

                {/* Quote Icon */}
                <div className="flex justify-start mb-4">

                  <FaQuoteRight className="text-3xl text-[#067A87]" />

                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-7 flex-grow overflow-hidden">

                  {item.review}

                </p>

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Customer Information */}
                <div className="flex items-center gap-3">

                  <FaUserCircle className="text-3xl text-gray-400" />

                  <h3 className="font-semibold text-gray-800">

                    {item.name}

                  </h3>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* Previous & Next Navigation */}
        <div className="flex justify-center items-center gap-4 mt-10">

          {/* Previous Button */}
          <button
            className="testimonial-prev w-12 h-12 rounded-full border border-[#067A87] text-[#067A87] flex items-center justify-center hover:bg-[#067A87] hover:text-white transition duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >

            <FaArrowLeft />

          </button>

          {/* Next Button */}
          <button
            className="testimonial-next w-12 h-12 rounded-full border border-[#067A87] text-[#067A87] flex items-center justify-center hover:bg-[#067A87] hover:text-white transition duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
};

export default Review;
