/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ResumeData, ResumeSettings } from './types';
import { defaultResumeData } from './data/defaultResume';
import { HarvardAtsResume } from './components/templates/HarvardAtsResume';
import { ModernTechResume } from './components/templates/ModernTechResume';
import { MinimalEngineeringResume } from './components/templates/MinimalEngineeringResume';
import { ExecutiveDualResume } from './components/templates/ExecutiveDualResume';
import { ElegantDarkResume } from './components/templates/ElegantDarkResume';
import { CyberShieldResume } from './components/templates/CyberShieldResume';
import { CyberBackgroundCanvas } from './components/CyberBackgroundCanvas';
import { ResumeControls } from './components/ResumeControls';
import { AtsAnalyzerModal } from './components/AtsAnalyzerModal';
import { CoverLetterModal } from './components/CoverLetterModal';
import { StarBulletEnhancerModal } from './components/StarBulletEnhancerModal';
import { QuickQrModal } from './components/QuickQrModal';
import { ResumeEditorModal } from './components/ResumeEditorModal';
import { generatePlainTextResume, generateMarkdownResume } from './utils/resumeUtils';
import {
  FileText,
  Printer,
  Sparkles,
  Sliders,
  CheckCircle,
  QrCode,
  ShieldCheck,
  Award,
  BookOpen,
  Mail,
  Phone,
  Linkedin,
  Github,
  Check,
  ChevronUp,
} from 'lucide-react';

const STORAGE_KEY_DATA = 'ajjayya_resume_data_v2';
const STORAGE_KEY_SETTINGS = 'ajjayya_resume_settings_v2';

const defaultSettings: ResumeSettings = {
  template: 'cyber-shield',
  font: 'sans',
  accent: 'royal',
  density: 'compact',
  showQrCode: true,
  showCoursework: true,
  showSports: true,
  showSummary: true,
};

export default function App() {
  const [resume, setResume] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DATA);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultResumeData;
  });

  const [settings, setSettings] = useState<ResumeSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return defaultSettings;
  });

  // Modal Visibility States
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isAtsModalOpen, setIsAtsModalOpen] = useState(false);
  const [isCoverLetterOpen, setIsCoverLetterOpen] = useState(false);
  const [isBulletEnhancerOpen, setIsBulletEnhancerOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Copy Feedback
  const [isCopiedText, setIsCopiedText] = useState(false);
  const [isCopiedMd, setIsCopiedMd] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(resume));
    } catch (e) {
      console.error(e);
    }
  }, [resume]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error(e);
    }
  }, [settings]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateSettings = (newSettings: Partial<ResumeSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleCopyPlainText = () => {
    const text = generatePlainTextResume(resume);
    navigator.clipboard.writeText(text);
    setIsCopiedText(true);
    showToast('ATS-optimized plain text copied to clipboard!');
    setTimeout(() => setIsCopiedText(false), 2500);
  };

  const handleCopyMarkdown = () => {
    const md = generateMarkdownResume(resume);
    navigator.clipboard.writeText(md);
    setIsCopiedMd(true);
    showToast('Markdown format copied for GitHub README / portfolio!');
    setTimeout(() => setIsCopiedMd(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen bg-[#0a0c10] text-slate-300 flex flex-col font-sans-clean antialiased selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Dynamic 3D Connected Node & Binary Rain Background Canvas (Hidden in print) */}
      <CyberBackgroundCanvas className="no-print" opacity={0.4} />

      {/* Sticky Top Controls Bar */}
      <ResumeControls
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onOpenEditor={() => setIsEditorOpen(true)}
        onOpenAtsAnalyzer={() => setIsAtsModalOpen(true)}
        onOpenCoverLetter={() => setIsCoverLetterOpen(true)}
        onOpenBulletEnhancer={() => setIsBulletEnhancerOpen(true)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
        onCopyPlainText={handleCopyPlainText}
        onCopyMarkdown={handleCopyMarkdown}
        isCopiedText={isCopiedText}
        isCopiedMd={isCopiedMd}
      />

      {/* Main Resume Canvas Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col lg:flex-row gap-6">
        {/* Left Side Quick Info / Recruiter Sidebar (Hidden during print) */}
        <aside className="no-print w-full lg:w-72 shrink-0 space-y-4 order-2 lg:order-1">
          {/* Candidate Card */}
          <div className="bg-[#1a1d23] border border-slate-800/50 rounded-xl p-5 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center font-bold text-white text-xl border-2 border-slate-600 shadow-inner shrink-0">
                AN
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-snug">{resume.fullName}</h3>
                <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mt-0.5">Software Engineer</p>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">CGPA: 8.799 / 10.0</div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Contact</div>
              <a
                href={`tel:${resume.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{resume.phone}</span>
              </a>
              <a
                href={`mailto:${resume.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{resume.email}</span>
              </a>
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-blue-400 hover:text-blue-300 transition-colors truncate"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span className="truncate">linkedin.com/in/ajjayyanh0421</span>
              </a>
              <a
                href={resume.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-blue-400 hover:text-blue-300 transition-colors truncate"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span className="truncate">github.com/Ajjayya0421</span>
              </a>
            </div>
          </div>

          {/* ATS Verification Status Badge */}
          <div className="bg-[#1a1d23] border border-slate-800/50 rounded-xl p-4 space-y-2.5 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                ATS Compatibility
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                Grade A+
              </span>
            </div>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Parser Compliant (98%)</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Indexed for Workday, Taleo, Greenhouse, and Lever recruiters.
              </p>
            </div>
            <button
              onClick={() => setIsAtsModalOpen(true)}
              className="w-full mt-1 bg-[#121418] hover:bg-slate-800 text-emerald-400 text-xs font-semibold py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            >
              View ATS Parser Audit
            </button>
          </div>

          {/* Section Visibility Toggles */}
          <div className="bg-[#1a1d23] border border-slate-800/50 rounded-xl p-4 space-y-2.5 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
              Display Preferences
            </span>
            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer hover:text-white">
              <span>Show Summary</span>
              <input
                type="checkbox"
                checked={settings.showSummary}
                onChange={(e) => handleUpdateSettings({ showSummary: e.target.checked })}
                className="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0 cursor-pointer"
              />
            </label>
            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer hover:text-white">
              <span>Coursework Highlights</span>
              <input
                type="checkbox"
                checked={settings.showCoursework}
                onChange={(e) => handleUpdateSettings({ showCoursework: e.target.checked })}
                className="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0 cursor-pointer"
              />
            </label>
            <label className="flex items-center justify-between text-xs text-slate-300 cursor-pointer hover:text-white">
              <span>Sports & Badminton Honors</span>
              <input
                type="checkbox"
                checked={settings.showSports}
                onChange={(e) => handleUpdateSettings({ showSports: e.target.checked })}
                className="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0 cursor-pointer"
              />
            </label>
          </div>

          {/* Print Tip */}
          <div className="p-3.5 bg-[#1a1d23] border border-slate-800/50 rounded-xl text-[11px] text-slate-300 space-y-1 shadow-md">
            <span className="font-semibold text-blue-400 flex items-center gap-1">
              <Printer className="w-3.5 h-3.5" />
              Direct 1-Page PDF Export:
            </span>
            <p className="text-slate-400 leading-relaxed">
              Set <strong className="text-slate-200">Destination: Save as PDF</strong>, Paper Size: <strong className="text-slate-200">A4</strong>, and Margins: <strong className="text-slate-200">Default</strong> for a clean 1-page document.
            </p>
          </div>
        </aside>

        {/* Center: Live Resume Preview Sheet */}
        <div className="flex-1 flex flex-col items-center order-1 lg:order-2">
          {/* Quick Notice above resume sheet */}
          <div className="no-print w-full max-w-[1000px] mb-3 flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Active Showcase: <strong className="text-slate-200 uppercase">{settings.template.replace('-', ' ')}</strong>
            </span>
            <button
              onClick={() => setIsEditorOpen(true)}
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer font-medium"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Customize Info</span>
            </button>
          </div>

          {/* Render Active Template */}
          <div className="w-full flex justify-center">
            {settings.template === 'cyber-shield' && (
              <CyberShieldResume resume={resume} settings={settings} />
            )}
            {settings.template === 'elegant-dark' && (
              <ElegantDarkResume resume={resume} settings={settings} />
            )}
            {settings.template === 'harvard' && (
              <HarvardAtsResume resume={resume} settings={settings} />
            )}
            {settings.template === 'modern' && (
              <ModernTechResume resume={resume} settings={settings} />
            )}
            {settings.template === 'minimal' && (
              <MinimalEngineeringResume resume={resume} settings={settings} />
            )}
            {settings.template === 'executive' && (
              <ExecutiveDualResume resume={resume} settings={settings} />
            )}
          </div>
        </div>
      </main>

      {/* Floating Bottom Quick Action Bar for Mobile & Quick Export */}
      <div className="no-print fixed bottom-4 right-4 sm:right-6 z-30 flex items-center gap-2">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all cursor-pointer active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>Export PDF</span>
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-slate-800/90 hover:bg-slate-700 text-slate-300 p-2.5 rounded-full border border-slate-700 shadow-xl cursor-pointer"
          title="Back to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="no-print fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border border-emerald-500/50 text-white text-xs px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <ResumeEditorModal
        resume={resume}
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSave={(updated) => {
          setResume(updated);
          showToast('Resume updated successfully!');
        }}
      />

      <AtsAnalyzerModal
        resume={resume}
        isOpen={isAtsModalOpen}
        onClose={() => setIsAtsModalOpen(false)}
      />

      <CoverLetterModal
        resume={resume}
        isOpen={isCoverLetterOpen}
        onClose={() => setIsCoverLetterOpen(false)}
      />

      <StarBulletEnhancerModal
        isOpen={isBulletEnhancerOpen}
        onClose={() => setIsBulletEnhancerOpen(false)}
      />

      <QuickQrModal
        resume={resume}
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </div>
  );
}
