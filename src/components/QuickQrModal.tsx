import React from 'react';
import { ResumeData } from '../types';
import { X, Linkedin, Github, Phone, Mail, ExternalLink, QrCode } from 'lucide-react';

interface QuickQrModalProps {
  resume: ResumeData;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickQrModal: React.FC<QuickQrModalProps> = ({ resume, isOpen, onClose }) => {
  if (!isOpen) return null;

  // We can use Google Charts API / standard public QR generator URL for crisp QR rendering
  const linkedinQr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    resume.linkedin
  )}`;
  const githubQr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    resume.github
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm no-print overflow-y-auto">
      <div className="bg-[#1a1d23] border border-slate-800/80 rounded-2xl max-w-xl w-full flex flex-col shadow-2xl text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900/30 text-blue-400 border border-blue-800/50 flex items-center justify-center">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Instant Recruiter QR Portals</h2>
              <p className="text-xs text-slate-400">
                Scan with any smartphone camera for direct access to profile links
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

        {/* QR Display Cards */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* LinkedIn QR */}
          <div className="p-4 bg-[#121418] rounded-xl border border-slate-800 flex flex-col items-center text-center space-y-3">
            <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg shadow-md">
              <img
                src={linkedinQr}
                alt="LinkedIn QR Code"
                className="w-36 h-36 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-mono"
            >
              <span>/in/ajjayyanh0421</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* GitHub QR */}
          <div className="p-4 bg-[#121418] rounded-xl border border-slate-800 flex flex-col items-center text-center space-y-3">
            <div className="flex items-center gap-1.5 text-slate-200 font-bold text-xs">
              <Github className="w-4 h-4 text-white" />
              <span>GitHub Repositories</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg shadow-md">
              <img
                src={githubQr}
                alt="GitHub QR Code"
                className="w-36 h-36 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <a
              href={resume.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-300 hover:underline flex items-center gap-1 font-mono"
            >
              <span>/Ajjayya0421</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Quick Contacts Bar */}
        <div className="px-6 pb-6 pt-1">
          <div className="p-3 bg-[#121418] rounded-xl border border-slate-800 flex flex-wrap items-center justify-around gap-2 text-xs">
            <a
              href={`tel:${resume.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-emerald-400 hover:underline font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{resume.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`mailto:${resume.email}`}
              className="flex items-center gap-1.5 text-blue-400 hover:underline font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{resume.email}</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
