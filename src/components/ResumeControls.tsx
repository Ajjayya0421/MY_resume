import React from 'react';
import { ResumeSettings, TemplateStyle, FontChoice, AccentColor, PageDensity } from '../types';
import {
  Printer,
  Copy,
  Sparkles,
  FileText,
  Sliders,
  Check,
  QrCode,
  FileCheck2,
  Share2,
  Download,
  BookOpen,
} from 'lucide-react';

interface ResumeControlsProps {
  settings: ResumeSettings;
  onUpdateSettings: (newSettings: Partial<ResumeSettings>) => void;
  onOpenEditor: () => void;
  onOpenAtsAnalyzer: () => void;
  onOpenCoverLetter: () => void;
  onOpenBulletEnhancer: () => void;
  onOpenQrModal: () => void;
  onCopyPlainText: () => void;
  onCopyMarkdown: () => void;
  isCopiedText: boolean;
  isCopiedMd: boolean;
}

export const ResumeControls: React.FC<ResumeControlsProps> = ({
  settings,
  onUpdateSettings,
  onOpenEditor,
  onOpenAtsAnalyzer,
  onOpenCoverLetter,
  onOpenBulletEnhancer,
  onOpenQrModal,
  onCopyPlainText,
  onCopyMarkdown,
  isCopiedText,
  isCopiedMd,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const templates: { id: TemplateStyle; name: string; tag: string }[] = [
    { id: 'cyber-shield', name: '3D Cyber Shield (Enterprise Tech)', tag: '3D Cyber' },
    { id: 'elegant-dark', name: 'Elegant Dark (Obsidian Tech)', tag: 'Theme Choice' },
    { id: 'harvard', name: 'Harvard ATS (FAANG Choice)', tag: '100% ATS' },
    { id: 'modern', name: 'Modern Tech (Silicon Valley)', tag: 'Visual Tech' },
    { id: 'minimal', name: 'Minimalist Engineering', tag: 'High Density' },
    { id: 'executive', name: 'Executive Dual-Column', tag: 'Two-Column' },
  ];

  const fonts: { id: FontChoice; label: string }[] = [
    { id: 'garamond', label: 'EB Garamond (Classic ATS)' },
    { id: 'source', label: 'Source Serif (Refined)' },
    { id: 'sans', label: 'Plus Jakarta Sans (Modern)' },
    { id: 'inter', label: 'Inter (Clean Tech)' },
  ];

  const accents: { id: AccentColor; label: string; bg: string }[] = [
    { id: 'navy', label: 'Deep Slate / Navy', bg: 'bg-slate-900' },
    { id: 'royal', label: 'Royal Blue', bg: 'bg-blue-800' },
    { id: 'emerald', label: 'Emerald Green', bg: 'bg-emerald-800' },
    { id: 'burgundy', label: 'Burgundy', bg: 'bg-rose-900' },
    { id: 'charcoal', label: 'Charcoal Black', bg: 'bg-neutral-900' },
  ];

  return (
    <header className="no-print bg-[#1a1d23]/95 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-40 px-4 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
        {/* Brand / Candidate Summary Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-white shadow-md text-sm">
            AN
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base sm:text-lg tracking-tight">
                Ajjayya N H
              </span>
              <span className="bg-blue-900/30 text-blue-400 text-[11px] font-semibold px-2 py-0.5 rounded border border-blue-800/50 flex items-center gap-1 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ATS Grade A+ (98%)
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Software Engineer | Alva&apos;s Institute of Engineering & Technology (VTU) • CGPA 8.799
            </p>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-start lg:justify-end">
          {/* Print / Download PDF */}
          <button
            onClick={handlePrint}
            id="btn-download-pdf"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
            title="Download or Print crisp PDF formatted for 1-Page A4 / Letter"
          >
            <Printer className="w-4 h-4" />
            <span>Download / Print PDF</span>
          </button>

          {/* ATS Analyzer Button */}
          <button
            onClick={onOpenAtsAnalyzer}
            id="btn-ats-analyzer"
            className="flex items-center gap-1.5 bg-[#121418] hover:bg-slate-800 text-emerald-400 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            <span>ATS Score (98%)</span>
          </button>

          {/* AI STAR Bullet Enhancer */}
          <button
            onClick={onOpenBulletEnhancer}
            id="btn-star-bullets"
            className="flex items-center gap-1.5 bg-[#121418] hover:bg-slate-800 text-blue-400 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>STAR Bullets</span>
          </button>

          {/* Cover Letter */}
          <button
            onClick={onOpenCoverLetter}
            id="btn-cover-letter"
            className="flex items-center gap-1.5 bg-[#121418] hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Cover Letter</span>
          </button>

          {/* Quick QR Code */}
          <button
            onClick={onOpenQrModal}
            id="btn-qr-connect"
            className="flex items-center gap-1.5 bg-[#121418] hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors cursor-pointer"
            title="Scan QR Code for LinkedIn & GitHub"
          >
            <QrCode className="w-4 h-4 text-slate-300" />
            <span className="hidden sm:inline">QR Connect</span>
          </button>

          {/* Edit Resume */}
          <button
            onClick={onOpenEditor}
            id="btn-edit-resume"
            className="flex items-center gap-1.5 bg-[#121418] hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <Sliders className="w-4 h-4 text-slate-300" />
            <span>Edit Data</span>
          </button>

          {/* Copy Plain Text for ATS forms */}
          <button
            onClick={onCopyPlainText}
            id="btn-copy-plain-text"
            className="flex items-center gap-1 bg-[#121418] hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-xs px-2.5 py-2 rounded-lg transition-colors cursor-pointer"
            title="Copy Plain Text ATS format for Workday, Greenhouse & Job Portals"
          >
            {isCopiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isCopiedText ? 'Copied Text!' : 'Copy ATS Text'}</span>
          </button>

          {/* Copy Markdown for GitHub */}
          <button
            onClick={onCopyMarkdown}
            id="btn-copy-markdown"
            className="flex items-center gap-1 bg-[#121418] hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-xs px-2.5 py-2 rounded-lg transition-colors cursor-pointer"
            title="Copy Markdown for GitHub Profile README"
          >
            {isCopiedMd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <BookOpen className="w-3.5 h-3.5" />}
            <span>{isCopiedMd ? 'Copied MD!' : 'Copy Markdown'}</span>
          </button>
        </div>
      </div>

      {/* Sub-bar: Format, Font & Accent controls */}
      <div className="max-w-7xl mx-auto mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
        {/* Template Selectors */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-slate-400 mr-1 text-[11px] uppercase tracking-wider">
            Format:
          </span>
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => onUpdateSettings({ template: tpl.id })}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                settings.template === tpl.id
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 border border-slate-750'
              }`}
            >
              <span>{tpl.name}</span>
              <span
                className={`text-[10px] px-1 py-0.2 rounded font-mono ${
                  settings.template === tpl.id ? 'bg-blue-800 text-blue-100' : 'bg-slate-700 text-slate-300'
                }`}
              >
                {tpl.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Font & Accent & Density Controls */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Font choice */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 text-[11px] uppercase font-semibold">Font:</span>
            <select
              value={settings.font}
              onChange={(e) => onUpdateSettings({ font: e.target.value as FontChoice })}
              className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              {fonts.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          {/* Accent Color */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 text-[11px] uppercase font-semibold">Accent:</span>
            <div className="flex items-center gap-1">
              {accents.map((acc) => (
                <button
                  key={acc.id}
                  onClick={() => onUpdateSettings({ accent: acc.id })}
                  className={`w-5 h-5 rounded-full ${acc.bg} border-2 transition-transform cursor-pointer ${
                    settings.accent === acc.id ? 'border-white scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  title={acc.label}
                />
              ))}
            </div>
          </div>

          {/* Page Density */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 text-[11px] uppercase font-semibold">Density:</span>
            <button
              onClick={() =>
                onUpdateSettings({
                  density: settings.density === 'compact' ? 'standard' : 'compact',
                })
              }
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs px-2 py-1 rounded cursor-pointer"
            >
              {settings.density === 'compact' ? '📄 1-Page Compact' : '📑 Standard Flow'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
