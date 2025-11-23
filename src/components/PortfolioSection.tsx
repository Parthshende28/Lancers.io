'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import planitt from "../../public/images/planitt.png";
import bhav from "../../public/images/bhav.png";
import zeynix from "../../public/images/zeynix.png";
import krypsm from "../../public/images/krypsm.png";
import Image from 'next/image';

export default function PortfolioSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const handleProjectClick = (link: string) => {
        if (link && link !== "#") {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    const projects = [
        {
            id: 1,
            title: "Planitt",
            category: "Web Development",
            description: "Full-stack financial planning solution with AI-powered recommendations and advanced analytics graphs.",
            image: planitt,
            technologies: ["Next.js", "Node & Express", "MongoDB", "GSAP", "ThreeJS"],
            status: "Completed",
            year: "2025",
            client: "Financial Advisor",
            link: "https://planitt.in/"
        },
        {
            id: 2,
            title: "Bhav App",
            category: "App Development",
            description: "Secure mobile bullion tracking application with real-time and live market updates.",
            image: bhav,
            technologies: ["React Native", "Node.js", "MongoDB", "Security", "Payment Gateway"],
            status: "Completed",
            year: "2025",
            client: "Mauryan Jewels",
            link: ""
        },
        {
            id: 3,
            title: "Zeynix.Co",
            category: "Web Development",
            description: "E-commerce website for a clothing brand with secured payment gateway and product management system.",
            image: zeynix,
            technologies: ["Next.js", "React", "TailwindCSS", "Payment Gateway", "MongoDB"],
            status: "Completed",
            year: "2025",
            client: "Zeynix.Co",
            link: "https://www.zeynix.in/"
        },
        {
            id: 4,
            title: "Krypsm",
            category: "Web Development",
            description: "Complete brand identity for a crypto asset management startup with advanced trading features.",
            image: krypsm,
            technologies: ["Next.js", "React", "TailwindCSS", "Firebase", "Google Auth", "Security"],
            status: "Completed",
            year: "2024",
            client: "Krypsm",
            link: "https://www.krypsm.com/"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section id="portfolio" ref={ref} className="pt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-10"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] mb-6"
                    >
                        Our <span className="text-[var(--primary-accent)]">Impact</span>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto"
                    >
                        Hover to explore our projects and discover the stories behind our work
                    </motion.div>
                </motion.div>

                {/* Portfolio Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            onClick={() => handleProjectClick(project.link)}
                            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            {/* Project Image/Thumbnail */}
                            <div className="relative w-full h-full">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className={`w-full h-full flex items-center justify-center`}>
                                        <div className="text-8xl opacity-60">
                                            {project.category === 'Web Development' && '🌐'}
                                            {project.category === 'App Development' && '📱'}
                                            {project.category === 'Design' && '🎨'}
                                        </div>
                                    </div>
                                )}

                                {/* Overlay - Darkens on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3 py-1 bg-[var(--success)]/20 text-[var(--success)] rounded-full text-sm font-medium backdrop-blur-sm">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Hover Content - Slides up from bottom */}
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{
                                        y: hoveredProject === project.id ? "0%" : "100%",
                                        opacity: hoveredProject === project.id ? 1 : 0
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                                >
                                    {/* Project Title */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: hoveredProject === project.id ? 0 : 20,
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ delay: 0.1, duration: 0.3 }}
                                        className="flex items-center gap-2 mb-2"
                                    >
                                        <h3 className="text-2xl font-bold">
                                            {project.title}
                                        </h3>

                                        {/* App Store Icons for Bhav */}
                                        {project.title === "Bhav App" && (
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{
                                                    y: hoveredProject === project.id ? 0 : 20,
                                                    opacity: hoveredProject === project.id ? 1 : 0
                                                }}
                                                transition={{ delay: 0.35, duration: 0.3 }}
                                                className="flex ml-2 gap-5"
                                            >
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.vipinsoni.bhav"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="transition-all duration-300"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
                                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    href="https://apps.apple.com/app/bhav"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="transition-all duration-300"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" fill="currentColor">
                                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                                    </svg>
                                                </a>
                                            </motion.div>
                                        )}

                                        {(project.title === "Planitt" || project.title === "Zeynix.Co" || project.title === "Krypsm") && (
                                            <motion.div
                                                initial={{ x: 10, opacity: 0 }}
                                                animate={{
                                                    x: hoveredProject === project.id ? 0 : 10,
                                                    opacity: hoveredProject === project.id ? 1 : 0
                                                }}
                                                transition={{ delay: 0.15, duration: 0.3 }}
                                                className="text-white/80 group-hover:text-white transition-colors duration-300"
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                                >
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                </svg>
                                            </motion.div>
                                        )}
                                    </motion.div>

                                    {/* Category & Year */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: hoveredProject === project.id ? 0 : 20,
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ delay: 0.15, duration: 0.3 }}
                                        className="flex items-center gap-3 mb-3"
                                    >
                                        <span className="px-2 py-1 bg-[var(--primary-accent)]/20 text-[var(--primary-accent)] rounded-full text-xs font-medium">
                                            {project.category}
                                        </span>
                                        <span className="text-sm text-gray-300">{project.year}</span>
                                    </motion.div>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: hoveredProject === project.id ? 0 : 20,
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ delay: 0.2, duration: 0.3 }}
                                        className="text-sm text-gray-200 mb-4 leading-relaxed line-clamp-3"
                                    >
                                        {project.description}
                                    </motion.p>

                                    {/* Project Details */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: hoveredProject === project.id ? 0 : 20,
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ delay: 0.25, duration: 0.3 }}
                                        className="flex items-center justify-between text-xs text-gray-300 mb-4"
                                    >
                                        <span>Client: {project.client}</span>
                                    </motion.div>

                                    {/* Technologies */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: hoveredProject === project.id ? 0 : 20,
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ delay: 0.3, duration: 0.3 }}
                                        className="flex flex-wrap gap-1 mb-4"
                                    >
                                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-white/10 text-white rounded-full text-xs backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-2 py-1 bg-white/10 text-white rounded-full text-xs backdrop-blur-sm">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </motion.div>



                                    {/* CTA Buttons */}
                                    {/* <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: hoveredProject === project.id ? 0 : 20,
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ delay: 0.35, duration: 0.3 }}
                                        className="flex gap-2"
                                    >
                                        <motion.button

                                            whileTap={{ scale: 0.95 }}
                                            className={`flex-1 py-2 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300`}
                                        >
                                            View Project
                                        </motion.button>
                                        <motion.button

                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                        >
                                            Details
                                        </motion.button>
                                    </motion.div> */}
                                </motion.div>

                                {/* Subtle Glow Effect */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    initial={{ scale: 0.8 }}

                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-[var(--card-gradient)] p-8 md:p-12 rounded-2xl text-center"
                    >
                        <h3 className="text-3xl font-bold text-[var(--primary-text)] mb-8">
                            Project <span className="text-[var(--primary-accent)]">Impact</span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "4+", label: "Projects Delivered" },
                                { number: "100%", label: "On-Time Delivery" },
                                { number: "50+", label: "Technologies Used" },
                                { number: "100%", label: "Client Satisfaction" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl font-bold text-[var(--primary-accent)] mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-[var(--secondary-text)]">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}