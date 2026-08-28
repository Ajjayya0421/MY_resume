import React from 'react';
import { ResumeData, ResumeSettings } from '../../types';
import {
  Shield,
  ShieldCheck,
  Lock,
  Server,
  Cpu,
  Terminal,
  Database,
  Network,
  Phone,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  GraduationCap,
  Sparkles,
  Layers,
  Code2,
  Binary,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import cyberShieldHero from '../../assets/images/cyber_shield_hero_1787940349561.jpg';
import cyberSecurityBadge from '../../assets/images/cyber_security_badge_1787940368057.jpg';

interface TemplateProps {
  resume: ResumeData;
  settings: ResumeSettings;
}

export const CyberShieldResume: React.FC<TemplateProps> = ({ resume, settings }) => {
  const fontClass =
    settings.font === 'garamond'
      ? 'font-serif-garamond'
      : settings.font === 'source'
      ? 'font-serif-source'
      : settings.font === 'inter'
      ? 'font-sans-inter'
      : 'font-sans-clean';

  // Target enterprise software companies
  const enterpriseReadyCompanies = [
    'Google',
    'Microsoft',
    'Amazon',
    'IBM',
    'Infosys',
    'TCS',
    'Accenture',
  ];

  return (
    <div
      id="resume-content"
      className={`resume-paper relative w-full max-w-[1000px] mx-auto bg-[#0a0c10] text-slate-200 rounded-2xl border border-cyan-500/30 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)] overflow-hidden ${fontClass}`}
    >
      {/* Subtle Circuit & Volumetric Glow Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Hero Banner: 3D Digital Shield & Data Center Atmosphere */}
      <div className="relative border-b border-cyan-500/20 bg-gradient-to-r from-[#0d1117] via-[#111622] to-[#0d1117] p-6 sm:p-8 overflow-hidden">
        {/* Background Image Texture with Glass Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
          <img
            src={cyberShieldHero}
            alt="3D Digital Shield & Server Environment"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Ambient Top Scanline & Circuit Grid Indicator */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Candidate Profile Details */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            {/* 3D Security Shield & Candidate Monogram Emblem */}
            <div className="relative group shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-800 to-blue-600/20 border-2 border-cyan-400/40 p-1 shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center justify-center overflow-hidden">
                <img
                  src={cyberSecurityBadge}
                  alt="3D Cyber Shield Lock"
                  className="w-full h-full object-cover rounded-xl opacity-90 group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
                  <span className="font-extrabold text-white text-2xl tracking-tighter drop-shadow-md">
                    AN
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-1 bg-emerald-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded-full border border-black shadow flex items-center gap-0.5">
                <ShieldCheck className="w-3 h-3" />
                <span>SECURED</span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                  {resume.fullName}
                </h1>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  Cybersecurity & Software Engineering
                </span>
              </div>

              <p className="text-sm font-semibold text-cyan-400 mt-1 uppercase tracking-wider flex items-center gap-2">
                <span>{resume.title}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-normal">{resume.location}</span>
              </p>

              {/* Verified Contact Bar */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 text-xs text-slate-300">
                <a
                  href={`tel:${resume.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{resume.phone}</span>
                </a>
                <a
                  href={`mailto:${resume.email}`}
                  className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{resume.email}</span>
                </a>
                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>/in/ajjayyanh0421</span>
                </a>
                <a
                  href={resume.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>/Ajjayya0421</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Academic & Enterprise Target Capsule */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 bg-[#151922]/90 p-3.5 rounded-xl border border-cyan-500/20 backdrop-blur-md shadow-lg min-w-[200px]">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Academic Merit (VTU)
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                CGPA 8.799
              </span>
            </div>
            <div className="text-[11px] text-slate-300 flex items-center justify-between">
              <span>12th PUC (PCMB):</span>
              <strong className="font-mono text-cyan-300">96.00%</strong>
            </div>
            <div className="text-[11px] text-slate-300 flex items-center justify-between">
              <span>10th SSLC:</span>
              <strong className="font-mono text-cyan-300">93.94%</strong>
            </div>
            <div className="pt-2 border-t border-slate-800 flex items-center gap-1 text-[10px] text-slate-400">
              <CheckCircle2 className="w-3 h-3 text-cyan-400" />
              <span>NPTEL Elite & Coursera Certified</span>
            </div>
          </div>
        </div>

        {/* Abstract Micro Technology Representations (Python, Java, C, SQL, Cloud, AI, DSA) */}
        <div className="relative z-10 mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Technical Pillars:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-[#18202e] text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="text-sm">🐍</span>
              <span>Python</span>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#18202e] text-amber-300 border border-amber-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="text-sm">☕</span>
              <span>Java</span>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#18202e] text-blue-300 border border-blue-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="text-sm">⚡</span>
              <span>C Language</span>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#18202e] text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="text-sm">🗄️</span>
              <span>SQL & DBMS</span>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#18202e] text-purple-300 border border-purple-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="text-sm">🌲</span>
              <span>Data Structures (DSA)</span>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#18202e] text-sky-300 border border-sky-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="text-sm">🛡️</span>
              <span>Cyber Security</span>
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#18202e] text-pink-300 border border-pink-500/30 flex items-center gap-1.5 shadow-sm">
              <span className="text-sm">🧠</span>
              <span>AI & Vision</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Body: Glassmorphism Panels with Realistic Depth and Clean Typography */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Executive Summary */}
        {settings.showSummary && resume.summary && (
          <section className="p-4 sm:p-5 rounded-xl bg-[#121620]/90 border border-cyan-500/20 shadow-md backdrop-blur-md">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Professional Summary & Core Objective</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {resume.summary}
            </p>
          </section>
        )}

        {/* Grid: Education & Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Education & Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Panel */}
            <div className="p-5 rounded-xl bg-[#121620]/90 border border-slate-800 shadow-md backdrop-blur-md space-y-4">
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education History</span>
              </h2>

              <div className="relative pl-4 border-l-2 border-cyan-500/30 space-y-4">
                {resume.education.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white text-sm leading-snug">
                        {edu.institution}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40 shrink-0">
                        {edu.startYear} – {edu.endYear}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{edu.degree}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-emerald-400 font-mono">
                        {edu.scoreLabel}: {edu.score}
                      </span>
                      {edu.highlights && edu.highlights[0] && (
                        <span className="text-[10px] text-slate-400">
                          • {edu.highlights[0]}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Cyber Security Matrix */}
            <div className="p-5 rounded-xl bg-[#121620]/90 border border-slate-800 shadow-md backdrop-blur-md space-y-4">
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Technical Skillset</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1.5">
                    Languages:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {resume.skills.programmingLanguages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 font-mono"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1.5">
                    Core CS & Cyber Security:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {resume.skills.coreCompetencies.concat(resume.skills.cyberSecurityAndNetworking).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-cyan-900/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1.5">
                    Databases & Developer Tools:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {resume.skills.databases.concat(resume.skills.developerTools).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1.5">
                    Spoken Languages:
                  </span>
                  <div className="flex gap-4">
                    {resume.skills.languages.map((l) => (
                      <span key={l.language} className="text-slate-300">
                        <strong className="text-white">{l.language}</strong> ({l.proficiency})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="p-5 rounded-xl bg-[#121620]/90 border border-slate-800 shadow-md backdrop-blur-md space-y-3">
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Verified Credentials</span>
              </h2>
              <div className="space-y-2.5">
                {resume.certifications.map((cert) => (
                  <div key={cert.id} className="p-2.5 rounded-lg bg-[#0e1118] border border-slate-800 text-xs">
                    <div className="font-semibold text-white">{cert.name}</div>
                    <div className="text-[11px] text-slate-400 flex items-center justify-between mt-0.5">
                      <span>{cert.issuer}</span>
                      <span className="font-mono text-cyan-400">{cert.issueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Engineering Projects & Athletic Distinction (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Key Software & Security Projects */}
            <div className="p-5 rounded-xl bg-[#121620]/90 border border-slate-800 shadow-md backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Key Software & Engineering Projects</span>
                </h2>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  STAR Quantified
                </span>
              </div>

              <div className="space-y-4">
                {resume.projects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl bg-[#0e1118] border border-slate-800/90 hover:border-cyan-500/40 transition-all space-y-2.5 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                          {proj.title}
                        </h3>
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-cyan-400"
                            title="GitHub Repository"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider ${
                          idx === 0
                            ? 'bg-blue-950/80 text-cyan-300 border border-blue-800/60'
                            : idx === 1
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                            : 'bg-purple-950/80 text-purple-300 border border-purple-800/60'
                        }`}
                      >
                        {proj.techStack.slice(0, 2).join(' • ')}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 bg-slate-800/70 text-slate-300 rounded border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed list-disc list-outside ml-4">
                      {proj.descriptionBullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-slate-300 marker:text-cyan-400">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular & Athletic Leadership */}
            {settings.showSports && (
              <div className="p-5 rounded-xl bg-[#121620]/90 border border-slate-800 shadow-md backdrop-blur-md">
                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Extracurricular Distinction & Leadership</span>
                </h2>
                <div className="p-4 rounded-xl bg-[#0e1118] border border-amber-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl shrink-0">
                    🏸
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">
                      State-Level Ball Badminton Player
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Represented at State tournaments, embodying tactical resilience, high-pressure execution, collaborative team synchronization, and agile strategic reaction times under competitive conditions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Corporate Tech Readiness Footer Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-purple-950/40 border border-cyan-500/20 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Readiness:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-300">
                {enterpriseReadyCompanies.map((company) => (
                  <span
                    key={company}
                    className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-200 border border-slate-700"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
