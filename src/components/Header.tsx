'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        const id = sectionId.toLowerCase();
        if (pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                router.push(`/#${id}`);
            }
        } else {
            router.push(`/#${id}`);
        }
        setIsMenuOpen(false);
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
                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/careers"
                                prefetch
                                className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-200 font-medium"
                            >
                                Careers
                            </Link>
                        </motion.div>
                    </nav>


                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen((v) => !v)}
                        aria-label="Toggle navigation"
                        className="md:hidden p-2 text-[var(--primary-text)]"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Nav Panel */}
            <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden overflow-hidden border-t border-[var(--primary-accent)]/20"
            >
                <div className="px-4 sm:px-6 lg:px-8 py-3 bg-[var(--surface)]/80 backdrop-blur-md">
                    <div className="flex flex-col space-y-3">
                        {['About', 'Services', 'Portfolio', 'Process', 'Testimonials'].map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => item === 'Home' ? scrollToTop() : scrollToSection(item)}
                                whileTap={{ scale: 0.98 }}
                                className="text-left text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-200 font-medium"
                            >
                                {item}
                            </motion.button>
                        ))}
                        <motion.div whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/careers"
                                prefetch
                                className="text-left text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-200 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Careers
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>
        </motion.header>
    );
}
