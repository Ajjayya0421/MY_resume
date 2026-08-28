import React, { useState } from 'react';
import { ResumeData, EducationItem, ProjectItem, CertificationItem, AchievementItem } from '../types';
import { defaultResumeData } from '../data/defaultResume';
import {
  X,
  Plus,
  Trash2,
  Save,
  RotateCcw,
  User,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Trophy,
  FileJson,
  Upload,
  Check,
} from 'lucide-react';

interface ResumeEditorModalProps {
  resume: ResumeData;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newResume: ResumeData) => void;
}

type TabType = 'personal' | 'education' | 'skills' | 'projects' | 'certifications' | 'achievements' | 'rawJson';

export const ResumeEditorModal: React.FC<ResumeEditorModalProps> = ({
  resume,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<ResumeData>(JSON.parse(JSON.stringify(resume)));
  const [activeTab, setActiveTab] = useState<TabType>('personal');
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Reset all fields to original verified details for Ajjayya N H?')) {
      setFormData(JSON.parse(JSON.stringify(defaultResumeData)));
    }
  };

  const handleJsonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        setFormData(parsed);
        alert('Resume data loaded successfully from file!');
      } catch (err) {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  // Education Helpers
  const addEducation = () => {
    const newEdu: EducationItem = {
      id: `edu-${Date.now()}`,
      institution: '',
      degree: '',
      location: '',
      startYear: '2024',
      endYear: '2028',
      score: '8.5',
      scoreLabel: 'CGPA',
      highlights: [],
    };
    setFormData({ ...formData, education: [...formData.education, newEdu] });
  };

  const updateEducation = (index: number, updated: Partial<EducationItem>) => {
    const list = [...formData.education];
    list[index] = { ...list[index], ...updated };
    setFormData({ ...formData, education: list });
  };

  const removeEducation = (index: number) => {
    const list = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: list });
  };

  // Project Helpers
  const addProject = () => {
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: 'New Software Project',
      role: 'Developer',
      techStack: ['Python', 'SQL'],
      duration: 'Recent',
      descriptionBullets: ['Engineered application modules achieving high reliability and throughput.'],
    };
    setFormData({ ...formData, projects: [...formData.projects, newProj] });
  };

  const updateProject = (index: number, updated: Partial<ProjectItem>) => {
    const list = [...formData.projects];
    list[index] = { ...list[index], ...updated };
    setFormData({ ...formData, projects: list });
  };

  const removeProject = (index: number) => {
    const list = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: list });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm no-print overflow-y-auto">
      <div className="bg-[#1a1d23] border border-slate-800/80 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900/30 text-blue-400 border border-blue-800/50 flex items-center justify-center font-bold">
              <Save className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Live Resume Editor & Customizer</h2>
              <p className="text-xs text-slate-400">
                Update details on the fly. All changes immediately sync with ATS preview and PDF exports.
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

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-5 pt-3 border-b border-slate-800 overflow-x-auto bg-[#121418] text-xs">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'personal'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Personal & Summary</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'education'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education ({formData.education.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'skills'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Skills & Tech Stack</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'projects'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Projects ({formData.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'certifications'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certifications ({formData.certifications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'achievements'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Athletics & Honors ({formData.achievements.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('rawJson')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'rawJson'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileJson className="w-3.5 h-3.5" />
            <span>Raw JSON Data</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs">
          {/* PERSONAL TAB */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-semibold block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 text-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-semibold block mb-1">Professional Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 text-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-semibold block mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 text-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-semibold block mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 text-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-semibold block mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 text-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-semibold block mb-1">LinkedIn URL</label>
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 text-white focus:border-blue-500 font-mono"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-slate-400 font-semibold block mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 text-white focus:border-blue-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-semibold block mb-1">
                  Executive Summary (ATS Optimized)
                </label>
                <textarea
                  rows={4}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:border-blue-500 leading-relaxed text-xs"
                />
              </div>
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === 'education' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold">Educational Credentials</span>
                <button
                  onClick={addEducation}
                  className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-1 rounded text-xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Education</span>
                </button>
              </div>

              {formData.education.map((edu, idx) => (
                <div key={edu.id} className="p-4 bg-slate-800/80 rounded-lg border border-slate-750 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">Degree / School #{idx + 1}</span>
                    <button
                      onClick={() => removeEducation(idx)}
                      className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="sm:col-span-2">
                      <label className="text-slate-400 font-medium block mb-1">Institution Name</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateEducation(idx, { institution: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 font-medium block mb-1">Degree / Course</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(idx, { degree: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 font-medium block mb-1">Location</label>
                      <input
                        type="text"
                        value={edu.location}
                        onChange={(e) => updateEducation(idx, { location: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 font-medium block mb-1">Start & End Years</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={edu.startYear}
                          onChange={(e) => updateEducation(idx, { startYear: e.target.value })}
                          className="w-1/2 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-center"
                          placeholder="Start"
                        />
                        <input
                          type="text"
                          value={edu.endYear}
                          onChange={(e) => updateEducation(idx, { endYear: e.target.value })}
                          className="w-1/2 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-center"
                          placeholder="End"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-400 font-medium block mb-1">Grade / CGPA / Score</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={edu.scoreLabel}
                          onChange={(e) => updateEducation(idx, { scoreLabel: e.target.value })}
                          className="w-1/3 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-center"
                          placeholder="Label"
                        />
                        <input
                          type="text"
                          value={edu.score}
                          onChange={(e) => updateEducation(idx, { score: e.target.value })}
                          className="w-2/3 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white"
                          placeholder="8.799 / 10.0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <div>
                <label className="text-slate-400 font-semibold block mb-1">
                  Programming Languages (Comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.skills.programmingLanguages.join(', ')}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skills: {
                        ...formData.skills,
                        programmingLanguages: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-slate-400 font-semibold block mb-1">
                  CS Fundamentals (DSA, OOP, DBMS, OS)
                </label>
                <input
                  type="text"
                  value={formData.skills.coreCompetencies.join(', ')}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skills: {
                        ...formData.skills,
                        coreCompetencies: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-white"
                />
              </div>

              <div>
                <label className="text-slate-400 font-semibold block mb-1">
                  Cyber Security & Network Technologies
                </label>
                <input
                  type="text"
                  value={formData.skills.cyberSecurityAndNetworking.join(', ')}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skills: {
                        ...formData.skills,
                        cyberSecurityAndNetworking: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-white"
                />
              </div>

              <div>
                <label className="text-slate-400 font-semibold block mb-1">Databases & Tools</label>
                <input
                  type="text"
                  value={formData.skills.databases.join(', ')}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      skills: {
                        ...formData.skills,
                        databases: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-white"
                />
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold">Technical Projects</span>
                <button
                  onClick={addProject}
                  className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-1 rounded text-xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              {formData.projects.map((proj, pIdx) => (
                <div key={proj.id} className="p-4 bg-slate-800/80 rounded-lg border border-slate-750 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">Project #{pIdx + 1}</span>
                    <button
                      onClick={() => removeProject(pIdx)}
                      className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-400 font-medium block mb-1">Project Title</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => updateProject(pIdx, { title: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 font-medium block mb-1">Role / Duration</label>
                      <input
                        type="text"
                        value={proj.role || ''}
                        onChange={(e) => updateProject(pIdx, { role: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                        placeholder="e.g. Lead Developer"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-slate-400 font-medium block mb-1">
                        Tech Stack (Comma-separated)
                      </label>
                      <input
                        type="text"
                        value={proj.techStack.join(', ')}
                        onChange={(e) =>
                          updateProject(pIdx, {
                            techStack: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          })
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white font-mono"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-slate-400 font-medium block mb-1">
                        STAR Bullet Points (1 bullet per line)
                      </label>
                      <textarea
                        rows={4}
                        value={proj.descriptionBullets.join('\n')}
                        onChange={(e) =>
                          updateProject(pIdx, {
                            descriptionBullets: e.target.value.split('\n').filter((l) => l.trim().length > 0),
                          })
                        }
                        className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white leading-relaxed font-sans text-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CERTIFICATIONS TAB */}
          {activeTab === 'certifications' && (
            <div className="space-y-4">
              <span className="text-slate-400 font-semibold block">Industry Certifications</span>
              {formData.certifications.map((cert, cIdx) => (
                <div key={cert.id} className="p-3 bg-slate-800/80 rounded-lg border border-slate-750 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Certification Name</label>
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => {
                        const list = [...formData.certifications];
                        list[cIdx].name = e.target.value;
                        setFormData({ ...formData, certifications: list });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Issuing Organization</label>
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) => {
                        const list = [...formData.certifications];
                        list[cIdx].issuer = e.target.value;
                        setFormData({ ...formData, certifications: list });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ACHIEVEMENTS TAB */}
          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <span className="text-slate-400 font-semibold block">Honors & Extracurricular Highlights</span>
              {formData.achievements.map((ach, aIdx) => (
                <div key={ach.id} className="p-3 bg-slate-800/80 rounded-lg border border-slate-750 space-y-2">
                  <div>
                    <label className="text-slate-400 block mb-1">Achievement Title</label>
                    <input
                      type="text"
                      value={ach.title}
                      onChange={(e) => {
                        const list = [...formData.achievements];
                        list[aIdx].title = e.target.value;
                        setFormData({ ...formData, achievements: list });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Details & Impact</label>
                    <textarea
                      rows={2}
                      value={ach.description}
                      onChange={(e) => {
                        const list = [...formData.achievements];
                        list[aIdx].description = e.target.value;
                        setFormData({ ...formData, achievements: list });
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* RAW JSON TAB */}
          {activeTab === 'rawJson' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-semibold">Raw Resume JSON (For Backup & Import)</span>
                <label className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded text-xs cursor-pointer border border-slate-700">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload JSON File</span>
                  <input type="file" accept=".json" onChange={handleJsonUpload} className="hidden" />
                </label>
              </div>
              <textarea
                rows={14}
                value={JSON.stringify(formData, null, 2)}
                onChange={(e) => {
                  try {
                    const parsed = JSON.parse(e.target.value);
                    setFormData(parsed);
                  } catch (err) {
                    // typing intermediate json
                  }
                }}
                className="w-full bg-slate-950 font-mono text-[11px] text-emerald-400 border border-slate-800 rounded-lg p-3"
              />
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 text-xs px-3 py-1.5 rounded hover:bg-slate-800 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs px-4 py-2 rounded-lg cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-5 py-2 rounded-lg shadow-md cursor-pointer"
            >
              {saveSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
              <span>{saveSuccess ? 'Changes Applied!' : 'Apply Changes'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
