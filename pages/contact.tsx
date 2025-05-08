import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import React, { useState } from "react";

const ContactPage = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div className="overflow-hidden min-h-screen bg-gray-900">
            <NavMobile showNav={showNav} closeNav={closeNavHandler} />
            <Nav openNav={showNavHandler} />
            <Contact />
            {/* <Footer /> */}
            
        </div>
    );
};

export default ContactPage;
