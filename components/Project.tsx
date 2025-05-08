import React, { forwardRef } from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="text-center">
                <p className="heading_mini">Recent Works</p>
                <h1 className="heading_primary">
                    My Best <span className="text-yellow-300">Projects</span>
                </h1>
            </div>
            <ProjectCard title="VR Public Speaking Simulator" description="I built this VR simulator to help people conquer their fear of public speaking by immersing them in a virtual auditorium. Using Three.js and WebXR, I created a realistic environment where users can practice speeches in front of an AI-driven audience. The Google Gemini API powers real-time speech processing, allowing the audience to ask dynamic, topic-related questions. On the backend, I used Flask and Socket.IO to handle live audio transcription and Q&A generation. I also designed an intuitive VR interface with floating question prompts, a timer, and interactive controls to keep things engaging. This project was an exciting mix of AI, web tech, and VR, and I had a blast making it!" tech1="Python" tech2="JavaScript" tech3="Google Gemini API" tech4="Socket.IO" image="/image/vr_simulator.png" />
            <ProjectCard title="Phish Email Detector" description="I built this AI-powered phishing email detector to help users spot suspicious emails before they get scammed. Using PyTorch and a transformer model, I trained the system on 18,000+ emails, making sure it could accurately classify phishing attempts. I designed an efficient data pipeline that tokenizes emails for better feature recognition, improving detection accuracy. After just 10 training epochs, the model hit 95% accuracy! On the frontend, I used React.js to create a simple and user-friendly interface, while Flask handled communication with the AI model. This project was a great mix of machine learning, cybersecurity, and full-stack development, and it really opened my eyes to how AI can fight online threats." tech1="Python" tech2="PyTorch" tech3="JavaScript" tech4="Flask" image="/image/phish_email.png" />
            <ProjectCard title="Movie Browser" description="I built this React-based Movie Browser because, like most people, I love movies—but I wanted a better way to browse and discover them. Using the TMDB API, I pulled in real-time movie data and designed a responsive UI that works smoothly across devices. I added real-time search and filtering, so users can quickly find the movies they’re looking for. The best part? The app updates dynamically without needing a refresh, making navigation seamless. This project was a fun dive into frontend development, and it really helped me sharpen my skills in React, JavaScript, and API integration." tech1="HTML/CSS" tech2="React.js" tech3="TMDB API" tech4="JavaScript" image="/image/movie_browser.png" />
            <ProjectCard title="Personal Website" description="I'm building my own portfolio website to showcase my projects, skills, and experience in a way that truly reflects me. Instead of just a static resume, I wanted something interactive, clean, and modern—so I’m using React.js and TypeScript to make it dynamic and smooth. This site is more than just a project; it’s a space where I can share my journey, from AI-driven cybersecurity tools to game development and VR simulations. Plus, it's a great excuse to experiment with new web technologies and refine my frontend skills!" tech1="React" tech2="Next" tech3="Tailwind" tech4="Script" image="/image/portfolio_website.png" />
        </div>
    );
});

export default Project;