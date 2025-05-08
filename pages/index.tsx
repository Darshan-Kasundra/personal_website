import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />

      <Hero />
      {/* You can also keep AboutMe if you want */}
      {/* <AboutMe /> */}

      {/* Maybe a little link/button to "See my Projects" */}
    </div>
  );
}

export default Homepage;