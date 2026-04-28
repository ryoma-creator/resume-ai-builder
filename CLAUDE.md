@AGENTS.md
@SPEC.md
@RYOMA_GROWTH.md

# Resume Builder — Claude向け指示

## 最初にやること

実装を始める前に必ず以下の3ファイルを読むこと：

1. `~/Desktop/Projects/Personal/Portfolio/my-portfolio-website-responsive/app/resume/ResumeContent.jsx`
   → 英語Resumeのレイアウト（Ryomaが調整済み）

2. `~/Desktop/resume-app-v2/src/components/Rirekisho.js`
   → 日本語履歴書のレイアウト

3. `~/Desktop/resume-app-v2/src/components/ShokumuKeireki.js`
   → 職務経歴書のレイアウト

**レイアウト・デザインは移行元を忠実に引き継ぐ。勝手に変えない。**

---

## AI API

AnthropicではなくOpenAIを使う。
モデル: `gpt-4o-mini`
キーは `.env.local` の `OPENAI_API_KEY` を使う（自分で設定する）。

## PDF出力

ライブラリ不使用。`window.print()` + `@media print` CSS で実装。
移行元 `~/Desktop/resume-app-v2/src/app/page.js` の print実装を参考にすること。

## データ保存

Supabaseなし。localStorageのみ。

## Stack

- Next.js 15（App Router）
- TypeScript strict
- Tailwind CSS
- OpenAI gpt-4o-mini

## Code Rules

- any 禁止
- コンポーネント100行以内
- コメント日本語
