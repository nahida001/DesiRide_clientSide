import React from "react";

const FAQuestion = () => {
  return (
    <div className="p-16">
      <div className="text-center p-10">
        <h1 className="text-2xl font-semibold pb-2">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment
        </p>{" "}
        <p> reduce pain, and strengthen your body with ease!</p>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How does this posture corrector work?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          What services do you provide?
        </div>
        <div className="collapse-content text-sm">
          We provide fast, reliable, and secure parcel delivery services for
          individuals and businesses. Our services include express delivery,
          standard delivery, and real-time parcel tracking.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How can I track my parcel?
        </div>
        <div className="collapse-content text-sm">
          You can track your parcel using your tracking ID on our website. You
          will receive real-time updates about your parcel's current location
          and delivery status.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How long does parcel delivery take?
        </div>
        <div className="collapse-content text-sm">
          Delivery time depends on the destination and delivery service you
          choose. Inside Dhaka, parcels are usually delivered within 24 hours,
          while delivery outside Dhaka may take 2–3 business days.{" "}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How can I contact customer support?
        </div>
        <div className="collapse-content text-sm">
          If your parcel is delayed or damaged, please contact our customer
          support team with your tracking ID. We will check the issue and help
          you find the best solution.{" "}
        </div>
      </div>
    </div>
  );
};

export default FAQuestion;
