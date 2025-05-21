import { useState } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-blue-50">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
