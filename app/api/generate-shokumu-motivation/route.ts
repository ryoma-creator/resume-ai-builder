import OpenAI from 'openai';
import { NextRequest } from 'next/server';
import { DEFAULT_SHOKUMU } from '@/components/ShokumuKeireki/types';

export async function POST(req: NextRequest) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { jobDescription } = await req.json() as { jobDescription: string };

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 800,
    messages: [
      {
        role: 'system',
        content: `あなたは職務経歴書の志望動機を書くプロです。
応募者: 田口龍馬
経歴: ${DEFAULT_SHOKUMU.summary}
スキル（フロント）: ${DEFAULT_SHOKUMU.skillFront}
スキル（バック）: ${DEFAULT_SHOKUMU.skillBack}
言語: ${DEFAULT_SHOKUMU.skillLang}
IBM選考: ${DEFAULT_SHOKUMU.ibmDetail}

ルール:
- 求人票から会社名・ポジションを特定する
- 志望動機は200〜300文字、具体的に
- 嘘・誇張なし。実際の経験から書く
- JSON形式で返す: { "companyName": string, "position": string, "motivation": string }`,
      },
      {
        role: 'user',
        content: `以下の求人票に合わせた志望動機を作成してください。\n\n${jobDescription}`,
      },
    ],
    response_format: { type: 'json_object' },
  });

  const content = response.choices[0].message.content ?? '{}';
  return Response.json(JSON.parse(content));
}
