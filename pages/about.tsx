import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import AboutMe from "@/components/AboutMe";

import React, { useState } from "react";

const AboutMePage = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div className="overflow-hidden">
            <NavMobile showNav={showNav} closeNav={closeNavHandler} />
            <Nav openNav={showNavHandler} />
            <AboutMe />
        </div>
    );
};

export default AboutMePage;
