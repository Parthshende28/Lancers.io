'use client';

import { motion } from 'framer-motion';
import HorizontalBar from '@/components/HorizontalBar';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Our Process', href: '#process' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Contact', href: '#contact' }
        ],
        services: [
            { name: 'Web Development', href: '#services' },
            { name: 'App Development', href: '#services' },
            { name: 'Graphic Design', href: '#services' },
            { name: 'Sketching', href: '#services' },
        ],
        resources: [
            { name: 'Blog', href: '#' },
            { name: 'Case Studies', href: '#' },
            { name: 'Documentation', href: '#' },
            { name: 'Support', href: '#' }
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
                        <p className="text-[var(--secondary-text)] mb-6 leading-relaxed">
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
                        <h3 className="text-lg font-semibold text-[var(--primary-text)] mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300"
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
                        <h3 className="text-lg font-semibold text-[var(--primary-text)] mb-4">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300"
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
                        <h3 className="text-lg font-semibold text-[var(--primary-text)] mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Newsletter Signup */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-[var(--card-gradient)] p-6 rounded-2xl mb-8"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-2">
                            Stay Updated
                        </h3>
                        <p className="text-[var(--secondary-text)] mb-6">
                            Get the latest updates on our projects and industry insights
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-[var(--surface)] border border-[var(--surface)] rounded-lg text-[var(--primary-text)] placeholder-[var(--secondary-text)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] text-[var(--background)] rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div> */}

                {/* Bottom Bar */}
                <HorizontalBar />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[var(--secondary-text)] text-sm mb-4 md:mb-0">
                        © {currentYear} Lancers.io | All rights reserved | Built with ❤️ by Lancers Team.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}
