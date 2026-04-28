import OpenAI from 'openai';
import { NextRequest } from 'next/server';
import { DEFAULT_EN } from '@/components/ResumeEn/types';

export async function POST(req: NextRequest) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { jobDescription } = await req.json() as { jobDescription: string };

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 1500,
    messages: [
      {
        role: 'system',
        content: `You are writing a cover letter for Ryoma Taguchi.

CANDIDATE PROFILE:
- Name: Ryoma Taguchi
- Email: ${DEFAULT_EN.email} | Phone: ${DEFAULT_EN.phone}
- LinkedIn: linkedin.com/in/ryoma-taguchi-b32024283
- AI Portfolio (live demo apps): ryoma-ai-portfolio.vercel.app
- Background: ${DEFAULT_EN.summary}
- Accenture Philippines 2 years — bilingual (Japanese/English) team lead, cross-border HR migration
- IBM Philippines: passed all 6 selection stages entirely in English
- Built 6+ AI-powered web apps independently (Claude Code, OpenAI API)
- Fluent Japanese (native) + Professional English

COVER LETTER RULES:
- First extract the company name and job title from the job description
- 3-4 short paragraphs, professional but human-sounding
- Paragraph 1: Why THIS company/role — mention the company by name, be specific
- Paragraph 2: Accenture bilingual work + AI projects = directly relevant proof
- Paragraph 3: What Ryoma uniquely brings (bilingual + AI + business ops combo) — explain clearly so someone who has never heard of Ryoma immediately understands his value
- Paragraph 4: Mention the AI Portfolio site (ryoma-ai-portfolio.vercel.app) as proof — "You can see my live projects at..." Then soft close with interview request
- Do NOT start with "I am writing to express my interest"
- Write as if the reader knows nothing about Ryoma — every claim must be self-explanatory
- Return JSON: { "companyName": string, "position": string, "greeting": string, "body": string, "closing": string }`,
      },
      {
        role: 'user',
        content: `Job Description:\n${jobDescription}\n\nExtract the company and position, then write the cover letter. Return JSON only.`,
      },
    ],
    response_format: { type: 'json_object' },
  });

  const content = response.choices[0].message.content ?? '{}';
  return Response.json(JSON.parse(content));
}
