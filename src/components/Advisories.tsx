import React, { useState, useEffect, useRef } from 'react';
import TopoBackground from './TopoBackground';

const TOOLS = [
  {
    id: 'T-001',
    severity: 'CORE',
    vendor: 'GitHub',
    title: 'GitHub Actions',
    description: 'The backbone of modern, secure CI/CD pipelines. Automates the integration of security tools directly into the developer workflow, triggering SAST, DAST, and SCA scans on every commit.',
    category: 'CI/CD',
    ecosystem: 'Agnostic',
    type: 'Orchestrator'
  },
  {
    id: 'T-002',
    severity: 'SAST',
    vendor: 'Semgrep',
    title: 'Semgrep',
    description: 'Fast, open-source static analysis (SAST) tailored for DevSecOps and AppSec. Detects complex code vulnerabilities and enforces secure coding standards instantly during the build phase.',
    category: 'AppSec',
    ecosystem: 'Source Code',
    type: 'Scanner'
  },
  {
    id: 'T-003',
    severity: 'SCA',
    vendor: 'Snyk',
    title: 'Snyk',
    description: 'Industry-standard Software Composition Analysis (SCA) and container scanning. Identifies vulnerabilities in open-source dependencies and base images before they reach production.',
    category: 'CloudSec',
    ecosystem: 'Dependencies',
    type: 'Analyzer'
  },
  {
    id: 'T-004',
    severity: 'CRIT',
    vendor: 'Gitleaks',
    title: 'Gitleaks',
    description: 'A mandatory layer in DevSecOps. Continuously scans repositories and commit histories to detect and prevent hardcoded secrets, API keys, and tokens from leaking into source control.',
    category: 'AppSec',
    ecosystem: 'Git',
    type: 'Secrets'
  },
  {
    id: 'T-005',
    severity: 'VULN',
    vendor: 'Aqua',
    title: 'Trivy',
    description: 'Comprehensive, highly-popular vulnerability scanner tailored for container images, file systems, and Infrastructure as Code (IaC) misconfigurations across cloud environments.',
    category: 'CloudSec',
    ecosystem: 'Containers',
    type: 'Scanner'
  },
  {
    id: 'T-006',
    severity: 'IaC',
    vendor: 'Aqua',
    title: 'tfsec',
    description: 'Specialized static analysis tool specifically built to detect security vulnerabilities and misconfigurations within Terraform templates before infrastructure is provisioned.',
    category: 'CloudSec',
    ecosystem: 'Terraform',
    type: 'Linter'
  },
  {
    id: 'T-007',
    severity: 'DAST',
    vendor: 'OWASP',
    title: 'OWASP ZAP',
    description: 'Automated Dynamic Application Security Testing (DAST). Actively attacks running web applications to uncover runtime vulnerabilities, authentication flaws, and injection vectors.',
    category: 'AppSec',
    ecosystem: 'Web Apps',
    type: 'Attacker'
  },
  {
    id: 'T-008',
    severity: 'RECON',
    vendor: 'SecTools',
    title: 'Nmap',
    description: 'The foundational tool for network discovery and vulnerability scanning. Maps attack surfaces, identifies open ports, and discovers exposed services across cloud perimeters.',
    category: 'NetSec',
    ecosystem: 'Network',
    type: 'Discovery'
  },
  {
    id: 'T-009',
    severity: 'OPS',
    vendor: 'CNCF',
    title: 'Prometheus',
    description: 'Scalable metrics collection and alerting engine. Forms the backbone of DevSecOps monitoring by tracking security-critical infrastructure health and performance in real-time.',
    category: 'Monitoring',
    ecosystem: 'Cloud Native',
    type: 'Metrics'
  },
  {
    id: 'T-010',
    severity: 'VIS',
    vendor: 'Grafana',
    title: 'Grafana',
    description: 'Beautiful, high-performance dashboards for visualizing complex security metrics and monitoring data aggregated from Prometheus, SIEMs, and vulnerability scanners.',
    category: 'Observability',
    ecosystem: 'Agnostic',
    type: 'Dashboard'
  },
  {
    id: 'T-011',
    severity: 'OPS',
    vendor: 'CNCF',
    title: 'Helm',
    description: 'The package manager for Kubernetes. Facilitates the secure deployment and lifecycle management of complex, containerized applications and security tools within K8s clusters.',
    category: 'K8s',
    ecosystem: 'Containers',
    type: 'Deployment'
  },
  {
    id: 'T-012',
    severity: 'GITOPS',
    vendor: 'Intuit',
    title: 'ArgoCD',
    description: 'Declarative, GitOps continuous delivery tool for Kubernetes. Ensures that cluster configurations strictly mirror version-controlled source truth, preventing drift and unauthorized changes.',
    category: 'DevSecOps',
    ecosystem: 'K8s',
    type: 'Controller'
  },
  {
    id: 'T-013',
    severity: 'CSPM',
    vendor: 'ARMO',
    title: 'Kubescape',
    description: 'Kubernetes security posture management (KSPM) and compliance platform. Validates clusters against NSA-CISA frameworks, detecting misconfigurations and RBAC flaws.',
    category: 'CloudSec',
    ecosystem: 'K8s',
    type: 'Auditor'
  },
  {
    id: 'T-014',
    severity: 'NATIVE',
    vendor: 'AWS',
    title: 'AWS Security Services',
    description: 'Mandatory cloud-native security suite including IAM for zero-trust access, GuardDuty for threat detection, Inspector for vulnerability management, and WAF for perimeter defense.',
    category: 'CloudSec',
    ecosystem: 'AWS',
    type: 'Infrastructure'
  }
];

export default function Advisories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeTool = TOOLS[activeIndex];

  const goTo = (i: number) => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(i);
      setFade(true);
    }, 180);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIndex(prev => (prev + 1) % TOOLS.length);
        setFade(true);
      }, 180);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);
  return (
    <div className="section-wrap" id="devsecops" style={{ background: '#060303', position: 'relative' }}>
      <TopoBackground variant="bottom-right" />
      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label" style={{ color: '#7a6a60', marginBottom: 32 }}>DEVSECOPS PIPELINE</span>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'start' }} className="two-col">
          {/* ── Left Column ── */}
          <div>
            <h2 style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 400, 
              color: '#fdfbf7', 
              lineHeight: 1.1, 
              letterSpacing: '-0.02em',
              marginBottom: 24 
            }}>
              Secure by Design.<br />Deployed at Scale.
            </h2>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#a39185', lineHeight: 1.8, marginBottom: 20 }}>
              Security isn't an afterthought—it's integrated directly into the CI/CD lifecycle. I architect robust pipelines that automatically identify, report, and mitigate risks before they reach production.
            </p>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#a39185', lineHeight: 1.8, marginBottom: 40 }}>
              From static analysis and secret scanning to dynamic testing and compliance enforcement, I leverage an arsenal of industry-standard tools to lock down infrastructure.
            </p>

            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <a href="#devsecops" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fdfbf7', padding: '12px 24px', cursor: 'none' }}>
                EXPLORE THE STACK
              </a>
              <a href="#about" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#fdfbf7', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'none' }}>
                MEET THE ENGINEER
              </a>
            </div>
          </div>

          {/* ── Right Column: Terminal UI ── */}
          <div style={{ 
            background: 'linear-gradient(180deg, #080202 0%, #030000 100%)', 
            border: '1px solid #2a0b0b', 
            padding: '24px',
            position: 'relative'
          }}>
            {/* Fade wrapper — opacity transition when tool changes */}
            <div style={{ transition: 'opacity 0.18s ease', opacity: fade ? 1 : 0 }}>
            {/* Top Navigation Squares (14 tools) */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid #1a0505', flexWrap: 'wrap' }}>
              {Array.from({ length: 14 }).map((_, i) => (
                <div 
                  key={i} 
                  onClick={() => { if (i < TOOLS.length) { goTo(i); startTimer(); } }}
                  style={{ 
                    width: 14, height: 14, 
                    background: i === activeIndex ? '#dc2626' : (i < TOOLS.length ? 'rgba(220, 38, 38, 0.1)' : 'rgba(255,255,255,0.02)'),
                    border: i === activeIndex ? '1px solid #ef4444' : (i < TOOLS.length ? '1px solid #7f1d1d' : '1px solid rgba(255,255,255,0.05)'),
                    cursor: i < TOOLS.length ? 'none' : 'default',
                    transition: 'all 0.2s ease',
                    opacity: i === activeIndex ? 1 : 0.7
                  }} 
                />
              ))}
            </div>

            {/* ID & Badges */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#7f1d1d' }}>
                {activeTool.id}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ 
                  background: '#7f1d1d', 
                  color: '#fdfbf7', 
                  padding: '4px 8px', 
                  fontSize: '0.65rem', 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}>
                  <span style={{ display: 'inline-block', width: 6, height: 6, background: '#ef4444' }} />
                  {activeTool.severity}
                </div>
                <div style={{ 
                  border: '1px solid #3f1515', 
                  color: '#fdfbf7', 
                  padding: '4px 8px', 
                  fontSize: '0.65rem', 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600
                }}>
                  {activeTool.vendor}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.3rem', fontWeight: 400, color: '#fdfbf7', marginBottom: 16 }}>
              {activeTool.title}
            </h3>
            
            <div style={{ height: 1, background: '#2a0f0f', marginBottom: 16 }} />

            {/* Description */}
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#eaddc5', lineHeight: 1.7, minHeight: 140 }}>
              {activeTool.description}
            </p>

            {/* Data Table */}
            <div className="adv-meta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16, marginTop: 24, marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#a39185', marginBottom: 6 }}>CATEGORY</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#fdfbf7' }}>{activeTool.category}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#a39185', marginBottom: 6 }}>ECOSYSTEM</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#fdfbf7' }}>{activeTool.ecosystem}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#a39185', marginBottom: 6 }}>TYPE</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#fdfbf7' }}>{activeTool.type}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#a39185', marginBottom: 6 }}>STATUS</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#fdfbf7' }}>Active</div>
              </div>
            </div>

            <div style={{ height: 1, background: '#2a0f0f', marginBottom: 16 }} />

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#a39185', textTransform: 'uppercase' }}>
                INTEGRATED INTO PIPELINE
              </div>
              <a href="#contact" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#fdfbf7', cursor: 'none', fontWeight: 600 }}>
                FULL DETAILS →
              </a>
            </div>
            </div>
            
          </div>{/* end fade wrapper */}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; }
          .adv-meta-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
