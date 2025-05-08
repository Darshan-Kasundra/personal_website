import React, { useEffect } from "react";
import Image from "next/image";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    // Re-enable AOS with careful configuration
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true, // Ensures animations only occur once
            disable: 'mobile', // Better performance on mobile
            startEvent: 'DOMContentLoaded',
            disableMutationObserver: false,
            mirror: false
        });
    }, []);

    return (
        <div className="w-full pt-16 md:pt-32 h-screen bg-gray-900">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 data-aos="fade-right" className="text-white mb-5">Welcome to my world !!</h1>
                        <div data-aos="fade-left" data-aos-delay="300">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-10 text-white">{"Hi, I'm"} <span className="text-yellow-500">Darshan</span>
                            </h1>
                            <TypeWriteEffect />
                        </div>
                        <p data-aos="fade-up" data-aos-delay="600" className="mt-5 text-sm md:text-base text-white">
                            Throughout my life, I always knew that I wanted to combine software & hardware and help the world be a better place - which led me to where I am today, a combination of all those things - a Computer Engineer at the University of Toronto.
                        </p>
                        
                        {/* Button with animations but ensuring visibility */}
                        <div className="mt-8 flex items-center space-x-6">
                            <a
                                href="/Darshan_Kasundra_Resume.pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-60"
                                data-aos="fade-up" 
                                data-aos-delay="800"
                                data-aos-duration="500"
                                data-aos-offset="0" 
                                data-aos-anchor-placement="top-bottom"
                            >
                                <button
                                    className="h-12 w-60 bg-orange-500 text-black font-bold rounded-md shadow-lg border border-blue-400 hover:bg-blue-700 hover:border-blue-600 hover:text-white transition-colors duration-300"
                                >
                                    Download Resume
                                </button>
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="1000" className="hidden md:block">
                        <Image src="/image/hero.png" alt="hero" width={500} height={500} className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;