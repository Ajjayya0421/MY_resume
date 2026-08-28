import React from 'react';
import { ResumeData, ResumeSettings } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, GraduationCap, Code2, Briefcase, Trophy, Globe } from 'lucide-react';

interface TemplateProps {
  resume: ResumeData;
  settings: ResumeSettings;
}

export const ElegantDarkResume: React.FC<TemplateProps> = ({ resume, settings }) => {
  const fontClass =
    settings.font === 'garamond'
      ? 'font-serif-garamond'
      : settings.font === 'source'
      ? 'font-serif-source'
      : settings.font === 'inter'
      ? 'font-sans-inter'
      : 'font-sans-clean';

  return (
    <div
      id="resume-content"
      className={`resume-paper w-full max-w-[1000px] mx-auto bg-[#0f1115] text-slate-300 p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-800/80 shadow-2xl ${fontClass} flex flex-col md:flex-row gap-6`}
    >
      {/* Left Column (Aside) */}
      <aside className="w-full md:w-1/3 flex flex-col gap-6">
        {/* Candidate Profile Card */}
        <div className="bg-[#1a1d23] p-6 rounded-xl border border-slate-800/50 shadow-md">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-700 rounded-2xl mb-4 flex items-center justify-center text-3xl font-bold text-white border-2 border-slate-600 shadow-inner">
            AN
          </div>
          <h1 className="text-2xl font-bold text-white leading-tight uppercase tracking-tight">
            {resume.fullName}
          </h1>
          <p className="text-blue-400 text-sm font-medium mt-1 uppercase tracking-wider">
            {resume.title}
          </p>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            {resume.location}
          </p>
        </div>

        {/* Info & Skills Card */}
        <div className="bg-[#1a1d23] p-6 rounded-xl border border-slate-800/50 flex-1 flex flex-col gap-6 shadow-md">
          {/* Contact Section */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              Contact
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-5 text-center text-slate-400">
                  <Phone className="w-4 h-4 inline-block text-slate-400" />
                </span>
                <a
                  href={`tel:${resume.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {resume.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 text-center text-slate-400">
                  <Mail className="w-4 h-4 inline-block text-slate-400" />
                </span>
                <a
                  href={`mailto:${resume.email}`}
                  className="text-blue-400 hover:text-blue-300 truncate"
                >
                  {resume.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 text-center text-slate-400">
                  <Linkedin className="w-4 h-4 inline-block text-blue-400" />
                </span>
                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 truncate text-xs"
                >
                  linkedin.com/in/ajjayyanh0421
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 text-center text-slate-400">
                  <Github className="w-4 h-4 inline-block text-slate-300" />
                </span>
                <a
                  href={resume.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 truncate text-xs"
                >
                  github.com/Ajjayya0421
                </a>
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {resume.skills.programmingLanguages.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-medium"
                >
                  {skill}
                </span>
              ))}
              {resume.skills.coreCompetencies.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-medium"
                >
                  {skill}
                </span>
              ))}
              {resume.skills.cyberSecurityAndNetworking.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-medium"
                >
                  {skill}
                </span>
              ))}
              {resume.skills.databases.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          {resume.skills.developerTools && (
            <div>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                Tools & Platforms
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {resume.skills.developerTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-[#121418] text-slate-400 text-xs rounded border border-slate-800 font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
              Languages
            </h2>
            <div className="flex flex-col gap-2 text-sm">
              {resume.skills.languages.map((l) => (
                <span key={l.language} className="flex justify-between items-center text-xs">
                  <span className="text-slate-200 font-medium">{l.language}</span>
                  <span className="text-slate-500 font-mono">{l.proficiency}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Right Column (Main Content) */}
      <main className="w-full md:w-2/3 flex flex-col gap-6">
        {/* Summary (if enabled) */}
        {settings.showSummary && resume.summary && (
          <section className="bg-[#1a1d23] p-6 rounded-xl border border-slate-800/50 shadow-md">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span>Executive Profile</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {resume.summary}
            </p>
          </section>
        )}

        {/* Education Section */}
        <section className="bg-[#1a1d23] p-6 rounded-xl border border-slate-800/50 shadow-md">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
            Education
          </h2>
          <div className="relative pl-4 border-l-2 border-slate-800 space-y-5">
            {resume.education.map((edu, idx) => (
              <div key={edu.id} className={idx > 0 ? 'pt-2' : ''}>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-1 gap-1">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700/50">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{edu.degree} | {edu.location}</p>
                
                <div className="flex flex-wrap gap-3 mt-3">
                  <div className="bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-800">
                    <div className="text-xs text-slate-500 font-semibold uppercase">{edu.scoreLabel}</div>
                    <div className="text-white font-bold text-lg">{edu.score}</div>
                  </div>
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-800 flex-1 min-w-[200px]">
                      <div className="text-xs text-slate-500 font-semibold uppercase">Academic Standing</div>
                      <div className="text-slate-300 font-medium text-xs mt-1 leading-snug">
                        {edu.highlights[0]}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="bg-[#1a1d23] p-6 rounded-xl border border-slate-800/50 flex-1 shadow-md">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {resume.projects.map((proj, idx) => (
              <div
                key={proj.id}
                className="p-4 bg-[#121418] rounded-lg border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold text-sm sm:text-base">
                      {proj.title}
                    </h3>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        title="View GitHub Repository"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded border uppercase font-mono tracking-wider ${
                      idx === 0
                        ? 'bg-blue-900/30 text-blue-400 border-blue-800/50'
                        : 'bg-emerald-900/30 text-emerald-400 border-emerald-800/50'
                    }`}
                  >
                    {proj.techStack.slice(0, 2).join(' & ')}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 bg-slate-800/80 text-slate-300 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed list-disc list-outside ml-4">
                  {proj.descriptionBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-slate-300">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements Bottom Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Certifications */}
          <div className="bg-[#1a1d23] p-6 rounded-xl border border-slate-800/50 shadow-md">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <span>Certifications</span>
            </h2>
            <ul className="space-y-3.5 text-sm">
              {resume.certifications.map((cert) => (
                <li key={cert.id} className="flex gap-3 items-start">
                  <span className="text-blue-400 mt-0.5">🎓</span>
                  <div>
                    <div className="text-slate-200 font-medium text-xs sm:text-sm">
                      {cert.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {cert.issuer} • {cert.issueDate}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          {settings.showSports && (
            <div className="bg-[#1a1d23] p-6 rounded-xl border border-slate-800/50 shadow-md">
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <span>Achievements</span>
              </h2>
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-amber-900/20 text-amber-500 rounded-full border border-amber-800/30 shrink-0 text-xl flex items-center justify-center">
                  🏸
                </div>
                <div>
                  <div className="text-slate-200 font-medium text-xs sm:text-sm">
                    State Level Athlete
                  </div>
                  <div className="text-xs text-slate-400">
                    Ball Badminton Representative (Tactical Execution & Leadership)
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
