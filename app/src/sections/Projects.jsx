import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { ExternalLink, Database, Activity, Home } from 'lucide-react';

const ProjectIllustration = ({ id }) => {
  if (id === 1) { // USD/INR Predictor
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-60">
        <path d="M10 100 Q 50 80, 80 90 T 150 40 T 190 20" fill="none" stroke="var(--primary)" strokeWidth="2" />
        <motion.circle
          cx="190" cy="20" r="4" fill="var(--accent)"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <line x1="10" y1="100" x2="190" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2" />
        <line x1="10" y1="20" x2="10" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2" />
      </svg>
    );
  }
  if (id === 2) { // ER Survival Clock
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-60">
        <circle cx="100" cy="60" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
        <motion.line
          x1="100" y1="60" x2="100" y2="30"
          stroke="var(--accent)" strokeWidth="2"
          animate={{ rotate: 360 }}
          style={{ originX: "100px", originY: "60px" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <rect x="70" y="50" width="60" height="20" fill="var(--primary)" opacity="0.2" />
      </svg>
    );
  }
  if (id === 3) { // Hotel Recommendation
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-60">
        <rect x="40" y="20" width="120" height="80" fill="none" stroke="white" strokeWidth="0.5" />
        <g opacity="0.5">
          <rect x="50" y="30" width="30" height="10" fill="var(--primary)" />
          <rect x="90" y="30" width="60" height="10" fill="white" />
          <rect x="50" y="50" width="100" height="30" fill="var(--accent)" opacity="0.3" />
        </g>
        <motion.path
          d="M20 60 L180 60"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ x: [-10, 10] }}
          transition={{ repeat: Infinity, duration: 1, yoyo: true }}
        />
      </svg>
    );
  }
  if (id === 4) { // Our Health
    return (
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-60">
        <motion.path
          d="M20 60 L60 60 L70 40 L80 80 L90 20 L100 100 L110 60 L150 60"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <circle cx="150" cy="60" r="4" fill="var(--accent)" />
        <path d="M160 50 Q 170 30, 180 50 T 190 70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
      </svg>
    );
  }
  return ( // Zomato Analysis
    <svg viewBox="0 0 200 120" className="w-full h-full opacity-60">
      <rect x="30" y="80" width="20" height="20" fill="var(--primary)" opacity="0.4" />
      <rect x="60" y="50" width="20" height="50" fill="var(--primary)" opacity="0.6" />
      <rect x="90" y="30" width="20" height="70" fill="var(--primary)" opacity="0.8" />
      <rect x="120" y="60" width="20" height="40" fill="var(--primary)" />
      <motion.path
        d="M30 80 L60 50 L90 30 L120 60 L150 40"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </svg>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-[#080808] border-y border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-primary mb-4">What I've Built</h2>
            <h3 className="text-4xl md:text-6xl font-bold">Turning Data into <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Decision-Ready</span> Assets</h3>
          </div>
          <div className="md:w-1/3 text-right">
            <p className="font-mono text-xs opacity-50 uppercase leading-loose">
              Every project is a rigorous exercise in statistical validation and pipeline efficiency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10 border border-white/10">
          {portfolioData.projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-dark p-4 md:p-6 transition-all duration-300 hover:bg-primary/5 cursor-pointer block"
            >
              {/* Mechanical Snap Effect on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs opacity-30">0{project.id} / PROJECT</span>
                <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
              </div>

              <div className="h-24 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                <ProjectIllustration id={project.id} />
              </div>

              <h4 className="text-lg font-bold mb-3 uppercase group-hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h4>

              <p className="text-sm font-light opacity-60 mb-4 h-14 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="font-mono text-[8px] border border-white/10 px-2 py-0.5 uppercase group-hover:border-primary/40">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                <p className="font-mono text-[9px] text-accent uppercase tracking-widest leading-tight">
                  Outcome: {project.outcome}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
