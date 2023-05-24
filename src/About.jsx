import React from "react";
import Common from "./Common";
import web from "../src/videos/Giving Feedback.mp4";
const About = () => {
  return (
    <>
      <Common
        head1="About me as a"
        butn="Contact Me"
        video={web}
        link="/contact"
      />
    </>
  );
};

export default About;
