"use client";

// ステップの型定義
export type Step = {
  id: number;
  from: string;
  to: string;
  label: string;
  detail: string;
  code: string;
  color: string;
};

// ステップ定義データ
export const STEPS: Step[] = [
  {
    id: 1,
    from: "ブラウザ", to: "API",
    label: "① リクエスト送信",
    detail: "ユーザーが「AI生成」ボタンを押す。\nブラウザが /api/generate-cv に POSTリクエストを送る。\nここまではフロントエンドの仕事。",
    code: `// ブラウザ側のコード（フロントエンド）
fetch("/api/generate-cv", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ jobDescription: "..." }),
});`,
    color: "bg-blue-500",
  },
  {
    id: 2,
    from: "API", to: "OpenAI",
    label: "② 外部APIを呼ぶ",
    detail: "サーバー（Next.js APIルート）がOpenAIを呼ぶ。\nここが「重い処理」。1件あたり数秒かかる。\n\n→ 1万人が同時に押したらここで詰まる。",
    code: `// サーバー側のコード（バックエンド）
const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: prompt }],
});`,
    color: "bg-purple-500",
  },
  {
    id: 3,
    from: "OpenAI", to: "API",
    label: "③ 結果が返る",
    detail: "OpenAIから生成されたテキストが返ってくる。\nAPIはこれを受け取り、次の処理（保存・加工）をする。",
    code: `// OpenAIから返ってきた結果を取り出す
const text = response.choices[0].message.content;
// → "Experienced software engineer with..."`,
    color: "bg-purple-500",
  },
  {
    id: 4,
    from: "API", to: "DB",
    label: "④ データを保存",
    detail: "【このアプリ】localStorage\n→ ブラウザ内のみ。他の人は見れない。サーバーに何も残らない。\n\n【本番アプリ】DB（PostgreSQL等）\n→ サーバーに保存。どのデバイスでも見れる。複数ユーザー管理できる。",
    code: `// このアプリ: localStorageに保存
localStorage.setItem("resume-en-data", JSON.stringify(text));

// 本番: DBに保存（例: Supabase）
await supabase.from("resumes").insert({ user_id, content: text });`,
    color: "bg-green-500",
  },
  {
    id: 5,
    from: "API", to: "ブラウザ",
    label: "⑤ レスポンス返す",
    detail: "APIが処理結果をブラウザに返す。\nブラウザはこれを受け取って画面を更新する。\n\nここまでがリクエスト1回の流れ。",
    code: `// APIルートの最後（サーバー側）
return Response.json({ result: text });

// ブラウザがこれを受け取って表示
const data = await response.json();
setGeneratedText(data.result);`,
    color: "bg-blue-500",
  },
];

// 詳細パネルコンポーネント
export default function StepPanel({ activeStep }: { activeStep: number | null }) {
  const step = STEPS.find((s) => s.id === activeStep);

  if (!step) {
    return (
      <div className="bg-gray-900 rounded-2xl p-6 min-h-32 flex items-center">
        <p className="text-gray-600 text-sm">ステップをクリックすると詳細が表示される</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
      {/* ヘッダー */}
      <div className="flex items-center gap-3">
        <span className={`w-3 h-3 rounded-full ${step.color}`} />
        <span className="font-bold">{step.label}</span>
        <span className="text-gray-500 text-sm">{step.from} → {step.to}</span>
      </div>
      {/* 説明 */}
      <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">{step.detail}</p>
      {/* コード */}
      <pre className="bg-gray-950 rounded-xl p-4 text-xs text-green-300 overflow-x-auto leading-relaxed">
        {step.code}
      </pre>
    </div>
  );
}
