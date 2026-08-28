import React from 'react';
import { ResumeData, ResumeSettings } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Award, Trophy, GraduationCap, CheckCircle2 } from 'lucide-react';

interface TemplateProps {
  resume: ResumeData;
  settings: ResumeSettings;
}

export const ExecutiveDualResume: React.FC<TemplateProps> = ({ resume, settings }) => {
  const fontClass =
    settings.font === 'garamond'
      ? 'font-serif-garamond'
      : settings.font === 'source'
      ? 'font-serif-source'
      : settings.font === 'sans'
      ? 'font-sans-clean'
      : 'font-sans-inter';

  const sidebarBg =
    settings.accent === 'navy'
      ? 'bg-slate-900 text-slate-100'
      : settings.accent === 'emerald'
      ? 'bg-emerald-950 text-emerald-50'
      : settings.accent === 'royal'
      ? 'bg-blue-950 text-blue-50'
      : settings.accent === 'burgundy'
      ? 'bg-rose-950 text-rose-50'
      : 'bg-zinc-900 text-zinc-100';

  const accentColor =
    settings.accent === 'navy'
      ? 'text-slate-900'
      : settings.accent === 'emerald'
      ? 'text-emerald-900'
      : settings.accent === 'royal'
      ? 'text-blue-900'
      : settings.accent === 'burgundy'
      ? 'text-rose-900'
      : 'text-zinc-900';

  const sidebarSubtext = 'text-slate-300 text-xs';

  return (
    <div
      id="resume-content"
      className={`resume-paper w-full max-w-[850px] mx-auto bg-white text-neutral-900 shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row ${fontClass}`}
    >
      {/* Left Sidebar Column (35% width) */}
      <aside className={`w-full md:w-[35%] p-6 sm:p-7 shrink-0 ${sidebarBg} space-y-5 flex flex-col justify-between`}>
        <div className="space-y-5">
          {/* Header Identity in Sidebar */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white uppercase leading-tight">
              {resume.fullName}
            </h1>
            <p className="text-xs font-medium text-slate-300 mt-1">
              {resume.title}
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2 border-t border-white/15 pt-3 text-xs">
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Contact Info
            </h3>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href={`tel:${resume.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                {resume.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href={`mailto:${resume.email}`} className="hover:underline truncate">
                {resume.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{resume.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href={resume.linkedin} target="_blank" rel="noreferrer" className="hover:underline truncate">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href={resume.github} target="_blank" rel="noreferrer" className="hover:underline truncate">
                GitHub Repos
              </a>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 border-t border-white/15 pt-3 text-xs">
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Technical Skills
            </h3>
            <div>
              <span className="font-semibold text-white block text-[11px]">Languages:</span>
              <p className={sidebarSubtext}>{resume.skills.programmingLanguages.join(', ')}</p>
            </div>
            <div>
              <span className="font-semibold text-white block text-[11px]">CS Fundamentals:</span>
              <p className={sidebarSubtext}>{resume.skills.coreCompetencies.join(', ')}</p>
            </div>
            <div>
              <span className="font-semibold text-white block text-[11px]">Cyber Security:</span>
              <p className={sidebarSubtext}>{resume.skills.cyberSecurityAndNetworking.slice(0, 4).join(', ')}</p>
            </div>
            <div>
              <span className="font-semibold text-white block text-[11px]">Databases & Tools:</span>
              <p className={sidebarSubtext}>
                {resume.skills.databases.join(', ')}, {resume.skills.developerTools.join(', ')}
              </p>
            </div>
          </div>

          {/* Education Summary */}
          <div className="space-y-2.5 border-t border-white/15 pt-3 text-xs">
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Education
            </h3>
            {resume.education.map((edu) => (
              <div key={edu.id} className="space-y-0.5">
                <div className="font-semibold text-white text-[12px]">{edu.institution}</div>
                <div className={sidebarSubtext}>{edu.degree}</div>
                <div className="flex items-center justify-between text-[11px] font-medium text-blue-300">
                  <span>{edu.scoreLabel}: {edu.score}</span>
                  <span>{edu.startYear}-{edu.endYear}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-1.5 border-t border-white/15 pt-3 text-xs">
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Certifications
            </h3>
            {resume.certifications.map((c) => (
              <div key={c.id} className="text-slate-200">
                <div className="font-semibold text-[11px] text-white">• {c.name}</div>
                <div className="text-[10px] text-slate-400 pl-2">{c.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages in Sidebar */}
        <div className="border-t border-white/15 pt-3 text-xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-white mb-1">
            Languages
          </div>
          <div className="text-slate-300 text-[11px] space-y-0.5">
            {resume.skills.languages.map((l) => (
              <div key={l.language} className="flex justify-between">
                <span>{l.language}</span>
                <span className="text-slate-400 italic">{l.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Right Main Column (65% width) */}
      <main className="w-full md:w-[65%] p-6 sm:p-8 space-y-4 text-xs sm:text-sm">
        {/* Professional Summary */}
        {settings.showSummary && resume.summary && (
          <section className="page-break-avoid">
            <h2 className={`text-xs font-bold uppercase tracking-wider border-b-2 pb-1 mb-2 ${accentColor} border-neutral-300`}>
              Executive Summary
            </h2>
            <p className="text-justify text-neutral-700 leading-relaxed text-xs sm:text-[13px]">
              {resume.summary}
            </p>
          </section>
        )}

        {/* Key Projects */}
        <section className="page-break-avoid space-y-3">
          <h2 className={`text-xs font-bold uppercase tracking-wider border-b-2 pb-1 mb-2 ${accentColor} border-neutral-300`}>
            Key Engineering Projects
          </h2>
          {resume.projects.map((proj) => (
            <div key={proj.id} className="page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-neutral-900 text-xs sm:text-sm">{proj.title}</h3>
                <span className="text-[11px] text-neutral-500 font-medium">
                  {proj.duration || 'Project'}
                </span>
              </div>
              <div className="text-[11px] font-medium text-blue-800 mb-1">
                Tech Stack: {proj.techStack.join(' • ')}
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-700 leading-relaxed">
                {proj.descriptionBullets.map((bullet, idx) => (
                  <li key={idx} className="text-justify">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Honors & Extracurricular Leadership */}
        {settings.showSports && (
          <section className="page-break-avoid pt-2">
            <h2 className={`text-xs font-bold uppercase tracking-wider border-b-2 pb-1 mb-2 ${accentColor} border-neutral-300`}>
              Honors, Leadership & Athletics
            </h2>
            <div className="space-y-2 text-xs text-neutral-700">
              {resume.achievements.map((ach) => (
                <div key={ach.id} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 font-semibold">{ach.title}: </strong>
                    <span>{ach.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
