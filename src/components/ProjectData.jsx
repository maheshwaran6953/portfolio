// ProjectData.jsx
import vanguardImg from '../assets/project_vanguard.png';
import helpdeskImg from '../assets/project_helpdesk.png';
import todomoodImg from '../assets/project_todomood.png';
import amazonImg from '../assets/project_amazon.png';
import ragbotImg from '../assets/project_ragbot.png';
import agriconnectImg from '../assets/project_agriconnect.png';
import ambulanceImg from '../assets/project_ambulance.png';
import noveltyImg from '../assets/project_novelty_precheck.png';
import stonepaperscissorsImg from '../assets/project_stonepaperscissors.png';

export const Project = [
    {
        id: 1,
        title: "Vanguard Settlement Engine",
        description: "An enterprise-grade, event-driven B2B liquidity platform using AI risk-scoring and Virtual Account (VAN) orchestration.",
        category: "FinTech",
        image: vanguardImg,
        githubLink: "https://github.com/maheshwaran6953/vanguard-settlement-engine",
        liveLink: "#",
        tech: ["Python", "Node.js", "AI", "B2B"]
    },
    {
        id: 2,
        title: "Smart Helpdesk Ticketing",
        description: "Full-stack ITSM Helpdesk Ticketing System for efficient issue tracking and resolution.",
        category: "Full Stack",
        image: helpdeskImg,
        githubLink: "https://github.com/maheshwaran6953/smart-helpdesk-ticketing",
        liveLink: "https://smart-helpdesk-ticketing-zeta.vercel.app/login",
        tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
        id: 3,
        title: "AgriConnect",
        description: "A smart farming platform for leaf disease detection using AI, a peer-to-peer equipment rental marketplace, and weather-based crop advisories.",
        category: "Full Stack",
        image: agriconnectImg,
        githubLink: "https://github.com/maheshwaran6953/AgriConnect",
        liveLink: "#",
        tech: ["React", "Node.js", "PostgreSQL", "Prisma", "AI"]
    },
    {
        id: 4,
        title: "Ambulance Traffic Clearance System",
        description: "A real-time emergency green corridor dispatching and traffic signal clearance system using ASP.NET Core Web API, SignalR WebSockets, and PostgreSQL.",
        category: "Full Stack",
        image: ambulanceImg,
        githubLink: "https://github.com/maheshwaran6953/Ambulance-Traffic-Clearance-System",
        liveLink: "#",
        tech: ["C#", "ASP.NET Core", "SignalR", "PostgreSQL", "EF Core"]
    },
    {
        id: 5,
        title: "AI Novelty Pre-Check Agent",
        description: "An academic pre-screening tool that extracts technical claims from papers, searches arXiv and Semantic Scholar, and scores similarity using embeddings.",
        category: "Full Stack",
        image: noveltyImg,
        githubLink: "https://github.com/maheshwaran6953/AI-Novelty-Pre-Check-Agent-for-Student-Research-Papers-and-Early-Patent-Disclosures",
        liveLink: "https://ai-novelty-pre-check-agent-for-stud.vercel.app/",
        tech: ["Angular", "NestJS", "PostgreSQL", "Prisma", "AI"]
    },
    {
        id: 6,
        title: "Amazon Project",
        description: "A fully functional e-commerce platform clone with cart and payment integration.",
        category: "Web Development",
        image: amazonImg,
        githubLink: "https://github.com/maheshwaran6953/Amazon-project",
        liveLink: "https://maheshwaran6953.github.io/Amazon-project/",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 7,
        title: "TodoMood",
        description: "AI-powered mood-adaptive task management app that organizes your day based on your emotions.",
        category: "Full Stack",
        image: todomoodImg,
        githubLink: "https://github.com/maheshwaran6953/todomood",
        liveLink: "https://todomood.vercel.app/",
        tech: ["React", "AI", "Local Storage"]
    },
    {
        id: 8,
        title: "RAG Chatbot Endee",
        description: "AI-powered Document Q&A chatbot using Endee vector database for highly accurate information retrieval.",
        category: "Applications",
        image: ragbotImg,
        githubLink: "https://github.com/maheshwaran6953/rag-chatbot-endee",
        liveLink: "#",
        tech: ["Python", "AI", "Vector DB", "RAG"]
    },
    {
        id: 9,
        title: "Stone Paper Scissors Game",
        description: "A simple and interactive web-based Stone Paper Scissors game featuring smooth emoji animations and responsive transitions.",
        category: "Web Development",
        image: stonepaperscissorsImg,
        githubLink: "https://github.com/maheshwaran6953/stone-paper-scissors",
        liveLink: "https://mahesh123.neocities.org/",
        tech: ["HTML", "CSS", "JavaScript"]
    }
];