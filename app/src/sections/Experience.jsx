import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { Target, Search, Shield, ChevronRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-primary mb-6">Career Node</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              The Evolutionary <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pipeline</span>
            </h3>
            <p className="text-xl opacity-60 max-w-2xl">
              Bridging the gap between raw data engineering and high-level strategic intelligence through continuous iteration and AI-driven automation.
            </p>
          </motion.div>
        </div>

        {/* Traits Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {portfolioData.traits.map((trait, i) => (
            <motion.div
              key={trait.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center gap-5 hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 shrink-0 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                {trait.name === 'Analytical Precision' && <Target className="w-7 h-7 text-primary" />}
                {trait.name === 'Curiosity' && <Search className="w-7 h-7 text-primary" />}
                {trait.name === 'Resilience' && <Shield className="w-7 h-7 text-primary" />}
              </div>
              <div className="flex-1">
                <span className="font-bold uppercase text-xs tracking-widest block mb-2 opacity-40">Diagnostic_{i+1}</span>
                <span className="font-bold uppercase text-sm tracking-widest block">{trait.name}</span>
                <div className="w-full h-[1px] bg-white/5 mt-3 relative overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 bg-primary/60"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline - Full Width */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-primary/50 via-white/10 to-transparent" />
          
          <div className="space-y-24">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.role + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Marker */}
                <div className="absolute left-0 -translate-x-1/2 top-0 flex items-center justify-center z-20">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-dark border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="max-w-5xl">
                  <span className="font-mono text-sm text-primary mb-4 block uppercase tracking-[0.3em] font-bold opacity-80">
                    {exp.duration}
                  </span>
                  <h4 className="text-3xl md:text-5xl font-bold uppercase mb-4 tracking-tight">
                    {exp.role}
                  </h4>
                  <p className="text-xl text-accent font-mono mb-10 opacity-90 flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    {exp.company}
                  </p>
                  
                  <div className="bg-white/[0.03] p-8 md:p-12 border-l-4 border-primary/50 hover:border-primary transition-all duration-500 backdrop-blur-md rounded-r-2xl">
                    {Array.isArray(exp.description) ? (
                      <ul className="space-y-6">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx} className="text-lg md:text-xl opacity-80 leading-relaxed flex gap-4">
                            <span className="text-primary mt-2 shrink-0 text-[10px]">▶</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg md:text-xl opacity-80 leading-relaxed italic">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials / Collaborative Signal */}
          <div className="mt-32 pt-20 border-t border-white/5 pl-8 md:pl-20">
            <h4 className="font-mono text-xs uppercase opacity-40 mb-12 tracking-widest">Collaborative Signal</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-10 bg-white/[0.02] border border-white/10 rounded-2xl italic opacity-70 hover:opacity-100 transition-all hover:bg-white/[0.04] hover:border-primary/20">
                <p className="text-lg mb-6">"Rohith's ability to automate complex ETL tasks saved our team hundreds of hours. A true asset to any data-driven organization."</p>
                <span className="block text-xs font-mono text-primary uppercase tracking-[0.2em]">— Lead Analyst @ Enterprise_Node</span>
              </div>
              <div className="p-10 bg-white/[0.02] border border-white/10 rounded-2xl italic opacity-70 hover:opacity-100 transition-all hover:bg-white/[0.04] hover:border-primary/20">
                <p className="text-lg mb-6">"Unmatched precision in forecasting. The models Rohith builds are not just accurate; they are interpretable."</p>
                <span className="block text-xs font-mono text-primary uppercase tracking-[0.2em]">— Project Lead @ Strategic_Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

