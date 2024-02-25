import React from "react";
import Meta from "../../components/Meta";
import Hero_5 from "../../components/hero/hero_5";
import Process from "../../components/blog/process";
import Services from "../../components/services/services";
import Statistic_promo_2 from "../../components/promo/statistic_promo_2";
import RoadMap from "../../components/ico-landing/RoadMap";
import Team from "../../components/ico-landing/Team";
import Benifits from "../../components/dao/Benifits";
import CallToActions from "../../components/ico-landing/CallToActions";
import TrustedPartner from "../../components/dao/TrustedPartner";
import Features from "../../components/cryto-trading/Features";
import NewseLatter2 from "../../components/dao/newseLatter2";



const Home_5 = () => {
  return (
    <>
      <Meta title="Spiderbits" />
      <Hero_5 />
      <Process />
      <Statistic_promo_2 />
      <Services />
      <Features />
      <Team />
      <RoadMap />
      <Benifits />
      <CallToActions />
      <TrustedPartner />
      <NewseLatter2 bgWhite={false} />
      
      
      
    </>
  );
};

export default Home_5;
