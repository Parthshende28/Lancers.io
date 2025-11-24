'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type PlanType = 'website' | 'app' | 'both';
type ComplexityType = 'basic' | 'intermediate' | 'advanced';

export default function QuotePage() {
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('website');
    const [complexity, setComplexity] = useState<ComplexityType>('basic');
    const [additionalServices, setAdditionalServices] = useState<string[]>([]);

    const basePrice = 60000;
    const complexityMultipliers = {
        basic: 1,
        intermediate: 1.5,
        advanced: 2.2
    };

    const additionalServicePrices = {
        'ui-ux': 15000,
        'content': 8000,
        'seo': 12000,
        'analytics': 5000,
        'testing': 10000
    };

    const calculatePrice = () => {
        let total = basePrice * complexityMultipliers[complexity];
        additionalServices.forEach(service => {
            total += additionalServicePrices[service as keyof typeof additionalServicePrices] || 0;
        });
        return total;
    };

    const handleServiceToggle = (service: string) => {
        setAdditionalServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--primary-text)]">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[var(--surface)] border-b border-[var(--primary-accent)]/20 py-6"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[var(--primary-accent)] rounded-lg flex items-center justify-center">
                                <span className="text-[var(--background)] font-bold text-xl">L</span>
                            </div>
                            <h1 className="text-2xl font-bold text-[var(--primary-text)]">Lancers.io</h1>
                        </div>
                        <div className="text-[var(--secondary-text)]">
                            Custom Development Quote
                        </div>
                    </div>
                </div>
            </motion.header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] mb-6">
                        Get Your <span className="text-[var(--primary-accent)]">Custom Quote</span>
                    </h2>
                    <p className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto mb-8">
                        Let&#39;s build something extraordinary together. Our transparent pricing ensures you get exactly what you need,
                        when you need it, with no hidden surprises.
                    </p>
                    <div className="inline-block bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/30 rounded-full px-6 py-3">
                        <span className="text-[var(--primary-accent)] font-semibold">
                            🚀 Powered by Creativity. Driven by AI. Delivered with Precision.
                        </span>
                    </div>
                </motion.div>

                {/* Project Type Selection */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-6 text-center">
                        What are you looking to build?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {([
                            { id: 'website', title: 'Website Development', desc: 'Professional websites with modern design', icon: '🌐' },
                            { id: 'app', title: 'App Development', desc: 'Mobile and web applications', icon: '📱' },
                            { id: 'both', title: 'Full-Stack Solution', desc: 'Complete digital ecosystem', icon: '⚡' }
                        ] as Array<{ id: PlanType; title: string; desc: string; icon: string }>).map((option) => (
                            <motion.button
                                key={option.id}
                                onClick={() => setSelectedPlan(option.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${selectedPlan === option.id
                                    ? 'border-[var(--primary-accent)] bg-[var(--primary-accent)]/10'
                                    : 'border-[var(--secondary-text)]/30 hover:border-[var(--primary-accent)]/50'
                                    }`}
                            >
                                <div className="text-4xl mb-4">{option.icon}</div>
                                <h4 className="text-xl font-bold text-[var(--primary-text)] mb-2">{option.title}</h4>
                                <p className="text-[var(--secondary-text)]">{option.desc}</p>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Complexity Selection */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-6 text-center">
                        Project Complexity
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {([
                            {
                                id: 'basic',
                                title: 'Basic',
                                desc: 'Simple websites/apps with standard features',
                                features: ['Responsive Design', 'Basic Functionality', 'Standard UI/UX'],
                                multiplier: '1x'
                            },
                            {
                                id: 'intermediate',
                                title: 'Intermediate',
                                desc: 'Advanced features with custom integrations',
                                features: ['Custom Features', 'API Integrations', 'Advanced UI/UX'],
                                multiplier: '1.5x'
                            },
                            {
                                id: 'advanced',
                                title: 'Advanced',
                                desc: 'Complex systems with AI and real-time features',
                                features: ['AI Integration', 'Real-time Features', 'Complex Backend'],
                                multiplier: '2.2x'
                            }
                        ] as Array<{ id: ComplexityType; title: string; desc: string; features: string[]; multiplier: string }>).map((option) => (
                            <motion.button
                                key={option.id}
                                onClick={() => setComplexity(option.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${complexity === option.id
                                    ? 'border-[var(--primary-accent)] bg-[var(--primary-accent)]/10'
                                    : 'border-[var(--secondary-text)]/30 hover:border-[var(--primary-accent)]/50'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-xl font-bold text-[var(--primary-text)]">{option.title}</h4>
                                    <span className="text-[var(--primary-accent)] font-bold">{option.multiplier}</span>
                                </div>
                                <p className="text-[var(--secondary-text)] mb-4">{option.desc}</p>
                                <ul className="text-sm text-[var(--secondary-text)] space-y-1">
                                    {option.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="text-[var(--primary-accent)] mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Additional Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-6 text-center">
                        Additional Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { id: 'ui-ux', title: 'UI/UX Design', price: '₹15,000', desc: 'Custom design system and user experience' },
                            { id: 'content', title: 'Content Creation', price: '₹8,000', desc: 'Professional copywriting and content strategy' },
                            { id: 'seo', title: 'SEO Optimization', price: '₹12,000', desc: 'Search engine optimization and analytics setup' },
                            { id: 'analytics', title: 'Analytics Setup', price: '₹5,000', desc: 'Google Analytics and tracking implementation' },
                            { id: 'testing', title: 'Quality Assurance', price: '₹10,000', desc: 'Comprehensive testing and bug fixes' }
                        ].map((service) => (
                            <motion.button
                                key={service.id}
                                onClick={() => handleServiceToggle(service.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 ${additionalServices.includes(service.id)
                                    ? 'border-[var(--primary-accent)] bg-[var(--primary-accent)]/10'
                                    : 'border-[var(--secondary-text)]/30 hover:border-[var(--primary-accent)]/50'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-bold text-[var(--primary-text)]">{service.title}</h4>
                                    <span className="text-[var(--primary-accent)] font-bold">{service.price}</span>
                                </div>
                                <p className="text-sm text-[var(--secondary-text)]">{service.desc}</p>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Price Calculation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-12"
                >
                    <div className="bg-[var(--card-gradient)] rounded-2xl p-8 border border-[var(--primary-accent)]/20">
                        <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-6 text-center">
                            Your Estimated Investment
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-[var(--secondary-text)]/20">
                                <span className="text-[var(--secondary-text)]">Base Development ({selectedPlan === 'both' ? 'Full-Stack' : selectedPlan === 'website' ? 'Website' : 'App'})</span>
                                <span className="text-[var(--primary-text)] font-bold">₹{basePrice.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-[var(--secondary-text)]/20">
                                <span className="text-[var(--secondary-text)]">Complexity Multiplier ({complexity})</span>
                                <span className="text-[var(--primary-text)] font-bold">{complexityMultipliers[complexity]}x</span>
                            </div>
                            {additionalServices.map((service) => (
                                <div key={service} className="flex justify-between items-center py-3 border-b border-[var(--secondary-text)]/20">
                                    <span className="text-[var(--secondary-text)]">{service.charAt(0).toUpperCase() + service.slice(1).replace('-', ' ')}</span>
                                    <span className="text-[var(--primary-text)] font-bold">₹{additionalServicePrices[service as keyof typeof additionalServicePrices]?.toLocaleString()}</span>
                                </div>
                            ))}
                            <div className="flex justify-between items-center py-4 border-t-2 border-[var(--primary-accent)]/30">
                                <span className="text-xl font-bold text-[var(--primary-text)]">Total Development Cost</span>
                                <span className="text-2xl font-bold text-[var(--primary-accent)]">₹{calculatePrice().toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Maintenance Plans */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-6 text-center">
                        Maintenance & Support Plans
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[var(--card-gradient)] rounded-2xl p-8 border border-[var(--primary-accent)]/20">
                            <div className="text-center mb-6">
                                <h4 className="text-2xl font-bold text-[var(--primary-text)] mb-2">Monthly Maintenance</h4>
                                <div className="text-4xl font-bold text-[var(--primary-accent)] mb-2">₹6,999</div>
                                <p className="text-[var(--secondary-text)]">per month</p>
                            </div>
                            <ul className="space-y-3 text-[var(--secondary-text)]">
                                <li className="flex items-center">
                                    <span className="text-[var(--primary-accent)] mr-3">✓</span>
                                    Bug fixes and minor updates
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[var(--primary-accent)] mr-3">✓</span>
                                    Performance optimization
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[var(--primary-accent)] mr-3">✓</span>
                                    Security updates
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[var(--primary-accent)] mr-3">✓</span>
                                    Basic feature additions
                                </li>
                            </ul>
                        </div>
                        <div className="bg-[var(--card-gradient)] rounded-2xl p-8 border border-[var(--primary-accent)]/20">
                            <div className="text-center mb-6">
                                <h4 className="text-2xl font-bold text-[var(--primary-text)] mb-2">Annual Maintenance</h4>
                                <div className="text-4xl font-bold text-[var(--primary-accent)] mb-2">₹29,999</div>
                                <p className="text-[var(--secondary-text)]">per year (Save ₹54,000!)</p>
                            </div>
                            <ul className="space-y-3 text-[var(--secondary-text)]">
                                <li className="flex items-center">
                                    <span className="text-[var(--primary-accent)] mr-3">✓</span>
                                    Everything in Monthly Plan
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[var(--primary-accent)] mr-3">✓</span>
                                    Priority support
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[var(--primary-accent)] mr-3">✓</span>
                                    Advanced feature development
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[var(--primary-accent)] mr-3">✓</span>
                                    Quarterly performance reviews
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Terms & Conditions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-bold text-[var(--primary-text)] mb-6 text-center">
                        Important Terms & Conditions
                    </h3>
                    <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--secondary-text)]/20">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-[var(--primary-text)] mb-3">📋 Project Scope</h4>
                                <p className="text-[var(--secondary-text)]">
                                    The quoted price includes complete development with backend and database integration.
                                    Hosting and publishing services are included, but you&#39;ll need to purchase the domain
                                    or app store subscriptions separately.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--primary-text)] mb-3">⏰ Revision Policy</h4>
                                <p className="text-[var(--secondary-text)]">
                                    Changes within the first month after project completion are included at no extra cost.
                                    After one month, additional changes will be charged based on complexity and time required.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--primary-text)] mb-3">🔧 Maintenance Scope</h4>
                                <p className="text-[var(--secondary-text)]">
                                    Maintenance plans cover bug fixes, feature additions, and improvements only.
                                    Complete redevelopment or major architectural changes are not included and
                                    will be quoted separately.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[var(--primary-text)] mb-3">📝 Agreements</h4>
                                <p className="text-[var(--secondary-text)]">
                                    Separate agreements will be signed for project development, monthly maintenance,
                                    and annual maintenance. All terms must be agreed upon before work begins.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold text-[var(--primary-text)] mb-6">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-xl text-[var(--secondary-text)] mb-8 max-w-2xl mx-auto">
                        Let&#39;s discuss your requirements and create something amazing together.
                        Our team is ready to bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[var(--primary-accent)] text-[var(--background)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--primary-accent)]/90 transition-colors duration-300"
                        >
                            Schedule a Call
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-[var(--primary-accent)] text-[var(--primary-accent)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--primary-accent)]/10 transition-colors duration-300"
                        >
                            Download Quote PDF
                        </motion.button>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-[var(--surface)] border-t border-[var(--primary-accent)]/20 py-8 mt-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-[var(--secondary-text)]">
                        © 2024 Lancers.io. All rights reserved. |
                        <span className="text-[var(--primary-accent)] ml-2">Powered by Creativity. Driven by AI. Delivered with Precision.</span>
                    </p>
                </div>
            </motion.footer>
        </div>
    );
}
