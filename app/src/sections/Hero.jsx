import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { Github, Linkedin, Mail, Phone, Code, Link as LinkIcon } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">Open to Opportunities</span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Hi, I'm</h2>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Rohith Silagani
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-secondary mt-2">
              Data Analytics Engineer <span className="text-white/40 px-2">&</span> Python Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            B.Tech CSE graduate specializing in Data Science from KARE (CGPA 8.09). 
            Passionate about transforming raw data into meaningful insights through analytics, visualization, and machine learning.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-2xl font-bold text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all active:scale-95">
              <Code size={20} />
              View Projects
            </button>
            <button className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all active:scale-95">
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            {[
              { icon: Code, href: "#" },
              { icon: LinkIcon, href: "#" },
              { icon: Mail, href: `mailto:${portfolioData.contact.email}` },
              { icon: Phone, href: `tel:${portfolioData.contact.phone}` }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 text-white/60 hover:text-white transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Circle */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Glowing outer rings */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-2 border-primary" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border-b-2 border-secondary" 
            />
            
            {/* Inner Circle Content */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px] shadow-[0_0_50px_rgba(139,92,246,0.3)]">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden relative">
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
                
                {/* Profile Photo */}
                <div className="absolute inset-0 z-10 rounded-full overflow-hidden">
                  <img 
                    src={profileImg}
                    alt="Rohith Silagani" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => { e.target.style.backgroundColor = '#0A0F1E'; }}
                  />
                  {/* Subtle Gradient Overlay on Photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                </div>

                {/* Animated Gradient Shine */}
                <motion.div 
                  animate={{ 
                    x: ['-100%', '100%'],
                    y: ['-100%', '100%']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full h-full skew-x-12 z-20 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 blur-3xl rounded-full" />
        </motion.div>

      </div>

      {/* Background Decor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
