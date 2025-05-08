import React, { forwardRef } from "react";
import { CheckIcon } from "@heroicons/react/16/solid";

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="mt-[-3rem] bg-black pb-[3rem]">
            <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                <div>
                    <p className="heading_mini">About Me</p>
                    <h1 className="heading_primary">Professional <span className="text-yellow-400">Website </span> for your business</h1>
                    <p className="text-[15px] mt-[1.3rem] text-white opacity-75">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aperiam saepe dolores labore officia a sed, architecto deserunt ex eligendi? Sed, iste consequatur voluptates deleniti perferendis nulla aliquid. Dolorem, et?</p>
                    <div className="mt-[2rem] space-y-3">
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Frontend Development</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Backend Development</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Python</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">C++</p>
                        </div>

                    </div>
                </div>
                <div className="lg:ml-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
                        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200" className="p-6 text-center bg-yellow-500 ">
                            <p className="text-[50px] text-black font-bold">2</p>
                            <p className="text-[20px] text-black font-600">Years Experience</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400" className="p-6 text-center bg-yellow-500 ">
                            <p className="text-[50px] text-black font-bold">2</p>
                            <p className="text-[20px] text-black font-600">Years Experience</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="600" className="p-6 text-center bg-yellow-500 ">
                            <p className="text-[50px] text-black font-bold">2</p>
                            <p className="text-[20px] text-black font-600">Years Experience</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="800" className="p-6 text-center bg-yellow-500 ">
                            <p className="text-[50px] text-black font-bold">2</p>
                            <p className="text-[20px] text-black font-600">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
AboutMe.displayName = "AboutMe";
export default AboutMe;