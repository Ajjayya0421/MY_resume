import React from 'react';
import { ResumeData, ResumeSettings } from '../../types';

interface TemplateProps {
  resume: ResumeData;
  settings: ResumeSettings;
}

export const MinimalEngineeringResume: React.FC<TemplateProps> = ({ resume, settings }) => {
  const fontClass =
    settings.font === 'garamond'
      ? 'font-serif-garamond'
      : settings.font === 'source'
      ? 'font-serif-source'
      : settings.font === 'sans'
      ? 'font-sans-clean'
      : 'font-sans-inter';

  return (
    <div
      id="resume-content"
      className={`resume-paper w-full max-w-[850px] mx-auto bg-white text-zinc-900 p-8 sm:p-10 shadow-2xl rounded-sm ${fontClass} space-y-3.5 text-[13.5px] leading-snug`}
    >
      {/* Header */}
      <header className="border-b-2 border-black pb-2.5 page-break-avoid">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">
            {resume.fullName}
          </h1>
          <div className="text-xs font-mono text-zinc-700 mt-1 sm:mt-0">
            {resume.phone} | {resume.email}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between text-xs text-zinc-600 mt-1 font-mono">
          <span>{resume.title} • {resume.location}</span>
          <div className="flex gap-3">
            <a href={resume.linkedin} target="_blank" rel="noreferrer" className="text-zinc-900 font-semibold hover:underline">
              linkedin.com/in/ajjayyanh0421
            </a>
            <a href={resume.github} target="_blank" rel="noreferrer" className="text-zinc-900 font-semibold hover:underline">
              github.com/Ajjayya0421
            </a>
          </div>
        </div>
      </header>

      {/* Summary */}
      {settings.showSummary && resume.summary && (
        <section className="page-break-avoid">
          <p className="text-xs text-zinc-800 leading-relaxed">
            <strong className="font-semibold text-black">Profile:</strong> {resume.summary}
          </p>
        </section>
      )}

      {/* Technical Competencies */}
      <section className="page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-0.5 mb-1.5 font-mono">
          [ 01. TECHNICAL EXPERTISE ]
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
          <div>
            <span className="font-bold text-zinc-900">Languages:</span>{' '}
            <span className="font-mono text-zinc-800">{resume.skills.programmingLanguages.join(', ')}</span>
          </div>
          <div>
            <span className="font-bold text-zinc-900">Databases:</span>{' '}
            <span className="font-mono text-zinc-800">{resume.skills.databases.join(', ')}</span>
          </div>
          <div>
            <span className="font-bold text-zinc-900">CS Core:</span>{' '}
            <span className="text-zinc-800">{resume.skills.coreCompetencies.slice(0, 4).join(', ')}</span>
          </div>
          <div>
            <span className="font-bold text-zinc-900">Security & Systems:</span>{' '}
            <span className="text-zinc-800">{resume.skills.cyberSecurityAndNetworking.slice(0, 3).join(', ')}</span>
          </div>
        </div>
      </section>

      {/* Experience / Projects */}
      <section className="page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-0.5 mb-2 font-mono">
          [ 02. KEY SOFTWARE PROJECTS ]
        </h2>
        <div className="space-y-2.5">
          {resume.projects.map((proj) => (
            <div key={proj.id} className="page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <span className="font-bold text-black text-sm">{proj.title}</span>
                  <span className="text-xs font-mono text-zinc-600 ml-2">
                    [{proj.techStack.join(', ')}]
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                  {proj.duration || '2024-Present'}
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1 text-xs text-zinc-800 space-y-0.5">
                {proj.descriptionBullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-0.5 mb-2 font-mono">
          [ 03. EDUCATION ]
        </h2>
        <div className="space-y-2 text-xs">
          {resume.education.map((edu) => (
            <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between page-break-avoid">
              <div>
                <span className="font-bold text-zinc-900">{edu.institution}</span> —{' '}
                <span className="text-zinc-700">{edu.degree}</span>
              </div>
              <div className="font-mono text-zinc-900 font-semibold shrink-0">
                {edu.scoreLabel}: {edu.score} | {edu.startYear}–{edu.endYear}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Extracurriculars */}
      <section className="page-break-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-zinc-300 pb-0.5 mb-1.5 font-mono">
          [ 04. CERTIFICATIONS & ATHLETIC HONORS ]
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-800">
          <div>
            <span className="font-bold text-zinc-900 block mb-0.5">Verified Credentials:</span>
            {resume.certifications.map((c) => (
              <div key={c.id} className="text-zinc-700">
                • {c.name} ({c.issuer})
              </div>
            ))}
          </div>
          {settings.showSports && (
            <div>
              <span className="font-bold text-zinc-900 block mb-0.5">Achievements:</span>
              {resume.achievements.map((a) => (
                <div key={a.id} className="text-zinc-700">
                  • <strong className="text-zinc-900">{a.title}:</strong> {a.description.slice(0, 100)}...
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
