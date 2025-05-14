
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import MurakaAI from "@/components/MurakaAI";
import Principles from "@/components/Principles";
import Team from "@/components/Team";
import Collaborate from "@/components/Collaborate";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <WhatWeDo />
      <MurakaAI />
      <Principles />
      <Team />
      <Collaborate />
    
      <Footer />
    </div>
  );
};

export default Index;
