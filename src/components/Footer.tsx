'use client';

import { motion } from 'framer-motion';
import HorizontalBar from '@/components/HorizontalBar';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms & Conditions', href: '#terms' }
        ],
        services: [
            { name: 'Graphic Design', href: '#services' },
            { name: 'Website Development', href: '#services' },
            { name: 'Application Development', href: '#services' },
        ],
        resources: [
            { name: 'Blog', href: '#' },
            { name: 'Case Studies', href: '#' },
            { name: 'Documentation', href: '#' },
        ]
    };

    // const socialLinks = [
    //     { name: 'Twitter', href: '#', icon: '𝕏' },
    //     { name: 'LinkedIn', href: '#', icon: '💼' },
    //     { name: 'GitHub', href: '#', icon: '🐙' },
    //     { name: 'Dribbble', href: '#', icon: '🏀' }
    // ];

    return (
        <footer className="bg-[var(--surface)] border-t border-[var(--primary-accent)]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-lg flex items-center justify-center">
                                <span className="text-[var(--background)] font-bold text-lg">L</span>
                            </div>
                            <span className="text-xl font-bold text-[var(--primary-text)]">
                                Lancers.io
                            </span>
                        </div>
                        <p className="text-[var(--secondary-text)] mb-2 leading-relaxed">
                            Powered by Creativity. Driven by AI. Delivered with Precision.
                        </p>
                        {/* <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 bg-[var(--background)]/10 rounded-lg flex items-center justify-center text-[var(--secondary-text)] hover:text-[var(--primary-accent)] hover:bg-[var(--primary-accent)]/10 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--primary-text)] mb-2">
                            Company
                        </h3>
                        <ul className="space-y-1">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300 text-sm md:text-m"
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--primary-text)] mb-2">
                            Services
                        </h3>
                        <ul className="space-y-1">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300 text-sm md:text-m"
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--primary-text)] mb-2">
                            Resources
                        </h3>
                        <ul className="space-y-1">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300 text-sm md:text-m"
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <HorizontalBar />
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <p className="text-[var(--secondary-text)] text-sm">
                        © {currentYear} Lancers.io | All rights reserved | Built with ❤️ by Lancers Team.
                    </p>
                </div>
            </div>
        </footer >
    );
}
