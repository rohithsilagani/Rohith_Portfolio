import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { Target, Zap, Shield, ChevronRight } from 'lucide-react';

const About = () => {
  const { personal } = portfolioData;

  const milestones = [
    { year: '2021', title: 'Initialization', detail: 'Started at Kalasalingam Academy' },
    { year: '2022', title: 'Currency Forecast', detail: '92% Accuracy achieved' },
    { year: '2023', title: 'Architect Mode', detail: 'Data Science Specialization' },
    { year: 'Now', title: 'Clarity Architect', detail: 'Building AI Data Stacks' }
  ];

  return (
    <section id="about" className="py-12 bg-dark relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: The Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Target size={16} className="text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">Origin Story</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                I don't just engineer data; <br/>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
                  I architect clarity.
                </span>
              </h3>
              
              <div className="space-y-6 text-xl text-white/70 leading-relaxed font-light">
                <p>{personal.originStory}</p>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-all">
                  <Zap className="text-secondary shrink-0 mt-1" />
                  <p className="text-lg italic">
                    My superpower? <span className="text-white font-semibold">"{personal.superpower}"</span>. 
                    In a world of noise, I build the systems that deliver signal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Milestone Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 relative group"
                >
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">{m.year}</span>
                  <h4 className="text-lg font-bold text-white mb-1">{m.title}</h4>
                  <p className="text-sm text-white/40">{m.detail}</p>
                  <ChevronRight size={16} className="absolute bottom-6 right-6 text-white/20 group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Diagnostics & Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32 space-y-8"
            >
              {/* Philosophy Quote */}
              <div className="relative p-8 rounded-[40px] bg-gradient-to-br from-primary/10 to-transparent border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-serif">"</div>
                <blockquote className="relative z-10 text-2xl font-medium italic text-white/90 leading-snug">
                  {personal.philosophy}
                </blockquote>
              </div>

              {/* Quick Specs Sidebar */}
              <div className="p-8 rounded-[40px] bg-[#0A0F1E] border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8 border-b border-white/10 pb-4">
                  Cognitive Specs
                </h4>
                <ul className="space-y-6">
                  <li>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Location Node</span>
                    <span className="text-white font-medium">{personal.quickFacts.location}</span>
                  </li>
                  <li>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Core Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {personal.quickFacts.languages.map(lang => (
                        <span key={lang} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </li>
                  <li>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Active Buffer</span>
                    <span className="text-secondary font-medium italic">{personal.quickFacts.learning}</span>
                  </li>
                  <li>
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Offline Protocol</span>
                    <div className="grid grid-cols-1 gap-3">
                      {personal.quickFacts.hobbies.map(hobby => (
                        <div key={hobby.label} className="flex justify-between items-center text-xs">
                          <span className="text-white/60">{hobby.label}</span>
                          <span className="px-2 py-0.5 rounded-md bg-white/5 text-primary border border-white/10 font-bold">{hobby.achievement}</span>
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
