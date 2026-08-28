import React from 'react';
import { ResumeData, ResumeSettings } from '../../types';

interface TemplateProps {
  resume: ResumeData;
  settings: ResumeSettings;
}

export const HarvardAtsResume: React.FC<TemplateProps> = ({ resume, settings }) => {
  const fontClass =
    settings.font === 'garamond'
      ? 'font-serif-garamond'
      : settings.font === 'source'
      ? 'font-serif-source'
      : settings.font === 'sans'
      ? 'font-sans-clean'
      : 'font-sans-inter';

  const accentBorderColor =
    settings.accent === 'navy'
      ? 'border-slate-800'
      : settings.accent === 'emerald'
      ? 'border-emerald-800'
      : settings.accent === 'royal'
      ? 'border-blue-900'
      : settings.accent === 'burgundy'
      ? 'border-rose-950'
      : settings.accent === 'slate'
      ? 'border-slate-700'
      : 'border-neutral-900';

  const accentTextColor =
    settings.accent === 'navy'
      ? 'text-slate-900'
      : settings.accent === 'emerald'
      ? 'text-emerald-950'
      : settings.accent === 'royal'
      ? 'text-blue-950'
      : settings.accent === 'burgundy'
      ? 'text-rose-950'
      : settings.accent === 'slate'
      ? 'text-slate-900'
      : 'text-neutral-950';

  const spacingClass =
    settings.density === 'compact' ? 'space-y-2.5 text-[13px] leading-relaxed' : 'space-y-3.5 text-[14px] leading-normal';

  return (
    <div
      id="resume-content"
      className={`resume-paper w-full max-w-[850px] mx-auto bg-white text-neutral-900 p-8 sm:p-10 shadow-2xl rounded-sm ${fontClass} ${spacingClass}`}
    >
      {/* Header */}
      <header className="text-center border-b pb-3 border-neutral-300 page-break-avoid">
        <h1 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase ${accentTextColor}`}>
          {resume.fullName}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-neutral-700 mt-1">
          {resume.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-700 mt-2 font-sans-inter">
          <span>{resume.location}</span>
          <span className="text-neutral-400">•</span>
          <a href={`tel:${resume.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline font-medium">
            {resume.phone}
          </a>
          <span className="text-neutral-400">•</span>
          <a href={`mailto:${resume.email}`} className="hover:underline font-medium text-blue-700">
            {resume.email}
          </a>
          <span className="text-neutral-400">•</span>
          <a href={resume.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-blue-700">
            linkedin.com/in/ajjayyanh0421
          </a>
          <span className="text-neutral-400">•</span>
          <a href={resume.github} target="_blank" rel="noreferrer" className="hover:underline text-blue-700">
            github.com/Ajjayya0421
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      {settings.showSummary && resume.summary && (
        <section className="page-break-avoid">
          <h2
            className={`text-xs sm:text-sm font-bold uppercase tracking-wider border-b pb-0.5 mb-1.5 ${accentBorderColor} ${accentTextColor}`}
          >
            Professional Summary
          </h2>
          <p className="text-justify text-neutral-800 leading-snug">
            {resume.summary}
          </p>
        </section>
      )}

      {/* Education */}
      <section className="page-break-avoid">
        <h2
          className={`text-xs sm:text-sm font-bold uppercase tracking-wider border-b pb-0.5 mb-2 ${accentBorderColor} ${accentTextColor}`}
        >
          Education
        </h2>
        <div className="space-y-2.5">
          {resume.education.map((edu) => (
            <div key={edu.id} className="page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <span className="font-bold text-neutral-900">{edu.institution}</span>
                  <span className="text-neutral-600 text-xs sm:text-sm"> — {edu.location}</span>
                </div>
                <div className="text-xs font-semibold text-neutral-800 shrink-0">
                  {edu.startYear} – {edu.endYear}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mt-0.5">
                <span className="italic text-neutral-800 text-xs sm:text-sm">{edu.degree}</span>
                <span className="text-xs font-bold text-neutral-900 bg-neutral-100 px-1.5 py-0.5 rounded">
                  {edu.scoreLabel}: {edu.score}
                </span>
              </div>
              {settings.showCoursework && edu.highlights && edu.highlights.length > 0 && (
                <ul className="list-disc list-outside ml-4 mt-1 text-xs text-neutral-700 space-y-0.5">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="page-break-avoid">
        <h2
          className={`text-xs sm:text-sm font-bold uppercase tracking-wider border-b pb-0.5 mb-1.5 ${accentBorderColor} ${accentTextColor}`}
        >
          Technical Skills & Competencies
        </h2>
        <div className="text-xs sm:text-sm space-y-1 text-neutral-800">
          <div>
            <span className="font-semibold text-neutral-900">Programming Languages:</span>{' '}
            <span>{resume.skills.programmingLanguages.join(', ')}</span>
          </div>
          <div>
            <span className="font-semibold text-neutral-900">CS Fundamentals:</span>{' '}
            <span>{resume.skills.coreCompetencies.join(', ')}</span>
          </div>
          <div>
            <span className="font-semibold text-neutral-900">Cyber Security & Networks:</span>{' '}
            <span>{resume.skills.cyberSecurityAndNetworking.join(', ')}</span>
          </div>
          <div>
            <span className="font-semibold text-neutral-900">Databases & Tools:</span>{' '}
            <span>{resume.skills.databases.join(', ')} | Tools: {resume.skills.developerTools.join(', ')}</span>
          </div>
          <div>
            <span className="font-semibold text-neutral-900">Languages:</span>{' '}
            <span>
              {resume.skills.languages.map((l) => `${l.language} (${l.proficiency})`).join(', ')}
            </span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="page-break-avoid">
        <h2
          className={`text-xs sm:text-sm font-bold uppercase tracking-wider border-b pb-0.5 mb-2 ${accentBorderColor} ${accentTextColor}`}
        >
          Key Technical Projects
        </h2>
        <div className="space-y-3">
          {resume.projects.map((proj) => (
            <div key={proj.id} className="page-break-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <span className="font-bold text-neutral-950">{proj.title}</span>
                  {proj.techStack && (
                    <span className="text-xs font-medium text-neutral-600 ml-1.5">
                      | {proj.techStack.join(' • ')}
                    </span>
                  )}
                </div>
                <div className="text-xs text-neutral-600 shrink-0 font-medium">
                  {proj.duration || 'Academic Project'}
                </div>
              </div>
              {proj.role && (
                <div className="text-xs italic text-neutral-700 mb-0.5">
                  Role: {proj.role}
                </div>
              )}
              <ul className="list-disc list-outside ml-4 mt-1 text-xs text-neutral-800 space-y-0.5 leading-relaxed">
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

      {/* Certifications */}
      <section className="page-break-avoid">
        <h2
          className={`text-xs sm:text-sm font-bold uppercase tracking-wider border-b pb-0.5 mb-1.5 ${accentBorderColor} ${accentTextColor}`}
        >
          Certifications & Specialized Learning
        </h2>
        <ul className="list-disc list-outside ml-4 text-xs text-neutral-800 space-y-1">
          {resume.certifications.map((cert) => (
            <li key={cert.id}>
              <span className="font-bold text-neutral-900">{cert.name}</span> —{' '}
              <span className="text-neutral-700">{cert.issuer}</span>{' '}
              <span className="text-neutral-500 italic text-[11px]">({cert.issueDate})</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Honors & Extracurriculars */}
      {settings.showSports && (
        <section className="page-break-avoid">
          <h2
            className={`text-xs sm:text-sm font-bold uppercase tracking-wider border-b pb-0.5 mb-1.5 ${accentBorderColor} ${accentTextColor}`}
          >
            Honors, Extracurricular & Athletic Leadership
          </h2>
          <div className="space-y-1.5 text-xs text-neutral-800">
            {resume.achievements.map((ach) => (
              <div key={ach.id} className="flex items-start gap-1.5">
                <span className="font-bold text-neutral-900 shrink-0">• {ach.title}:</span>
                <span className="text-neutral-700">{ach.description}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
