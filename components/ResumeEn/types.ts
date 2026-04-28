export type ResumeEnData = {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  summary: string;
  skillsFrontend: string;
  skillsAI: string;
  skillsBackend: string;
  skillsTools: string;
  skillsLanguages: string;
  exp1Company: string;
  exp1Title: string;
  exp1Period: string;
  exp1Location: string;
  exp1Bullets: string;
  exp2Company: string;
  exp2Title: string;
  exp2Period: string;
  exp2Location: string;
  exp2Bullets: string;
  projects: string;
  edu1: string;
  edu1Degree: string;
  edu1Period: string;
  edu2: string;
  edu2Detail: string;
  certs: string;
};

export const DEFAULT_EN: ResumeEnData = {
  name: 'Ryoma Taguchi',
  jobTitle: 'AI Product Engineer',
  email: 'ryoma.t.engineer@gmail.com',
  phone: '+81-80-5519-4585',
  location: 'Yokohama, Kanagawa, Japan (Open to Remote)',
  portfolio: 'https://ryoma-ai-portfolio.vercel.app/',
  summary:
    'AI Product Engineer with hands-on experience building AI-powered web applications and international business background at Accenture Philippines. ' +
    'Integrates LLM APIs (OpenAI, Claude) with React / Next.js / TypeScript to ship user-facing products. ' +
    'Passed all 6 stages of IBM Philippines Bilingual Application Developer selection (conducted entirely in English). ' +
    'Bridges business strategy and technical implementation with strong cross-cultural communication.',
  skillsFrontend: 'React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS',
  skillsAI: 'OpenAI API (gpt-4o-mini), Claude API, Prompt Engineering, LLM Integration, AI Agent Design',
  skillsBackend: 'Node.js, REST API, Supabase, PostgreSQL (fundamentals)',
  skillsTools: 'Git, GitHub, Vercel, Docker, Figma',
  skillsLanguages: 'Japanese (native), English (professional working proficiency — full-time operations at Accenture Philippines, 3,000+ live conversation sessions, IBM 6-round technical selection)',
  exp1Company: 'Accenture Inc.',
  exp1Title: 'Bilingual IT Implementation Analyst (Japanese / English)',
  exp1Period: 'Feb 2022 – Feb 2024',
  exp1Location: 'Japan',
  exp1Bullets:
    'Led bilingual (Japanese/English) HR system migration project across Japan, China, and Philippines\n' +
    'Managed sub-team of 5 as bilingual team lead; all meetings, documentation, and stakeholder comms in English\n' +
    'Reduced onboarding period from 3 months to 1 month through documentation & process optimization\n' +
    'Coordinated between Japan, China, and PH IT teams to establish cross-border operational workflows\n' +
    'Handled English client meetings, stakeholder communications, and process documentation',
  exp2Company: 'Independent — AI Product Development',
  exp2Title: 'AI Product Engineer (Self-directed)',
  exp2Period: 'Mar 2024 – Present',
  exp2Location: '',
  exp2Bullets:
    'Shipped 6+ AI-powered web applications independently using Claude Code and OpenAI API\n' +
    'Built IoT Fleet Monitor (real-time Supabase Realtime + GPT anomaly detection) in 1 day as interview demo\n' +
    'Developed RAG-based internal helpdesk SaaS using pgvector for semantic document Q&A\n' +
    'Created AI Resume Builder with job-description-driven CV customization via GPT\n' +
    'Passed IBM Philippines Bilingual Application Developer selection — all 6 stages, entirely in English',
  projects:
    'IoT Fleet Monitor — Real-time dashboard for 6 SIM-equipped IoT devices; Supabase Realtime + GPT anomaly detection; built in 1 day | https://iot-monitor-brown.vercel.app\n' +
    'AI Internal Helpdesk SaaS — RAG-powered Q&A over company PDFs; pgvector semantic search + GPT-4 | https://ai-helpdesk-pi.vercel.app\n' +
    'AI Intelligence Monitor — Auto-collects AI news from 5 RSS feeds, GPT summarizes & scores importance 1–10; EN/JA toggle | https://ai-intelligence-monitor.vercel.app\n' +
    'Support AI Dashboard — Auto-classifies tickets, rates urgency, detects sentiment, drafts replies | https://support-ai-dashboard.vercel.app\n' +
    'AI Resume Builder — Paste job description → GPT generates tailored resume + cover letter outline (this app)',
  edu1: 'Meiji Gakuin University',
  edu1Degree: 'Bachelor of Law',
  edu1Period: 'Apr 2012 – Mar 2018',
  edu2: 'Study Abroad — Denmark & Philippines',
  edu2Detail: '2017 | English-immersive environment, international cross-cultural experience',
  certs:
    'The Odin Project — JavaScript & React tracks (Dec 2024)\n' +
    'TOEIC 750 (2019) — supplemented by 3,000+ live English sessions (~90,000 min total)\n' +
    'IBM Philippines Bilingual App Developer — passed all 6 selection stages in English (2025)',
};
