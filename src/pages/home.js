import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Aboutteam from "../components/Aboutteam";
// import Metaverse from "../components/Metaverse";
import Roadmap from "../components/Roadmap";
// import StakingRewards from "../components/StakingRewards";
import Vision from "../components/Vision";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Vision />
      <Aboutteam />
      {/* <Metaverse /> */}
      <Roadmap />
      {/* <StakingRewards /> */}
      <Footer />
    </div>
  );
};

export default Home;
