'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "We start by understanding your vision, goals and requirements through detailed consultation.",
            icon: "🔍",
            details: [
                "Project scope definition",
                "Technical requirements analysis",
                "Timeline and budget planning",
                "Stakeholder interviews"
            ]
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Creating wireframes, mockups, and interactive prototypes to visualize your project.",
            icon: "🎨",
            details: [
                "User experience design",
                "Visual design creation",
                "Interactive prototyping",
                "Design system development"
            ]
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Building your solution with clean, efficient, scalable code, and rigorous testing protocols approach.",
            icon: "⚡",
            details: [
                "Agile development process",
                "Code review and optimization",
                "Quality assurance testing",
                "Performance optimization"
            ]
        },
        {
            step: "04",
            title: "Deployment & Launch",
            description: "Launching your project with proper deployment, monitoring, and ongoing support.",
            icon: "🚀",
            details: [
                "Production deployment",
                "Performance monitoring",
                "User training & documentation",
                "Ongoing maintenance support"
            ]
        }
    ];

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
        <section id="process" ref={ref} className="pt-20 px-4 sm:px-6 lg:px-8 bg-[var(--surface)]/30">
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
                        Our <span className="text-[var(--primary-accent)]">Process</span>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto"
                    >
                        A proven methodology that ensures successful project delivery
                    </motion.div>
                </motion.div>

                {/* Process Steps */}
                <div className="relative">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid lg:grid-cols-4 gap-8"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.05, boxShadow: "0 0 15px rgba(255, 242, 222, 0.2)", borderRadius: "15px" }}
                                className="relative group"
                            >
                                <div className="bg-[var(--card-gradient)] p-8 rounded-2xl  hover:shadow-xl transition-all duration-300 h-full border border-[var(--primary-accent)]/10">
                                    {/* Step Number */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-16 h-16 rounded-full flex items-center text-2xl font-bold text-[var(--primary-text)] underline`}>
                                            {step.step}
                                        </div>
                                        <div className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-4 group-hover:text-[var(--primary-accent)] transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    <p className="text-[var(--secondary-text)] mb-6 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-2">
                                        {step.details.map((detail, detailIndex) => (
                                            <motion.div
                                                key={detailIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        duration: 0.3,
                                                        delay: detailIndex * 0.1
                                                    }
                                                }}
                                                className="flex items-center text-sm text-[var(--secondary-text)]"
                                            >
                                                <div className={`w-2 h-2 bg-gradient-to-r from-[var(--warning)] to-[var(--secondary-accent)] rounded-full mr-3`} />
                                                {detail}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Why Choose Lancers */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-10"
                >
                    <motion.div
                        variants={itemVariants}
                        className="bg-[var(--card-gradient)] p-8 md:p-12 rounded-2xl"
                    >
                        <div className="text-center mb-5">
                            <h3 className="text-3xl font-bold text-[var(--primary-text)] mb-4">
                                Why Choose <span className="text-[var(--primary-accent)]">Lancers</span>?
                            </h3>
                            <p className="text-lg text-[var(--secondary-text)] max-w-3xl mx-auto">
                                Our methodology is designed to deliver exceptional results while maintaining transparency and communication throughout the project lifecycle.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Transparent Communication",
                                    description: "Regular updates and open communication channels ensure you&#39;re always informed about project progress.",
                                    icon: "💬"
                                },
                                {
                                    title: "Agile Methodology",
                                    description: "Flexible approach that adapts to changing requirements and delivers incremental value.",
                                    icon: "🔄"
                                },
                                {
                                    title: "Quality Assurance",
                                    description: "Rigorous testing and code review processes ensure high-quality, bug-free deliverables.",
                                    icon: "✅"
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center p-6 "
                                >
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h4 className="text-xl font-bold text-[var(--primary-text)] mb-3">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-[var(--secondary-text)]">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="p-8 md:p-12 md:pt-0 rounded-2xl"
                    >
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-lg mb-5 max-w-2xl mx-auto">
                            Let&#39;s discuss your project & see how our process can bring your vision to life
                        </p>
                        <motion.button
                            onClick={() => scrollToSection('contact')}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-[var(--primary-accent)] hover:bg-[var(--primary-text)] rounded-full font-semibold text-lg hover:text-[var(--background)] hover:shadow-xl transition-all duration-300"
                        >
                            Start Your Project
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
