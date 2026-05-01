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
  jobTitle: 'AI-Driven Frontend Engineer',
  email: 'ryoma.t.engineer@gmail.com',
  phone: '+63-916-930-0172',
  location: 'Yokohama, Kanagawa, Japan (Open to Remote)',
  portfolio: 'https://ryoma-ai-portfolio.vercel.app/',
  summary:
    'Frontend engineer with hands-on experience building full-stack web applications using React, Next.js, and TypeScript\n' +
    'Specializes in integrating LLM APIs (OpenAI, Claude) into production-grade products\n' +
    'Ex-Accenture bilingual IT consultant with cross-border leadership across Japan, China, and Philippines\n' +
    'Passed all 6 stages of IBM Philippines Bilingual Developer selection conducted entirely in English',
  skillsAI: 'OpenAI API, Claude API, Prompt Engineering, RAG, AI Agent Design, pgvector',
  skillsFrontend: 'Next.js, React, TypeScript, Tailwind CSS, JavaScript, HTML5, CSS3',
  skillsBackend: 'Node.js, REST API, Supabase (cloud), PostgreSQL, Prisma ORM',
  skillsTools: 'Git, GitHub, Vercel (cloud deployment), Docker, Webpack, Vite, Figma',
  skillsLanguages: 'Japanese (native), English — Professional (Accenture PH full-time; IBM 6-stage bilingual selection; 3,000+ live sessions)',
  exp1Company: 'Accenture Inc.',
  exp1Title: 'Bilingual IT Implementation Analyst (Japanese / English)',
  exp1Period: 'Feb 2022 – Feb 2024',
  exp1Location: '',
  exp1Bullets:
    'Led bilingual (Japanese/English) HR system migration project across Japan, China, and Philippines\n' +
    'Led bilingual sub-team of 5; all meetings and stakeholder comms conducted in English\n' +
    'Reduced onboarding period from 3 months to 1 month through documentation & process optimization\n' +
    'Coordinated between Japan, China, and PH IT teams to establish cross-border operational workflows\n' +
    'Handled English client meetings, stakeholder communications, and process documentation',
  exp2Company: 'Independent AI Projects',
  exp2Title: 'AI-Driven Frontend Engineer (Self-directed)',
  exp2Period: 'Mar 2024 – Present',
  exp2Location: '',
  exp2Bullets:
    'Architected and deployed full-stack React / Next.js applications end-to-end — TypeScript, Prisma ORM, Supabase, REST API design — with OpenAI and Claude API integrations\n' +
    'Built IoT Fleet Monitor: real-time anomaly detection dashboard (Supabase Realtime + GPT); delivered from zero to production in 1 day for a technical interview\n' +
    'Developed RAG-based internal helpdesk SaaS — pgvector semantic search + GPT-4 over company PDFs, full backend design and Vercel deployment\n' +
    'Built autonomous Sales Agent — AI-generated outreach emails + Vercel Cron scheduling, integrated with SMTP delivery\n' +
    'Passed IBM Philippines Bilingual Application Developer selection — all 6 stages conducted entirely in English',
  projects:
    'IoT Fleet Monitor — Real-time dashboard for 6 SIM-equipped IoT devices; Supabase Realtime + GPT anomaly detection; built in 1 day | iot-monitor-brown.vercel.app\n' +
    'AI Internal Helpdesk SaaS — RAG-powered Q&A over company PDFs; pgvector semantic search + GPT-4 | ai-helpdesk-pi.vercel.app\n' +
    'AI Intelligence Monitor — Auto-collects AI news from 5 RSS feeds, GPT summarizes & scores importance 1–10; EN/JA toggle | ai-intelligence-monitor.vercel.app\n' +
    'Support AI Dashboard — Auto-classifies tickets, rates urgency, detects sentiment, drafts replies | support-ai-dashboard.vercel.app\n' +
    'AI Resume Builder — Paste job description → GPT generates tailored resume + cover letter outline | resume-builder-kohl-psi.vercel.app',
  edu1: 'Meiji Gakuin University',
  edu1Degree: 'Bachelor of Law',
  edu1Period: 'Apr 2012 – Mar 2018',
  edu2: 'Study Abroad — Denmark & Philippines',
  edu2Detail: '2017 | English-immersive environment, international cross-cultural experience',
  certs:
    'IBM Philippines Bilingual App Developer (Frontend) — passed all 6 selection stages in English (Sep 2025)\n' +
    'The Odin Project — Frontend & Backend tracks (Dec 2024) | theodinproject.com\n' +
    'English: 3,000+ live conversation sessions (~90,000 min) — full-time operations at Accenture Philippines',
};
