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
  skillsLanguages: 'Japanese (native), English (professional working proficiency — full-time at Accenture Philippines, 3,000+ conversation sessions)',
  exp1Company: 'Accenture Inc.',
  exp1Title: 'Analyst',
  exp1Period: 'Feb 2022 – Feb 2024',
  exp1Location: 'Yokohama, Japan / Manila, Philippines',
  exp1Bullets:
    'Participated in HR system migration project spanning Japan, China, and Philippines\n' +
    'Led sub-team of 5 in a multilingual, cross-cultural environment; all work conducted in English\n' +
    'Reduced onboarding period from 3 months to 1 month through documentation & process optimization\n' +
    'Coordinated between Japan, China, and PH IT teams to establish cross-border operational workflows\n' +
    'Handled English client meetings, stakeholder communications, and process documentation',
  exp2Company: 'Independent — AI Product Development',
  exp2Title: 'AI Product Engineer (Self-directed)',
  exp2Period: 'Mar 2024 – Present',
  exp2Location: '',
  exp2Bullets:
    'Built AI-powered resume builder: integrates OpenAI API to generate customized CVs from job descriptions\n' +
    'Developed multiple full-stack web applications with React / Next.js / TypeScript\n' +
    'Implemented LLM API integrations, prompt engineering, and context-aware generation\n' +
    'IBM Philippines – Bilingual Application Developer: passed all 6 English-conducted selection stages (May–Oct 2025)\n' +
    'Built portfolio site with backend features: API routes, form validation, auto-reply email, responsive layout',
  edu1: 'Meiji Gakuin University',
  edu1Degree: 'Bachelor of Law',
  edu1Period: 'Apr 2012 – Mar 2018',
  edu2: 'Study Abroad — Denmark & Philippines',
  edu2Detail: '2017 | English-immersive environment, international cross-cultural experience',
  certs:
    'TOEIC 750 (Dec 2019)\n' +
    'MOS Word / Excel / PowerPoint (Jun 2020)\n' +
    'The Odin Project — JavaScript & React (Dec 2024)\n' +
    '3,000+ English conversation sessions (~90,000 min total, through 2022)',
};
