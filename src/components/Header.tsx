'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[var(--surface)]/80 backdrop-blur-md border-b border-[var(--primary-accent)]/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-8 h-8 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-lg flex items-center justify-center">
                            <span className="text-[var(--background)] font-bold text-lg">L</span>
                        </div>
                        <span className="text-xl font-bold text-[var(--primary-text)]">
                            Lancers.io
                        </span>
                    </motion.div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {['About', 'Services', 'Portfolio', 'Process', 'Testimonials'].map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => item === 'Home' ? scrollToTop() : scrollToSection(item)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-200 font-medium"
                            >
                                {item}
                            </motion.button>
                        ))}
                        <motion.a
                            href="/careers"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-200 font-medium"
                        >
                            Careers
                        </motion.a>
                    </nav>


                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden p-2 text-[var(--primary-text)]"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
}
