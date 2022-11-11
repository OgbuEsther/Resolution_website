import React from "react";
import AgentComp from "./AGENTCOMP/AgentComp";
import Blog from "./BLOG/Blog";
import Features from "./FEATURES/Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Comp from "./SPECIALIZATIONCOMP/Comp";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <AgentComp />
      <br />
      <Comp />
      <br />
      <Features />
      <br />
      <br />
      <Blog />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default HomeScreen;
