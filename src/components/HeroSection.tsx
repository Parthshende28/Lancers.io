'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [animatedElements, setAnimatedElements] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Generate animated elements on client-side only to avoid hydration mismatch
        const elements = Array.from({ length: 20 }, (_, i) => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
        setAnimatedElements(elements);

        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                const xPos = (clientX / innerWidth) * 100;
                const yPos = (clientY / innerHeight) * 100;

                heroRef.current.style.background = `
          radial-gradient(circle at ${xPos}% ${yPos}%, 
            rgba(0, 212, 255, 0.1) 0%, 
            rgba(255, 107, 53, 0.05) 50%, 
            transparent 70%
          )
        `;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: 'var(--hero-gradient)' }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {animatedElements.map((element, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[var(--primary-accent)] rounded-full opacity-20"
                        style={{
                            left: `${element.left}%`,
                            top: `${element.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: element.duration,
                            repeat: Infinity,
                            delay: element.delay,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                        <span className=" text-[var(--primary-text)]">Lancers</span>
                        <span className=" bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] bg-clip-text text-transparent">
                            .io
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-8"
                >
                    <p className="text-xl md:text-2xl text-[var(--secondary-text)] mb-4">
                        Powered by Creativity. Driven by AI. Delivered with Precision.
                    </p>
                    <p className="text-lg text-[var(--secondary-text)]/80 max-w-3xl mx-auto">
                        We combine cutting-edge AI technology with rocket-science expertise to build
                        websites and apps faster, smarter, and tailored to your vision.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.button
                        onClick={() => scrollToSection('contact')}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] text-[var(--background)] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                    >
                        Start Your Project
                    </motion.button>

                    <motion.button
                        onClick={() => scrollToSection('portfolio')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-[var(--primary-accent)] text-[var(--primary-accent)] rounded-full font-semibold text-lg hover:bg-[var(--primary-accent)] hover:text-[var(--background)] transition-all duration-300"
                    >
                        View Our Work
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { number: "4+", label: "Projects Completed" },
                        { number: "2", label: "Expert Developers" },
                        { number: "100%", label: "Client Satisfaction" },
                        { number: "16/7", label: "Support Available" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-[var(--primary-accent)] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-[var(--secondary-text)] text-sm md:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-[var(--primary-accent)] rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-[var(--primary-accent)] rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
