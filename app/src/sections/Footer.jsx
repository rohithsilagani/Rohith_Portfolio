import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { Mail, Phone, Linkedin, Github, Download, Award, Clock, BookOpen, Zap } from 'lucide-react';

const Footer = () => {
  const { certifications, now, contact } = portfolioData;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer id="contact" className="bg-dark pt-12 pb-12 border-t border-white/5 overflow-hidden">
      <div className="container-custom">
        <div className="swiss-grid">
          {/* Certifications Gallery */}
          <div id="certifications" className="md:col-span-12 mb-16 scroll-mt-24">
            <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-primary mb-12">Validated Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 bg-white/5 border border-white/10 flex items-start gap-4 transition-colors hover:border-primary/50 group rounded-xl block"
                >
                  <Award className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-xs font-semibold uppercase leading-relaxed group-hover:text-white transition-colors">{cert.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Now Page */}
          <div className="md:col-span-5 mb-16 md:mb-0">
            <div className="bg-gradient-to-br from-primary to-secondary p-12 relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)]">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/40 flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                LIVE_NODE_v1.0.4
              </div>
              <h3 className="text-3xl font-bold uppercase mb-8 flex items-center gap-4">
                <Clock className="w-8 h-8" />
                Current Status
              </h3>
              <ul className="space-y-8 font-mono text-sm">
                <li className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-60">
                    <Zap className="w-3 h-3" /> Processing
                  </span>
                  <span className="font-bold text-white text-lg leading-tight uppercase">{now.building}</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-60">
                    <BookOpen className="w-3 h-3" /> Input Stream
                  </span>
                  <span className="font-bold text-white text-lg leading-tight uppercase">{now.reading}</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-60">
                    Target Objective
                  </span>
                  <span className="font-bold text-white text-lg leading-tight uppercase italic">{now.dreaming}</span>
                </li>
              </ul>
              <div className="mt-12 pt-8 border-t border-white/20 text-[10px] font-mono opacity-60">
                LAST_SYNC: {time.toLocaleTimeString()} @ {time.toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-7 md:pl-24">
            <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-secondary mb-8">Let's Build Something</h2>
            <h3 className="text-5xl md:text-8xl font-bold mb-16 leading-none">INITIATE <br/> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CONTACT.</span></h3>
            
            <div className="space-y-8">
              <a href={`mailto:${contact.email}`} className="group flex items-center gap-6 p-4 border border-white/5 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-2xl md:text-3xl font-mono uppercase tracking-tighter truncate">{contact.email}</span>
              </a>

              <div className="flex flex-wrap gap-4">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 group flex items-center justify-center gap-3 p-6 border border-white/5 hover:bg-white/5 transition-all">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest">LinkedIn</span>
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex-1 group flex items-center justify-center gap-3 p-6 border border-white/5 hover:bg-white/5 transition-all">
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest">GitHub</span>
                </a>
              </div>

              <button className="w-full btn-primary flex items-center justify-center gap-4 group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Analysis Resume</span>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Legal/Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8 font-mono text-[10px] uppercase opacity-40">
          <div>© 2024 ROHITH SILAGANI | ALL SYSTEMS OPERATIONAL</div>
          <div className="flex gap-8">
            <span>Built with: React, Framer Motion, GSAP</span>
            <span>Origin: Hyderabad, IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
