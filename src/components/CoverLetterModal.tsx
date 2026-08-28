import React, { useState } from 'react';
import { ResumeData } from '../types';
import { generateCoverLetter } from '../utils/resumeUtils';
import { X, Copy, Check, Printer, Building2, Briefcase, FileText } from 'lucide-react';

interface CoverLetterModalProps {
  resume: ResumeData;
  isOpen: boolean;
  onClose: () => void;
}

export const CoverLetterModal: React.FC<CoverLetterModalProps> = ({ resume, isOpen, onClose }) => {
  const [companyName, setCompanyName] = useState('Google / Microsoft / Tier-1 Tech');
  const [roleTitle, setRoleTitle] = useState('Software Development Engineer (SDE) Intern');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const letterText = generateCoverLetter(resume, companyName, roleTitle);

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Cover Letter - Ajjayya N H</title>
            <style>
              body { font-family: 'Times New Roman', Georgia, serif; line-height: 1.6; margin: 40px; color: #111; font-size: 14px; }
              pre { white-space: pre-wrap; font-family: inherit; font-size: inherit; }
            </style>
          </head>
          <body>
            <pre>${letterText}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm no-print overflow-y-auto">
      <div className="bg-[#1a1d23] border border-slate-800/80 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900/30 text-blue-400 border border-blue-800/50 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Targeted Cover Letter Generator</h2>
              <p className="text-xs text-slate-400">
                Customized for Ajjayya N H tailored for competitive engineering & internship roles
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Inputs */}
        <div className="p-4 bg-[#121418] border-b border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              Target Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Google, Microsoft, Amazon, Infosys"
              className="w-full bg-slate-900 border border-slate-700 text-xs rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1 flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              Role / Position Title
            </label>
            <input
              type="text"
              value={roleTitle}
              onChange={(e) => setRoleTitle(e.target.value)}
              placeholder="e.g. Software Development Engineer Intern"
              className="w-full bg-slate-900 border border-slate-700 text-xs rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Letter Preview */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#0f1115]">
          <div className="bg-white text-slate-900 p-8 rounded-xl shadow-lg font-serif-garamond text-[15px] leading-relaxed select-text whitespace-pre-line border border-slate-300 max-w-2xl mx-auto">
            {letterText}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-[#121418] hover:bg-slate-800 text-slate-200 text-xs px-3.5 py-2 rounded-lg border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Cover Letter</span>
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer transition-colors"
            >
              {isCopied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Letter Text'}</span>
            </button>
            <button
              onClick={onClose}
              className="bg-[#121418] hover:bg-slate-800 text-slate-300 text-xs px-3.5 py-2 rounded-lg border border-slate-800 cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
