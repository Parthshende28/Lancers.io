'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
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
        <section id="about" ref={ref} className="pt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
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
                        Meet the <span className="text-[var(--primary-accent)]">Team</span>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto"
                    >
                        Two passionate developers with a shared vision of creating exceptional digital experiences
                    </motion.div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Parth Shende */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="group"
                    >
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 242, 222, 0.2)", borderRadius: "15px" }}
                            className="bg-[var(--card-gradient)] p-8 rounded-2xl border border-[var(--primary-accent)]/10"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--primary-accent)] rounded-full flex items-center justify-center text-2xl font-bold text-[var(--background)] mr-4">
                                    P
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--primary-text)]">Parth Shende</h3>
                                    <p className="text-[var(--secondary-text)]">Founder & Lead Developer</p>
                                </div>
                            </div>
                            <p className="text-[var(--secondary-text)] mb-4">
                                Full-stack developer with expertise in modern web technologies and AI integration.
                                Passionate about creating scalable solutions that drive business growth.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['UI/UX', 'Web & App', 'Animation', 'Design Systems'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-[var(--secondary-accent)]/20 text-[var(--secondary-accent)] rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Rahul Shende */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="group"
                    >
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 242, 222, 0.2)", borderRadius: "15px" }}
                            className="bg-[var(--card-gradient)] p-8 rounded-2xl border border-[var(--primary-accent)]/10"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-full flex items-center justify-center text-2xl font-bold text-[var(--background)] mr-4">
                                    R
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--primary-text)]">Rahul Shende</h3>
                                    <p className="text-[var(--secondary-text)]">Co-Founder & Creative Developer</p>
                                </div>
                            </div>
                            <p className="text-[var(--secondary-text)] mb-4">
                                Creative developer specializing in UI/UX design and frontend architecture.
                                Focused on delivering pixel-perfect, user-centric experiences.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['UI/UX', 'Video Editing', 'Logo Design', 'Sketching'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-[var(--primary-accent)]/20 text-[var(--primary-accent)] rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Our Story */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-[var(--card-gradient)] p-8 md:p-12 rounded-2xl"
                    >
                        <h3 className="text-3xl font-bold text-[var(--primary-text)] mb-6">
                            Our <span className="text-[var(--primary-accent)]">Story</span>
                        </h3>
                        <p className="text-lg text-[var(--secondary-text)] max-w-4xl mx-auto leading-relaxed">
                            After successfully delivering multiple projects for clients, we realized our potential
                            to create something bigger. Lancers.io was born from our shared passion for innovation
                            and our commitment to delivering exceptional digital experiences. We combine technical
                            expertise with creative vision to bring your ideas to life.
                        </p>
                        <motion.div
                            variants={itemVariants}
                            className="mt-8 flex flex-wrap justify-center gap-4"
                        >
                            {[
                                { number: "4+", label: "Years Combined Experience" },
                                { number: "15+", label: "Technologies Mastered" },
                                { number: "100%", label: "Client Satisfaction Rate" },
                                { number: "16/7", label: "Dedicated Support" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-4"
                                >
                                    <div className="text-2xl font-bold text-[var(--primary-accent)] mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-[var(--secondary-text)] text-sm">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
