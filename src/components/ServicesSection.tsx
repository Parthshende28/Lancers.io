'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openQuotePage = () => {
        window.open('/quote', '_blank', 'noopener,noreferrer');
    };

    const services = [
        {
            title: "App Development",
            description: "Native & cross-platform mobile applications built with cutting-edge technologies",
            icon: "📱",
            features: ["React Native", "Flutter", "iOS & Android", "Cross-platform"],
            color: "from-[var(--primary-accent)] to-[var(--secondary-accent)]"
        },
        {
            title: "Website Development",
            description: "Modern, responsive websites that deliver exceptional user experiences",
            icon: "🌐",
            features: ["Next.js", "React", "TypeScript", "SEO Optimized"],
            color: "from-[var(--warning)] to-[var(--secondary-accent)]"
        },
        {
            title: "Graphic Design",
            description: "User-centered design solutions that engage and convert your audience",
            icon: "🎨",
            features: ["Figma", "Photoshop", "Illustrator", "Design Systems"],
            color: "from-[var(--success)] to-[var(--primary-accent)]"
        },
        {
            title: "Branding",
            description: "Memorable brand identities that represent your vision and values",
            icon: "✨",
            features: ["Brand Identity", "Logo Design", "Style Guides", "Brand Strategy"],
            color: "from-[var(--secondary-accent)] to-[var(--warning)]"
        },
        {
            title: "Video Editing",
            description: "Professional video content that tells your story effectively",
            icon: "🎬",
            features: ["Motion Graphics", "After Effects", "Premiere Pro", "Animation"],
            color: "from-[var(--primary-accent)] to-[var(--success)]"
        },
        {
            title: "Sketching",
            description: "Hand-drawn illustrations and concept art for unique visual appeal",
            icon: "✏️",
            features: ["Digital Art", "Concept Design", "Illustration", "Creative Direction"],
            color: "from-[var(--secondary-accent)] to-[var(--primary-accent)]"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
        <section id="services" ref={ref} className="pt-20 px-4 sm:px-6 lg:px-8 bg-[var(--surface)]/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-10"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] mb-6"
                    >
                        Our <span className="text-[var(--primary-accent)]">Services</span>
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto"
                    >
                        Comprehensive digital solutions tailored to your business needs
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            onHoverStart={() => setHoveredService(index)}
                            onHoverEnd={() => setHoveredService(null)}
                            className="group"
                        >
                            <div className="bg-[var(--card-gradient)] p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-[var(--warning)]/8 hover:border-0">
                                {/* Background Gradient Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Icon */}
                                <motion.div
                                    animate={{
                                        scale: hoveredService === index ? 1.2 : 1,
                                        rotate: hoveredService === index ? 10 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl mb-4"
                                >
                                    {service.icon}
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-4 group-hover:text-[var(--primary-accent)] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-[var(--secondary-text)] mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{
                                                opacity: hoveredService === index ? 1 : 0.7,
                                                x: hoveredService === index ? 0 : -20
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay: featureIndex * 0.1
                                            }}
                                            className="flex items-center text-sm text-[var(--secondary-text)]"
                                        >
                                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                                            {feature}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`mt-6 w-full py-3 bg-gradient-to-r ${service.color} text-[var(--background)] rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300`}
                                >
                                    Learn More →
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
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
                        <h3 className="text-3xl font-bold text-[var(--primary-text)] mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-lg text-[var(--secondary-text)] mb-8 max-w-2xl mx-auto">
                            Let&#39;s discuss your requirements and create something amazing together
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                onClick={openQuotePage}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] text-[var(--background)] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Free Quote
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection('contact')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-[var(--primary-accent)] text-[var(--primary-accent)] rounded-full font-semibold text-lg hover:bg-[var(--primary-accent)] hover:text-[var(--background)] transition-all duration-300"
                            >
                                Schedule Call
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
