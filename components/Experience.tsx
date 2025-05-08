import React, { forwardRef, useState, useEffect, useRef } from "react";

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
    const experiences = [
        {
            date: "May 2025 - Aug 2025",
            title: "Maintenance Intern",
            company: "Tenaris",
            description:
                "Currently working on developing apps for the maintenance team.",
        },
        {
            date: "Jul 2024 - Aug 2024",
            title: "Soccer Coach",
            company: "Summer FC",
            description:
                "Led a team of 50+ players in developing their fundamental soccer abilities. Organized and directed practice sessions for 20 athletes per session. Improved overall team and individual skill performance.",
        },
        {
            date: "Jun 2023 - Aug 2024",
            title: "Produce Clerk",
            company: "Food Basics",
            description:
                "Organized produce shipments averaging 800 pieces, maintaining inventory in both retail displays and storage areas. Upheld rigorous quality control standards and achieved 100% compliance with health regulations. Delivered excellent customer service while handling 15+ daily product inquiries.",
        },
        {
            date: "Mar 2020 - Aug 2023",
            title: "Tutor",
            company: "Kumon Math & Reading Centre",
            description:
                "Tutored 100+ students over 3 years to develop their math and/or reading skills. Provided personalized feedback and evaluation on worksheets using effective communication skills. Achieved measurable results, enhancing their reading and math levels by an average of 2 levels per year.",
        },
    ];

    // Create refs array with proper initialization
    const experienceRefs = useRef<Array<HTMLDivElement | null>>(
        Array(experiences.length).fill(null)
    );
    
    const [visibleItems, setVisibleItems] = useState<boolean[]>(
        Array(experiences.length).fill(false)
    );

    useEffect(() => {
        // Configure the intersection observer
        const observerOptions = {
            root: null, // use the viewport as root
            rootMargin: '0px',
            threshold: 0.2 // trigger when 20% of the item is visible
        };

        const observers: IntersectionObserver[] = [];

        // Create observer for each experience item
        experienceRefs.current.forEach((item, index) => {
            if (item) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Make the item visible when it enters the viewport
                            setVisibleItems(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                            // Stop observing after it becomes visible
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);

                observer.observe(item);
                observers.push(observer);
            }
        });

        // Cleanup function to disconnect all observers
        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (
        <div ref={ref} className="relative bg-gray-900 py-20">
            <h1 className="text-4xl text-center font-bold text-white mt-10 mb-20">My Experience</h1>

            {/* Timeline container */}
            <div className="relative w-[90%] mx-auto">
                {/* Vertical line in center - starts after title */}
                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-yellow-400 transform -translate-x-1/2 z-0" />

                <div className="flex flex-col gap-16 relative z-10">
                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        
                        // CSS classes for animation
                        const animationClasses = visibleItems[index] 
                            ? `opacity-100 translate-y-0 ${isLeft ? 'translate-x-0' : 'translate-x-0'}`
                            : `opacity-0 translate-y-8 ${isLeft ? '-translate-x-8' : 'translate-x-8'}`;
                            
                        const transitionClasses = "transition-all duration-700 ease-out";
                        
                        return (
                            <div 
                                key={index} 
                                ref={(el) => {
                                    // Safer way to assign refs
                                    experienceRefs.current[index] = el;
                                }}
                                className={`relative flex justify-center items-center w-full ${transitionClasses} ${animationClasses}`}
                            >
                                {/* Left Text Box */}
                                <div className={`w-[45%] ${isLeft ? 'block' : 'invisible'} text-right pr-8`}>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <p className="text-sm text-yellow-400">{exp.date}</p>
                                        <h4 className="mb-1 text-xl font-bold text-white">{exp.title}</h4>
                                        <h5 className="text-md text-gray-300 mb-2">{exp.company}</h5>
                                        <p className="text-sm text-gray-400">{exp.description}</p>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border-2 border-yellow-400 rounded-full flex items-center justify-center z-20 ${transitionClasses} ${visibleItems[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                </div>

                                {/* Right Text Box */}
                                <div className={`w-[45%] ${!isLeft ? 'block' : 'invisible'} text-left pl-8`}>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <p className="text-sm text-yellow-400">{exp.date}</p>
                                        <h4 className="mb-1 text-xl font-bold text-white">{exp.title}</h4>
                                        <h5 className="text-md text-gray-300 mb-2">{exp.company}</h5>
                                        <p className="text-sm text-gray-400">{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});

Experience.displayName = "Experience";
export default Experience;