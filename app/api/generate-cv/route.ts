import OpenAI from 'openai';
import { NextRequest } from 'next/server';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { jobDescription, language, resumeData } = await req.json() as {
    jobDescription: string;
    language: 'en' | 'ja';
    resumeData: string;
  };

  const systemPrompt =
    language === 'en'
      ? 'You are a professional resume writer. Customize the candidate\'s resume content to match the job description. Return a JSON object with keys: summary, highlights (array of strings), coverLetterOutline (string).'
      : 'あなたはプロの職務経歴書ライターです。候補者の経歴を求人票に合わせてカスタマイズしてください。JSONで返してください: { summary: string, highlights: string[], coverLetterOutline: string }';

  const userPrompt =
    `Job Description:\n${jobDescription}\n\n` +
    `Candidate Background:\n${resumeData}\n\n` +
    `Language: ${language === 'en' ? 'English' : '日本語'}\n\n` +
    `Respond ONLY with valid JSON.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    response_format: { type: 'json_object' },
  });

  const content = response.choices[0].message.content ?? '{}';
  return Response.json(JSON.parse(content));
}
