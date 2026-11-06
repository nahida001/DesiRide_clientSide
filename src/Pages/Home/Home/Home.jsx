import React from "react";
import Banner from "../Banner";
import Services from "../../Services/Services";
import ClientLogos from "../../ClientLogos/ClientLogos";
import Features from "../../Features/Features";
import WorksCard from "../../Works/WorksCard";
import BeMerchant from "../../BeMerchant/BeMerchant";
import Review from "../../Review/Review";
import FAQuestion from "../../Qestion/FAQuestion";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WorksCard></WorksCard>
      <Services></Services>
      <ClientLogos></ClientLogos>
      <Features></Features>
      <BeMerchant></BeMerchant>
      <Review></Review>
      <FAQuestion></FAQuestion>
    </div>
  );
};

export default Home;
