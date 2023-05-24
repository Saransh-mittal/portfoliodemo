import React from "react";
import web from "../src/videos/SEO Clip Abstract Object.mp4";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        head1="My PortFolio as a"
        butn="Get Started"
        video={web}
        link="/services"
      />
    </>
  );
};

export default Home;
