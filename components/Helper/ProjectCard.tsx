import Image from "next/image";
import React from "react";

interface Props {
    image: string;
    title: string;
    description: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
}

const ProjectCard = ({ image, tech1, tech2, tech3, tech4, title, description }: Props) => {
    return (
        <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
                <Image src={`${image}`} alt={title} width={500} height={500} className="object-contain rounded-xl mx-auto shadow-md" />
            </div>
            <div className="flex flex-col h-full">
                <h1 className="text-[25px] text-white">{title}</h1>
                <p className="text-white opacity-65 text-[15px] mt-[1rem]">{description}</p>
                <div className="mt-[1.3rem] flex-1 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div className="w-full">
                        <h1 className="w-full h-12 flex items-center justify-center bg-blue-700 text-white rounded-lg text-center">
                            {tech1}
                        </h1>
                    </div>
                    <div className="w-full">
                        <h1 className="w-full h-12 flex items-center justify-center bg-white text-black rounded-lg text-center">
                            {tech2}
                        </h1>
                    </div>
                    <div className="w-full">
                        <h1 className="w-full h-12 flex items-center justify-center bg-sky-500 text-black rounded-lg text-center">
                            {tech3}
                        </h1>
                    </div>
                    <div className="w-full">
                        <h1 className="w-full h-12 flex items-center justify-center bg-blue-500 text-white rounded-lg text-center">
                            {tech4}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;