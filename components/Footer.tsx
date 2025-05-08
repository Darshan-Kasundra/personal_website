import React from "react";

const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-black">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
                <div>
                    <div className="font-logo text-white text-[18px]">
                        <span className="text-[30px] md:text[40px] text-yellow-400">DK</span>Darshan
                    </div>
                    <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error, aperiam reprehenderit sit eaque ullam tempore provident dolorem veniam! Quo nesciunt facere dolore nisi, ducimus animi fuga excepturi repellendus reprehenderit.
                    </h1>
                    <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
                        example@gmail.com
                    </p>
                </div>

                <div className="md:mx-auto">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
                        Quick Link
                    </h1>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">About</p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">Services</p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">Projects</p>
                    <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">Contact</p>
                </div>
            </div>
            <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
                &#169; Copyright webdev warriors 2025
            </div>
        </div>
    );
};

export default Footer;