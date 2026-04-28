import OpenAI from 'openai';
import { NextRequest } from 'next/server';
import { DEFAULT_JA } from '@/components/Rirekisho/types';
import { DEFAULT_SHOKUMU } from '@/components/ShokumuKeireki/types';

export async function POST(req: NextRequest) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { jobDescription } = await req.json() as { jobDescription: string };

  const today = new Date();
  const wareki = `令和${today.getFullYear() - 2018}年${today.getMonth() + 1}月${today.getDate()}日`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 1500,
    messages: [
      {
        role: 'system',
        content: `あなたは田口龍馬の就職活動を支援するプロの書類ライターです。

【応募者プロフィール】
氏名: 田口 龍馬（たぐち りょうま）
Email: ${DEFAULT_JA.email}
Tel: ${DEFAULT_JA.phone}
職歴要約: ${DEFAULT_SHOKUMU.summary}
スキル: React/Next.js/TypeScript、OpenAI API、Claude API、Supabase
英語: ビジネスレベル（アクセンチュアフィリピンで全業務を英語で実施）
IBM Philippines Bilingual Application Developer選考 全6段階通過
LinkedInポートフォリオ: linkedin.com/in/ryoma-taguchi-b32024283
AIポートフォリオ: ryoma-ai-portfolio.vercel.app

【送付状のルール】
- 求人票から会社名・ポジションを抽出すること
- 本文は「拝啓〜敬具」形式
- 200〜300文字程度の本文（簡潔に）
- 志望動機は具体的に（「御社の〇〇に魅力を感じ」など求人内容に言及）
- 返送するJSON形式: { "companyName": string, "position": string, "body": string }
- bodyには「拝啓〜敬具」の本文のみ（挨拶・書類リストは別途表示）`,
      },
      {
        role: 'user',
        content: `以下の求人票に対する送付状の本文を作成してください。\n\n${jobDescription}`,
      },
    ],
    response_format: { type: 'json_object' },
  });

  const result = JSON.parse(response.choices[0].message.content ?? '{}');
  return Response.json({ ...result, date: wareki });
}
