'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setFormData({ name: '', email: '', project: '', message: '' });

        // Show success message (you can implement a toast notification here)
        alert('Thank you for your message! We\'ll get back to you soon.');
    };

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
        <section id="contact" ref={ref} className="pt-25 pb-15 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] mb-6"
                    >
                        Get In <span className="text-[var(--primary-accent)]">Touch</span>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto"
                    >
                        Ready to bring your ideas to life? Let&#39;s start a conversation about your next project.
                    </motion.div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-[var(--card-gradient)] pt-0 p-8 rounded-2xl"
                        >
                            <h3 className="text-center md:text-left text-2xl font-bold text-[var(--primary-text)] mb-6">
                                Let&#39;s Talk About Your Project
                            </h3>
                            <p className="text-center md:text-left text-[var(--secondary-text)] mb-8 leading-relaxed">
                                We&#39;re excited to hear about your vision and help you create something amazing.
                                Whether you have a clear idea or just a concept, we&#39;re here to guide you through
                                the entire process.
                            </p>

                            {/* Contact Methods */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: "📧",
                                        title: "Email Us",
                                        value: "lancersio.official@gmail.com",
                                        description: "Send us an email anytime"
                                    },
                                    {
                                        icon: "📱",
                                        title: "Call Us",
                                        value1: "+91 91454 02183",
                                        value2: "+91 75838 63776",
                                        description: "Mon-Fri from 9am to 6pm"
                                    },
                                    {
                                        icon: "💬",
                                        title: "WhatsApp",
                                        value1: "+91 91454 02183",
                                        value2: "+91 75838 63776",
                                        description: "Quick responses"
                                    }
                                ].map((contact, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center p-4 bg-[var(--surface)]/50 rounded-lg hover:bg-[var(--surface)]/80 transition-colors duration-300"
                                    >
                                        <div className="text-2xl mr-4">{contact.icon}</div>
                                        <div className='space-y-1'>
                                            <h4 className="font-semibold text-[var(--primary-text)]">{contact.title}</h4>
                                            <p className="text-sm md:text-lg text-[var(--primary-accent)] font-medium">{contact.value}</p>
                                            <div className='md:flex md:flex-col-2 md:gap-4 space-y-1'>
                                                <p className="text-sm md:text-lg text-[var(--primary-accent)] font-medium">{contact.value1}</p>
                                                <p className="text-sm md:text-lg text-[var(--primary-accent)] font-medium">{contact.value2}</p>
                                            </div>
                                            <p className="text-sm text-[var(--secondary-text)]">{contact.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Why Choose Us */}
                        {/* <motion.div
                            variants={itemVariants}
                            className="bg-[var(--card-gradient)] p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-6">
                                Why Choose Lancers.io?
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "AI-powered development for faster delivery",
                                    "Personalized approach to every project",
                                    "Transparent communication throughout",
                                    "Post-launch support and maintenance",
                                    "Competitive pricing with no hidden costs"
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-center"
                                    >
                                        <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-3" />
                                        <span className="text-[var(--secondary-text)]">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div> */}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-[var(--card-gradient)] pt-0 p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-6">
                                Send us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <motion.div
                                        variants={itemVariants}
                                        className="space-y-2"
                                    >
                                        <label className="block text-sm font-medium text-[var(--primary-text)]">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--surface)] rounded-lg text-[var(--primary-text)] placeholder-[var(--secondary-text)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors duration-300"
                                            placeholder="Your full name"
                                        />
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="space-y-2"
                                    >
                                        <label className="block text-sm font-medium text-[var(--primary-text)]">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--surface)] rounded-lg text-[var(--primary-text)] placeholder-[var(--secondary-text)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    variants={itemVariants}
                                    className="space-y-2"
                                >
                                    <label className="block text-sm font-medium text-[var(--primary-text)]">
                                        Project Type
                                    </label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--surface)] rounded-lg text-[var(--primary-text)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors duration-300"
                                    >
                                        <option value="">Select a project type</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="app-development">App Development</option>
                                        <option value="ui-ux-design">UI/UX Design</option>
                                        <option value="logo-creation">Logo Creation</option>
                                        <option value="video-editing">Video Editing</option>
                                        <option value="sketching">Sketching</option>
                                        <option value="consultation">Consultation</option>
                                    </select>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="space-y-2"
                                >
                                    <label className="block text-sm font-medium text-[var(--primary-text)]">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--surface)] rounded-lg text-[var(--primary-text)] placeholder-[var(--secondary-text)] focus:border-[var(--primary-accent)] focus:outline-none transition-colors duration-300 resize-none"
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                    />
                                </motion.div>

                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] text-[var(--background)] rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-[var(--primary-accent)]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-[var(--background)] border-t-transparent rounded-full animate-spin mr-2" />
                                            Sending Message...
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
