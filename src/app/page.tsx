'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import HorizontalBar from '@/components/HorizontalBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--primary-text)]">
      <main>
        <HeroSection />
        <AboutSection />
        <HorizontalBar />

        <ServicesSection />
        <HorizontalBar />

        <PortfolioSection />
        <HorizontalBar />

        <ProcessSection />
        <HorizontalBar />

        <TestimonialsSection />
        <HorizontalBar />

        <ContactSection />
      </main>
    </div>
  );
}
