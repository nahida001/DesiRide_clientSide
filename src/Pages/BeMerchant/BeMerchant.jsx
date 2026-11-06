import React from 'react';
import marcha from "../../assets/location-merchant.png"
const BeMerchant = () => {
    return (
        <div className="hero bg-base-200 p-10 ">
          <div className='aura'>
       <div data-aos="zoom-in-up" className=" hero-content bg-[#03373D] bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat  flex-col lg:flex-row-reverse p-16 rounded-3xl">
    <img
      alt="marchant"
      src={marcha}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-3xl font-bold text-white">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6 text-white">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <div className='flex gap-3'>
          <button className="btn btn-primary bg-[#CAEB66] text-black rounded-4xl">Become a Merchant</button>
         <button className="btn btn-primary bg-[#CAEB66] text-black rounded-4xl">Earn with DesiRide Courier</button>
   </div>
      </div>
      </div>
  </div>
</div>
    );
};

export default BeMerchant;