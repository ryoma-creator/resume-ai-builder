# Resume Builder — 仕様書

## 目的

英語Resume・日本語履歴書・職務経歴書を一元管理・編集し、
会社ごとにAIでカスタマイズしたCVを生成するアプリ。

---

## 移行元コード（必ず読んでから実装すること）

### 英語Resume
`~/Desktop/Projects/Personal/Portfolio/my-portfolio-website-responsive/app/resume/ResumeContent.jsx`
- レイアウト・デザインはこのファイルを引き継ぐ（Ryomaが調整済み）

### 日本語履歴書
`~/Desktop/resume-app-v2/src/components/Rirekisho.js`
- レイアウト・デザインを引き継ぐ

### 職務経歴書
`~/Desktop/resume-app-v2/src/components/ShokumuKeireki.js`
- レイアウト・デザインを引き継ぐ

### PDF出力
`~/Desktop/resume-app-v2/src/app/page.js`
- `window.print()` + `@media print` CSS で実現
- ライブラリ不使用、この方法を踏襲する

---

## 画面構成（タブ切り替え）

```
/ （トップ）
├── /resume-en     英語Resume（編集 + PDF出力）
├── /resume-ja     日本語履歴書（編集 + PDF出力）
├── /shokumu       職務経歴書（編集 + PDF出力）
└── /ai-cv         AI CV生成（会社別カスタマイズ）
```

---

## 各画面の仕様

### /resume-en（英語Resume）
- 移行元: `ResumeContent.jsx` のレイアウトを完全に引き継ぐ
- 各テキスト項目をインライン編集可能にする（クリックして編集）
- 編集内容は `localStorage` に保存（再訪問時に復元）
- 「Print / Save PDF」ボタン → `window.print()`
- `@media print` でナビ・ボタン等を非表示

### /resume-ja（日本語履歴書）
- 移行元: `Rirekisho.js` のレイアウトを完全に引き継ぐ
- 同上

### /shokumu（職務経歴書）
- 移行元: `ShokumuKeireki.js` のレイアウトを完全に引き継ぐ
- 同上

### /ai-cv（AI CV生成）
- 求人票テキストを貼り付けるエリア
- 対象言語を選択（英語 / 日本語）
- 「生成」ボタン → OpenAI gpt-4o-mini で以下を生成：
  - その会社・ポジション向けにカスタマイズされたResume文言
  - 強調すべきスキル・経験の提案
  - カバーレターの骨子（オプション）
- 生成結果をそのまま編集してPDF出力可能

---

## 技術スタック

- Next.js 15（App Router）
- TypeScript（strict）
- Tailwind CSS
- OpenAI API（gpt-4o-mini）
- PDF: `window.print()` + `@media print` CSS

---

## データ管理

- `localStorage` にJSONで保存（DB不要・サーバーレス）
- キー例:
  - `resume-en-data`
  - `resume-ja-data`
  - `shokumu-data`

---

## 環境変数

`.env.local` を作成：
```
OPENAI_API_KEY=sk-proj-YOUR_KEY_HERE
```

---

## 実装順序

1. 移行元3ファイルを読み込み、レイアウトをTypeScriptコンポーネントに移植
2. インライン編集機能を追加（contentEditable or controlled input）
3. localStorage 保存・復元
4. PDF出力（`window.print()` + print CSS）
5. AI CV生成ページ（`/api/generate-cv` ルート）
6. ナビゲーション（タブ or サイドバー）

---

## コード規約

- `any` 禁止
- コンポーネントは100行以内
- コメントは日本語
- PDF印刷時に不要な要素には `no-print` クラスを付与
