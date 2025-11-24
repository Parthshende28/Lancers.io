'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function CareersPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const openPositions = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for a talented Frontend Developer with experience in React, Next.js, and modern CSS frameworks.",
      requirements: [
        "3+ years of experience with React",
        "Experience with Next.js and TypeScript",
        "Strong understanding of responsive design principles",
        "Knowledge of modern CSS frameworks like Tailwind CSS"
      ]
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      description: "Join our creative team as a UI/UX Designer to create beautiful, intuitive interfaces for our clients.",
      requirements: [
        "Portfolio demonstrating strong UI/UX skills",
        "Experience with Figma or similar design tools",
        "Understanding of user-centered design principles",
        "Ability to translate business requirements into design solutions"
      ]
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      description: "We need a skilled Backend Developer to build robust APIs and server-side applications.",
      requirements: [
        "Experience with Node.js and Express",
        "Knowledge of database systems (MongoDB, PostgreSQL)",
        "Understanding of RESTful API design",
        "Experience with cloud services (AWS, GCP, or Azure)"
      ]
    },
    {
      title: "AI/ML Engineer",
      location: "Remote",
      type: "Full-time",
      description: "We are seeking an AI/ML Engineer to develop and deploy machine learning models for various applications.",
      requirements: [
        "Strong understanding of supervised, unsupervised, and reinforcement learning",
        "Ability to tune models, evaluate performance, and avoid overfitting",
        "Experience with CNNs, RNNs, LSTMs",
        "Knowledge of model training, optimization, and deployment"
      ]
    },
    {
      title: "Full-Stack Developer",
      location: "Remote",
      type: "Full-time",
      description: "We are seeking a Full-Stack Developer to build & maintain scalable web applications across front-end and back-end.",
      requirements: [
        "Proficiency in HTML, CSS, JS, Node.js, and any front-end framework",
        "Understanding of responsive design, accessibility (a11y), and browser compatibility",
        "Familiarity with cloud platforms (AWS, GCP, Azure)",
        "Knowledge of SQL and NoSQL databases"
      ]
    },
    {
      title: "Intern",
      location: "Remote",
      type: "Full-time",
      description: "We are seeking a Tech Intern to support development, testing, and research tasks across various engineering domains.",
      requirements: [
        "Basic understanding of programming fundamentals",
        "Familiarity with at least one tech stack (web, mobile, AI/ML, cloud, etc.)",
        "Willingness to learn new tools and technologies",
        "Good problem-solving and teamwork skills"
      ]
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] mb-6"
          >
            Join Our <span className="text-[var(--primary-accent)]">Team</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-[var(--secondary-text)] max-w-3xl mx-auto"
          >
            We&#39;re always looking for talented individuals to join our creative team
          </motion.p>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {openPositions.map((position, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--primary-accent)]/10 hover:border-[var(--primary-accent)]/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[var(--primary-text)]">{position.title}</h3>
                <span className="px-3 py-1 bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] rounded-full text-sm font-medium">
                  {position.type}
                </span>
              </div>
              <div className="mb-4 text-[var(--secondary-text)] text-sm">
                <span className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {position.location}
                </span>
              </div>
              <p className="text-[var(--secondary-text)] mb-4">
                {position.description}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-[var(--primary-text)] mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 text-[var(--secondary-text)] text-sm space-y-1">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:lancersio.offical@gmail.com?subject=${encodeURIComponent(`Application for ${position.title}`)}&body=${encodeURIComponent(
                  `Hello Lancers Team,\n\nI would like to apply for the ${position.title} position. Please find my resume attached.\n\nThanks,\n`
                )}`}
                aria-label={`Apply for ${position.title}`}
                target='_blank'
                className="text-center block w-full py-2 bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] rounded-lg font-medium text-sm hover:bg-[var(--primary-accent)]/20 transition-all duration-300"
              >
                Apply Now
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--primary-accent)]/10 mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-[var(--primary-text)] mb-6"
          >
            Our Application Process
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[var(--primary-accent)]/10 rounded-full flex items-center justify-center text-[var(--primary-accent)] mb-4">
                1
              </div>
              <h3 className="font-medium text-[var(--primary-text)] mb-2">Submit Application</h3>
              <p className="text-[var(--secondary-text)] text-sm">
                Fill out our application form with your details and portfolio
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[var(--primary-accent)]/10 rounded-full flex items-center justify-center text-[var(--primary-accent)] mb-4">
                2
              </div>
              <h3 className="font-medium text-[var(--primary-text)] mb-2">Interview Process</h3>
              <p className="text-[var(--secondary-text)] text-sm">
                Participate in technical and cultural fit interviews
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[var(--primary-accent)]/10 rounded-full flex items-center justify-center text-[var(--primary-accent)] mb-4">
                3
              </div>
              <h3 className="font-medium text-[var(--primary-text)] mb-2">Welcome Aboard</h3>
              <p className="text-[var(--secondary-text)] text-sm">
                Join our team and start creating amazing projects
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-[var(--primary-text)] mb-4"
          >
            Don&#39;t see a position that fits?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[var(--secondary-text)] mb-6 max-w-2xl mx-auto"
          >
            We&#39;re always interested in connecting with talented individuals. Send us your resume and let us know how you can contribute to our team.
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="mailto:careers@lancers.io"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[var(--primary-accent)] text-[var(--primary-accent)] rounded-full font-semibold text-lg hover:bg-[var(--primary-accent)] hover:text-[var(--background)] transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
