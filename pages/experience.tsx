import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Experience from "@/components/Experience";

import React, { useState } from "react";

const ExperiencePage = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div className="overflow-hidden">
            <NavMobile showNav={showNav} closeNav={closeNavHandler} />
            <Nav openNav={showNavHandler} />
            <Experience />
        </div>
    );
};

export default ExperiencePage;
