import React from 'react';
import { ResumeData, ResumeSettings } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, GraduationCap, Code2, Briefcase, Trophy, Globe } from 'lucide-react';

interface TemplateProps {
  resume: ResumeData;
  settings: ResumeSettings;
}

export const ModernTechResume: React.FC<TemplateProps> = ({ resume, settings }) => {
  const fontClass =
    settings.font === 'garamond'
      ? 'font-serif-garamond'
      : settings.font === 'source'
      ? 'font-serif-source'
      : settings.font === 'sans'
      ? 'font-sans-clean'
      : 'font-sans-inter';

  const accentHex =
    settings.accent === 'navy'
      ? 'bg-slate-900 text-white'
      : settings.accent === 'emerald'
      ? 'bg-emerald-800 text-white'
      : settings.accent === 'royal'
      ? 'bg-blue-700 text-white'
      : settings.accent === 'burgundy'
      ? 'bg-rose-900 text-white'
      : settings.accent === 'slate'
      ? 'bg-slate-800 text-white'
      : 'bg-neutral-900 text-white';

  const accentText =
    settings.accent === 'navy'
      ? 'text-slate-900'
      : settings.accent === 'emerald'
      ? 'text-emerald-800'
      : settings.accent === 'royal'
      ? 'text-blue-700'
      : settings.accent === 'burgundy'
      ? 'text-rose-900'
      : settings.accent === 'slate'
      ? 'text-slate-800'
      : 'text-neutral-900';

  const badgeBg =
    settings.accent === 'navy'
      ? 'bg-slate-100 text-slate-800 border-slate-200'
      : settings.accent === 'emerald'
      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
      : settings.accent === 'royal'
      ? 'bg-blue-50 text-blue-800 border-blue-200'
      : settings.accent === 'burgundy'
      ? 'bg-rose-50 text-rose-800 border-rose-200'
      : 'bg-neutral-100 text-neutral-800 border-neutral-200';

  const spacingClass =
    settings.density === 'compact' ? 'space-y-3 text-[13px]' : 'space-y-4 text-[14px]';

  return (
    <div
      id="resume-content"
      className={`resume-paper w-full max-w-[850px] mx-auto bg-white text-neutral-900 p-8 sm:p-10 shadow-2xl rounded-lg border border-neutral-200 ${fontClass} ${spacingClass}`}
    >
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4 page-break-avoid">
        <div>
          <h1 className={`text-3xl font-extrabold tracking-tight ${accentText}`}>
            {resume.fullName}
          </h1>
          <p className="text-sm font-semibold text-neutral-600 tracking-wide mt-0.5">
            {resume.title}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600 mt-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              {resume.location}
            </span>
            <a href={`tel:${resume.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-1 hover:text-blue-600 font-medium">
              <Phone className="w-3.5 h-3.5 text-neutral-500" />
              {resume.phone}
            </a>
            <a href={`mailto:${resume.email}`} className="flex items-center gap-1 hover:text-blue-600 font-medium text-blue-700">
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              {resume.email}
            </a>
          </div>
        </div>

        {/* Social / Portals */}
        <div className="flex flex-row sm:flex-col gap-2 shrink-0">
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md border border-neutral-300 hover:border-blue-600 hover:text-blue-700 transition-colors bg-neutral-50"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href={resume.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md border border-neutral-300 hover:border-neutral-900 hover:text-neutral-900 transition-colors bg-neutral-50"
          >
            <Github className="w-3.5 h-3.5 text-neutral-800" />
            <span>GitHub Repos</span>
          </a>
        </div>
      </header>

      {/* Summary */}
      {settings.showSummary && resume.summary && (
        <section className="page-break-avoid bg-neutral-50/80 p-3.5 rounded-lg border border-neutral-200/80">
          <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
            {resume.summary}
          </p>
        </section>
      )}

      {/* Skills Grid */}
      <section className="page-break-avoid">
        <div className="flex items-center gap-2 mb-2">
          <Code2 className={`w-4 h-4 ${accentText}`} />
          <h2 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${accentText}`}>
            Skills & Tech Stack
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-md border border-neutral-200 bg-neutral-50/50">
            <span className="font-bold text-neutral-900 block mb-1">Languages & Core:</span>
            <div className="flex flex-wrap gap-1">
              {resume.skills.programmingLanguages.map((l) => (
                <span key={l} className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${badgeBg}`}>
                  {l}
                </span>
              ))}
              {resume.skills.coreCompetencies.slice(0, 3).map((c) => (
                <span key={c} className="px-2 py-0.5 rounded text-[11px] font-medium border bg-white text-neutral-700 border-neutral-200">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="p-2.5 rounded-md border border-neutral-200 bg-neutral-50/50">
            <span className="font-bold text-neutral-900 block mb-1">Cyber Security & Systems:</span>
            <div className="flex flex-wrap gap-1">
              {resume.skills.cyberSecurityAndNetworking.slice(0, 4).map((s) => (
                <span key={s} className="px-2 py-0.5 rounded text-[11px] font-medium border bg-white text-neutral-700 border-neutral-200">
                  {s}
                </span>
              ))}
              {resume.skills.databases.map((db) => (
                <span key={db} className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${badgeBg}`}>
                  {db}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="page-break-avoid">
        <div className="flex items-center gap-2 mb-2.5">
          <Briefcase className={`w-4 h-4 ${accentText}`} />
          <h2 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${accentText}`}>
            Featured Engineering Projects
          </h2>
        </div>
        <div className="space-y-3">
          {resume.projects.map((proj) => (
            <div key={proj.id} className="p-3.5 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 transition-shadow page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-neutral-900 text-sm">{proj.title}</h3>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-500 hover:text-blue-600"
                      title="View Code on GitHub"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                  {proj.duration || 'Project'}
                </span>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 mb-2">
                {proj.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 bg-neutral-100 text-neutral-700 rounded font-medium">
                    {tech}
                  </span>
                ))}
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
        </div>
      </section>

      {/* Education */}
      <section className="page-break-avoid">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className={`w-4 h-4 ${accentText}`} />
          <h2 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${accentText}`}>
            Academic Background
          </h2>
        </div>
        <div className="space-y-2">
          {resume.education.map((edu) => (
            <div key={edu.id} className="p-3 rounded-lg border border-neutral-200 bg-neutral-50/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 page-break-avoid">
              <div>
                <h4 className="font-bold text-neutral-900 text-xs sm:text-sm">{edu.institution}</h4>
                <p className="text-xs text-neutral-700">{edu.degree} — <span className="italic">{edu.location}</span></p>
                {edu.highlights && edu.highlights.length > 0 && (
                  <p className="text-[11px] text-neutral-600 mt-0.5">{edu.highlights[0]}</p>
                )}
              </div>
              <div className="flex sm:flex-col items-end justify-between sm:justify-center shrink-0">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${accentHex}`}>
                  {edu.scoreLabel}: {edu.score}
                </span>
                <span className="text-[11px] font-medium text-neutral-500 mt-1">
                  {edu.startYear} – {edu.endYear}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Extracurriculars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 page-break-avoid">
        {/* Certifications */}
        <section className="p-3.5 rounded-lg border border-neutral-200 bg-white">
          <div className="flex items-center gap-1.5 mb-2">
            <Award className={`w-4 h-4 ${accentText}`} />
            <h2 className={`text-xs font-bold uppercase tracking-wider ${accentText}`}>
              Certifications
            </h2>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-700">
            {resume.certifications.map((c) => (
              <li key={c.id} className="border-b border-neutral-100 last:border-0 pb-1">
                <span className="font-semibold text-neutral-900 block">{c.name}</span>
                <span className="text-[11px] text-neutral-500">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Honors & Sports */}
        {settings.showSports && (
          <section className="p-3.5 rounded-lg border border-neutral-200 bg-white">
            <div className="flex items-center gap-1.5 mb-2">
              <Trophy className={`w-4 h-4 ${accentText}`} />
              <h2 className={`text-xs font-bold uppercase tracking-wider ${accentText}`}>
                Athletic & Academic Honors
              </h2>
            </div>
            <ul className="space-y-1.5 text-xs text-neutral-700">
              {resume.achievements.map((ach) => (
                <li key={ach.id} className="border-b border-neutral-100 last:border-0 pb-1">
                  <span className="font-semibold text-neutral-900 block">{ach.title}</span>
                  <span className="text-[11px] text-neutral-600">{ach.description}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Languages footer */}
      <div className="pt-2 border-t border-neutral-200 text-xs text-neutral-600 flex items-center justify-between page-break-avoid">
        <span className="flex items-center gap-1">
          <Globe className="w-3.5 h-3.5" />
          <strong className="text-neutral-800">Languages:</strong>{' '}
          {resume.skills.languages.map((l) => `${l.language} (${l.proficiency})`).join(' • ')}
        </span>
        <span className="text-[11px] text-neutral-400 font-mono">
          Ref: AIET / VTU 2028
        </span>
      </div>
    </div>
  );
};
