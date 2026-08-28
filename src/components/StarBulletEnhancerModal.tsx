import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Lightbulb, Copy, Check } from 'lucide-react';

interface StarBulletEnhancerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StarBulletEnhancerModal: React.FC<StarBulletEnhancerModalProps> = ({ isOpen, onClose }) => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const projectExamples = [
    {
      title: 'College Accounting & Institutional Financial System (Java & SQL)',
      context: 'Automating fee collection, ledger balance management, and reconciliation overhead.',
      starBullets: [
        {
          tag: 'High-Impact Enterprise Metric',
          bullet:
            'Architected an ACID-compliant institutional financial management system in Java & MySQL with Role-Based Access Control (RBAC), eliminating manual reconciliation errors and cutting administrative overhead by 85%.',
          breakdown: {
            action: 'Architected',
            task: 'ACID-compliant institutional financial management system',
            actionDetails: 'Implemented in Java & MySQL with Role-Based Access Control (RBAC)',
            result: 'Eliminated manual reconciliation errors and cut administrative overhead by 85%',
          },
        },
        {
          tag: 'Performance & Architecture Focused',
          bullet:
            'Implemented Model-View-Controller (MVC) and Data Access Object (DAO) design patterns in Java with JDBC connection pooling, maintaining sub-second query latency across 5,000+ simulated student transaction records.',
          breakdown: {
            action: 'Implemented',
            task: 'Model-View-Controller (MVC) and Data Access Object (DAO) architecture',
            actionDetails: 'Configured JDBC connection pooling with parameterized SQL queries',
            result: 'Maintained sub-second query latency across 5,000+ student financial records',
          },
        },
      ],
    },
    {
      title: 'AI Train Accident Prevention & Collision Detection System (Python)',
      context: 'Real-time track hazard detection, sensor data fusion, and early braking triggers.',
      starBullets: [
        {
          tag: 'Real-Time Edge & Latency Metric',
          bullet:
            'Developed a real-time computer vision and sensor fusion hazard detection software pipeline in Python, processing live rail telemetry at sub-50ms latency to autonomously trigger fail-safe emergency deceleration warnings.',
          breakdown: {
            action: 'Developed',
            task: 'Real-time hazard detection and collision avoidance pipeline',
            actionDetails: 'Integrated OpenCV computer vision with multi-sensor telemetry fusion',
            result: 'Achieved sub-50ms processing latency with automated fail-safe alerts',
          },
        },
        {
          tag: 'Reliability & Safety Architecture',
          bullet:
            'Engineered GPS-coordinated telemetry loggers and automated alert dispatchers communicating spatial coordinate vectors to centralized station controllers, ensuring 99.8% incident notification reliability.',
          breakdown: {
            action: 'Engineered',
            task: 'Telemetry alert dispatcher & central communication bridge',
            actionDetails: 'Built GPS-coordinated spatial messaging in Python',
            result: 'Achieved 99.8% incident notification reliability under simulated track hazards',
          },
        },
      ],
    },
    {
      title: 'Competitive Algorithmic Problem Solving (DSA & Cyber Security)',
      context: 'Demonstrating algorithmic rigor, data structure optimization, and network security.',
      starBullets: [
        {
          tag: 'Algorithmic Breadth',
          bullet:
            'Implemented and optimized 100+ fundamental and advanced Data Structures (Trees, Dynamic Programming, Graphs) in C, Java, and Python, consistently achieving O(N log N) or O(1) optimal complexities.',
          breakdown: {
            action: 'Implemented & Optimized',
            task: 'Core Data Structures and Algorithmic problem suite',
            actionDetails: 'Programmed in C, Java, and Python with rigorous complexity bounds',
            result: '100+ solutions benchmarked on leading coding platforms with optimal space-time tradeoffs',
          },
        },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm no-print overflow-y-auto">
      <div className="bg-[#1a1d23] border border-slate-800/80 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900/30 text-blue-400 border border-blue-800/50 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                STAR Method Bullet Points (Google / FAANG Standard)
              </h2>
              <p className="text-xs text-slate-400">
                Formula: <strong className="text-blue-400">Action Verb</strong> + <strong className="text-slate-200">Task Context</strong> + <strong className="text-emerald-400">Technical Action</strong> + <strong className="text-amber-400">Quantifiable Metric Result</strong>
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

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Quick Explanation Banner */}
          <div className="p-4 bg-[#121418] border border-slate-800 rounded-xl flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 space-y-1">
              <span className="font-bold text-white block">
                Why Hiring Managers & ATS Algorithms Prioritize STAR Bullets:
              </span>
              <p className="text-slate-400 leading-relaxed">
                Standard resumes write vague descriptions like <em>&quot;Did a train accident project in Python&quot;</em>. High-accuracy resumes quantify technical throughput, specific tools (OpenCV, JDBC, RBAC), and measurable outcomes (sub-50ms latency, 85% administrative reduction).
              </p>
            </div>
          </div>

          {/* List of enhanced project bullets */}
          <div className="space-y-5">
            {projectExamples.map((item, pIdx) => (
              <div key={pIdx} className="bg-[#121418] p-5 rounded-xl border border-slate-800 space-y-3.5 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  <span className="text-[11px] text-slate-400 font-mono">{item.context}</span>
                </div>

                <div className="space-y-3">
                  {item.starBullets.map((sb, bIdx) => {
                    const uniqueKey = pIdx * 10 + bIdx;
                    return (
                      <div
                        key={bIdx}
                        className="p-4 bg-[#1a1d23] rounded-xl border border-slate-800 space-y-2.5 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/50 font-mono">
                            {sb.tag}
                          </span>
                          <button
                            onClick={() => handleCopy(sb.bullet, uniqueKey)}
                            className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors cursor-pointer border border-slate-700"
                          >
                            {copiedIdx === uniqueKey ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                            )}
                            <span>{copiedIdx === uniqueKey ? 'Copied' : 'Copy Bullet'}</span>
                          </button>
                        </div>

                        <p className="text-xs text-slate-200 leading-relaxed font-medium">
                          &bull; {sb.bullet}
                        </p>

                        {/* Visual STAR breakdown */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-[10px]">
                          <div className="p-2 rounded-lg bg-[#121418] border border-slate-800">
                            <span className="text-blue-400 font-bold block">Action:</span>
                            <span className="text-slate-300">{sb.breakdown.action}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#121418] border border-slate-800">
                            <span className="text-slate-200 font-bold block">Task:</span>
                            <span className="text-slate-400">{sb.breakdown.task}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#121418] border border-slate-800">
                            <span className="text-emerald-400 font-bold block">Method:</span>
                            <span className="text-slate-300">{sb.breakdown.actionDetails}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#121418] border border-slate-800">
                            <span className="text-amber-400 font-bold block">Metric/Result:</span>
                            <span className="text-slate-300">{sb.breakdown.result}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
