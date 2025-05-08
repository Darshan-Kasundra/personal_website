import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Project from "@/components/Project";

import React, { useState } from "react";

const ProjectsPage = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div className="overflow-hidden">
            <NavMobile showNav={showNav} closeNav={closeNavHandler} />
            <Nav openNav={showNavHandler} />
            <Project />            
        </div>
    );
};

export default ProjectsPage;
