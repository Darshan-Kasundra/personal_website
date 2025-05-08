import React, { forwardRef } from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="pt-[5rem] pb-[3rem] bg-gray-900 overflow-hidden">
            <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                <div className="col-span-3">
                    <p className="heading_mini">My Skills</p>
                    <h1 className="heading_primary">
                        {"Let's Explore Some"} <span className="text-yellow-300">Skills</span>
                    </h1>
                    <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">Over my software journey, I have picked up on many technical skills. Just some of these are listed here. </p>
                    {/* <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                        <span className="relative z-10">Learn More</span>
                    </button> */}
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center">
                            <SkillCard title="Python" image="/image/python.svg" percent="90%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                            <SkillCard title="C/C++" image="/image/c-plus-plus.svg" percent="90%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                            <SkillCard title="JavaScript" image="/image/javascript.svg" percent="90%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                            <SkillCard title="C#" image="/image/c-sharp.svg" percent="90%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
                            <SkillCard title="HTML/CSS" image="/image/css.svg" percent="90%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                            <SkillCard title="React" image="/image/react.svg" percent="90%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
                            <SkillCard title="Assembly" image="/image/assembly.svg" percent="90%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1400">
                            <SkillCard title="Verilog HDL" image="/image/verilog.svg" percent="90%" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
});
Skills.displayName = "Skills";
export default Skills;
