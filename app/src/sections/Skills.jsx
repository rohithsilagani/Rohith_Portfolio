import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { Database, Code2, BarChart3, Brain, Cpu, FileSpreadsheet, Lightbulb, Terminal, GitBranch } from 'lucide-react';

const SkillCard = ({ skill, index }) => {
  const { name, level, category } = skill;
  const percentage = (level / 5) * 100;

  // Icon mapping using reliable CDN and custom SVG logos
  const getIcon = (name) => {
    const n = name.toLowerCase();
    const iconStyle = "w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-500";
    
    if (n.includes('python')) return <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className={iconStyle} />;
    if (n.includes('mysql')) return <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className={iconStyle} />;
    // Power BI SVG Logo
    if (n.includes('power bi')) return (
      <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="5" height="10" fill="#F2CC8F" />
        <rect x="9" y="2" width="5" height="14" fill="#F2CC8F" />
        <rect x="16" y="10" width="5" height="6" fill="#F2CC8F" />
      </svg>
    );
    if (n.includes('machine learning')) return <Brain className="text-purple-400 w-12 h-12" />;
    if (n.includes('data cleaning')) return <Cpu className="text-emerald-400 w-12 h-12" />;
    // Tableau SVG Logo
    if (n.includes('tableau')) return (
      <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="4" height="4" fill="#E97627" />
        <rect x="8" y="2" width="4" height="4" fill="#E97627" />
        <rect x="14" y="2" width="4" height="4" fill="#E97627" />
        <rect x="2" y="8" width="4" height="4" fill="#E97627" />
        <rect x="8" y="8" width="4" height="4" fill="#E97627" />
        <rect x="14" y="8" width="4" height="4" fill="#E97627" />
        <rect x="2" y="14" width="4" height="4" fill="#E97627" />
        <rect x="8" y="14" width="4" height="4" fill="#E97627" />
        <rect x="14" y="14" width="4" height="4" fill="#E97627" />
      </svg>
    );
    if (n.includes('git')) return <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" className={iconStyle} />;
    // Excel SVG Logo
    if (n.includes('excel')) return (
      <svg className={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="6" height="6" fill="#217346" />
        <rect x="11" y="3" width="6" height="6" fill="#217346" />
        <rect x="3" y="11" width="6" height="6" fill="#217346" />
        <rect x="11" y="11" width="6" height="6" fill="#217346" />
      </svg>
    );
    if (n.includes('analytical')) return <Lightbulb className="text-amber-400 w-12 h-12" />;
    return <Code2 className="w-12 h-12" />;
  };

  // Subtitle mapping based on category/name
  const getSubtitle = (name) => {
    const n = name.toLowerCase();
    if (n.includes('python')) return "Data Engineering";
    if (n.includes('mysql') || n === 'sql') return "Database Design";
    if (n.includes('power bi')) return "Business Intelligence";
    if (n.includes('machine learning')) return "Predictive Analytics";
    if (n.includes('data cleaning')) return "ETL Pipelines";
    if (n.includes('tableau')) return "Visual Storytelling";
    if (n.includes('git')) return "Collaboration Flow";
    if (n.includes('excel')) return "Financial Modeling";
    if (n.includes('analytical')) return "Problem Solving";
    return "Core Competency";
  };

  // Color mapping based on category
  const getColor = (category) => {
    switch (category) {
      case 'Languages': return 'from-blue-500 to-cyan-400';
      case 'Tools': return 'from-yellow-500 to-orange-400';
      case 'Frameworks': return 'from-purple-500 to-pink-400';
      case 'Soft Skills': return 'from-emerald-500 to-teal-400';
      default: return 'from-primary to-secondary';
    }
  };

  const colorClass = getColor(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative bg-[#0A0F1E] border border-white/5 p-8 rounded-[40px] overflow-hidden group hover:border-primary/30 transition-all duration-500"
    >
      {/* Category Tag */}
      <div className="flex justify-center mb-8">
        <div className="px-6 py-1 rounded-full border border-white/10 bg-white/5">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-primary transition-colors">
            {category}
          </span>
        </div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
          {getIcon(name)}
        </div>
      </div>

      {/* Name & Subtitle */}
      <div className="text-center mb-10">
        <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
          {name}
        </h4>
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest">
          {getSubtitle(name)}
        </p>
      </div>

      {/* Power Level */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Power Level</span>
        <span className="text-sm font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          {percentage}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className={`h-full bg-gradient-to-r ${colorClass} rounded-full`}
        />
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-16">
          
          {/* Header */}
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-primary">Technical Stack</h2>
            <h3 className="text-5xl md:text-7xl font-bold">
              My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span> & Mastery
            </h3>
            <p className="text-white/40 text-lg">
              A comprehensive overview of my technical capabilities and proficiency levels in various domains of data science and engineering.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioData.skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
