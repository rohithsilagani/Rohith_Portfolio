import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import collegeLogo from '../assets/college_logo.jpg';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Specialization in Data Science",
      institution: "Kalasalingam Academy of Research and Education (KARE)",
      duration: "2020 — 2024",
      grade: "CGPA: 8.09",
      location: "Tamil Nadu, India",
      achievements: [
        "Specialized in Machine Learning and Data Analytics",
        "Participated in multiple University-level Hackathons",
        "Completed research on Hotel Recommendation Systems"
      ]
    }
  ];

  return (
    <section id="education" className="py-12 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-primary">Academic Foundation</h2>
            <h3 className="text-5xl md:text-7xl font-bold">My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span></h3>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 gap-8">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl hover:border-primary/50 transition-all overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Side - Info */}
                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-primary">
                        <GraduationCap size={24} />
                        <span className="font-mono text-sm font-bold uppercase tracking-widest">{edu.degree}</span>
                      </div>
                      <h4 className="text-3xl md:text-4xl font-bold text-white">{edu.institution}</h4>
                    </div>

                    <div className="flex flex-wrap gap-6 text-white/60">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-secondary" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-secondary" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={18} className="text-accent" />
                        <span className="font-bold text-white">{edu.grade}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-lg text-primary/80 font-semibold">{edu.specialization}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white/50 text-sm italic">
                            <span className="text-primary mt-1">▹</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Side - College Logo */}
                  <div className="lg:col-span-4 flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-all duration-500">
                      <div className="absolute inset-0 rounded-2xl border-t-2 border-primary animate-spin-slow opacity-20" />
                      <img 
                        src={collegeLogo}
                        alt="Kalasalingam Academy Logo" 
                        className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
