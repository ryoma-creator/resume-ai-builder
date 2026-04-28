import OpenAI from 'openai';
import { NextRequest } from 'next/server';
import { ResumeEnData } from '@/components/ResumeEn/types';

export async function POST(req: NextRequest) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { jobDescription, baseData, jaContext, shokumuContext } = await req.json() as {
    jobDescription: string;
    baseData: ResumeEnData;
    jaContext?: string;
    shokumuContext?: string;
  };

  const systemPrompt = `You are an expert resume writer for Japanese professionals applying to global companies.

TASK: Rewrite this candidate's resume to maximize chances for THIS specific job. Be aggressive and specific.

WHAT TO REWRITE (mandatory — do NOT leave these generic):
- summary: 4 sentences. Sentence 1: years + role matching this job. Sentence 2: most relevant technical skill for THIS job. Sentence 3: bilingual advantage + Accenture Philippines proof. Sentence 4: strongest achievement that matches THIS job's needs.
- exp1Bullets: Rewrite ALL bullets to emphasize what THIS job cares about. Lead each bullet with a strong action verb. Include numbers where available. Make bilingual/English skills front and center if the job requires Japanese speaker.
- exp2Bullets: Same — rewrite to highlight what matters for THIS specific role.
- jobTitle: Match the exact job title or closest equivalent from the posting.

RULES:
- NEVER invent experience or skills the candidate doesn't have
- Every claim must be backed by the candidate's actual background
- Be specific, not generic. "Managed team" is weak. "Led bilingual sub-team of 5 across Japan-China-Philippines operations" is strong.
- If the job requires Japanese speaker, make the bilingual English+Japanese capability a major selling point
- Return COMPLETE ResumeEnData JSON — all fields present, only modify the 4 fields above`;

  const candidateContext = `=== CANDIDATE ENGLISH RESUME ===
${JSON.stringify(baseData, null, 2)}

${jaContext ? `=== ADDITIONAL: 日本語履歴書 ===\n${jaContext}` : ''}
${shokumuContext ? `=== ADDITIONAL: 職務経歴書 ===\n${shokumuContext}` : ''}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 3000,
    messages: [
      { role: 'system', content: systemPrompt },
      {
        role: 'user',
        content: `JOB POSTING:\n${jobDescription}\n\nCANDIDATE BACKGROUND:\n${candidateContext}\n\nReturn ONLY valid JSON matching ResumeEnData type. Also include "_companyName" (company name from job posting) and "_position" (exact job title from posting).`,
      },
    ],
    response_format: { type: 'json_object' },
  });

  const content = response.choices[0].message.content ?? '{}';
  return Response.json(JSON.parse(content));
}
