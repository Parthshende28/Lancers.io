'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Piyush Tembhekar",
            role: "Financial Advisor",
            product: "Planitt",
            content: "Lancers.io transformed our financial planning platform with cutting-edge AI integration. The team's expertise in data visualization exceeded our expectations. Our clients now can plan their financial decisions easily.",
            rating: 5,

        },
        {
            id: 2,
            name: "Vipin Soni",
            role: "Mauryan Jewels",
            product: "Bhav App",
            content: "The Bhav app revolutionized how we track bullion investments. The real-time market updates and secure payment integration have streamlined our operations significantly. The team's attention to security and user experience is outstanding.",
            rating: 4.6,

        },
        {
            id: 3,
            name: "Mohak Wankhede",
            role: "Fashion Brand Owner",
            product: "Zeynix.Co",
            content: "Working with Lancers.io was a game-changer for our e-commerce platform. They delivered a seamless shopping experience with robust payment systems and intuitive product management. Our sales have increased by 40% since the launch.",
            rating: 4.9,

        },
        {
            id: 4,
            name: "Mubashshir Ali",
            role: "Crypto Startup Founder",
            product: "Krypsm",
            content: "The Krypsm platform showcases Lancers.io's mastery of complex financial applications. Their implementation of advanced security measures and blockchain integration has given us a competitive edge in the crypto market. Exceptional work!",
            rating: 4.7,

        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000); // Change testimonial every 4 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] mb-6">
                        Client <span className="text-[var(--primary-accent)]">Testimonials</span>
                    </h2>
                    <p className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto">
                    Don&#39;t just take our word for it. Here&#39;s what our satisfied clients have to say
                        about their experience working with Lancers.io.
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-[var(--card-gradient)] rounded-3xl p-8 lg:p-12"
                            >
                                <div className="max-w-4xl mx-auto">
                                    {/* Quote Icon */}
                                    <div className="flex justify-center mb-8">
                                        <div className="bg-[var(--primary-accent)] p-4 rounded-full">
                                            <svg className="h-8 w-8 text-[var(--background)]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Testimonial Content */}
                                    <div className="text-center space-y-6 ">
                                        <p className="text-xl lg:text-2xl text-[var(--secondary-text)] leading-relaxed italic">
                                            &ldquo;{testimonials[currentIndex].content}&rdquo;
                                        </p>

                                        {/* Rating */}
                                        <div className="flex justify-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.svg
                                                    key={i}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className={`h-6 w-6 ${i < Math.floor(testimonials[currentIndex].rating)
                                                        ? 'text-[var(--warning)]'
                                                        : i < testimonials[currentIndex].rating
                                                            ? 'text-[var(--warning)]/50'
                                                            : 'text-[var(--secondary-text)]/30'
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </motion.svg>
                                            ))}
                                        </div>

                                        {/* Client Info */}
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-[var(--primary-text)]">
                                                {testimonials[currentIndex].name}
                                            </h3>
                                            <p className="text-[var(--secondary-text)]">
                                                {testimonials[currentIndex].product}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.button
                        onClick={prevTestimonial}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[var(--surface)] hover:bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] hover:text-[var(--primary-text)] p-3 rounded-full shadow-lg transition-all duration-200 border border-[var(--primary-accent)]/20"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    <motion.button
                        onClick={nextTestimonial}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[var(--surface)] hover:bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] hover:text-[var(--primary-text)] p-3 rounded-full shadow-lg transition-all duration-200 border border-[var(--primary-accent)]/20"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-8">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                ? 'bg-[var(--primary-accent)] scale-125'
                                : 'bg-[var(--secondary-text)]/30 hover:bg-[var(--secondary-text)]/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
