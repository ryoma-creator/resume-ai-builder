export type RirekishoData = {
  date: string;
  nameFurigana: string;
  name: string;
  gender: string;
  dob: string;
  addressFurigana: string;
  address: string;
  phone: string;
  email: string;
  motivation: string;
  request: string;
  // 学歴・職歴 12行
  c1y: string; c1m: string; c1t: string;
  c2y: string; c2m: string; c2t: string;
  c3y: string; c3m: string; c3t: string;
  c4y: string; c4m: string; c4t: string;
  c5y: string; c5m: string; c5t: string;
  c6y: string; c6m: string; c6t: string;
  c7y: string; c7m: string; c7t: string;
  c8y: string; c8m: string; c8t: string;
  c9y: string; c9m: string; c9t: string;
  c10y: string; c10m: string; c10t: string;
  c11y: string; c11m: string; c11t: string;
  c12y: string; c12m: string; c12t: string;
  // 免許・資格 6行
  q1y: string; q1m: string; q1t: string;
  q2y: string; q2m: string; q2t: string;
  q3y: string; q3m: string; q3t: string;
  q4y: string; q4m: string; q4t: string;
  q5y: string; q5m: string; q5t: string;
  q6y: string; q6m: string; q6t: string;
  // ポートフォリオ 1行
  p1y: string; p1m: string; p1t: string;
};

export const DEFAULT_JA: RirekishoData = {
  date: '2026年　　月　　日現在',
  nameFurigana: 'たぐち　りょうま',
  name: '田口　龍馬',
  gender: '男',
  dob: '1988年　11月　13日生　（満37歳）',
  addressFurigana: 'かながわけんよこはましにしくみなみせんげんちょう',
  address: '〒220-0074　神奈川県横浜市西区南浅間町33-9',
  phone: '080-5519-4585',
  email: 'ryoma.t.engineer@gmail.com',
  motivation:
    '【技術面】\n' +
    '・IBM Philippines Bilingual Application Developer選考\n' +
    '　（2025年5月〜10月）にて\n' +
    '　コーディングテスト・技術面接・適性評価を含む\n' +
    '　全6段階の英語選考をすべて通過（最終選考合格）\n' +
    '・React / Next.js を中心としたWeb開発\n' +
    '・Git管理、レスポンシブ、コンポーネント設計等の実装経験\n\n' +
    '【国際面】\n' +
    '・アクセンチュアで多国籍チーム5名のサブチームリード経験\n' +
    '・英語での業務・会議・交渉実績\n\n' +
    '【ソフトスキル】\n' +
    '・法学部で培った論理思考を基に、課題整理・原因特定・解決方針の言語化まで対応',
  request: '開発業務全般に柔軟に対応可能です。',
  c1y: '2008', c1m: '4', c1t: '武蔵工業大学 環境情報学部環境情報学科 入学',
  c2y: '2012', c2m: '4', c2t: '明治学院大学 法学部法律学科 編入学（3年次）',
  c3y: '2017', c3m: '4', c3t: '海外語学留学（デンマーク・フィリピン）英語環境・多文化環境での生活経験',
  c4y: '2018', c4m: '3', c4t: '明治学院大学 法学部法律学科 卒業',
  c5y: '〜', c5m: '4', c5t: 'IT分野転向のためプログラミングスクール受講・Web開発基礎学習に従事',
  c6y: '', c6m: '', c6t: '',
  c7y: '2010', c7m: '4', c7t: '各種サービス業・教育・国際・IT関連業務に従事（国内外、～2021年12月）',
  c8y: '2022', c8m: '2', c8t: 'アクセンチュア株式会社 入社',
  c9y: '2022', c9m: '7', c9t: '同社フィリピン法人へ転籍（現地勤務）',
  c10y: '2024', c10m: '2', c10t: '同社 退職',
  c11y: '2024', c11m: '3', c11t: '現在に至る（フロントエンド開発技術習得に専念）',
  c12y: '', c12m: '', c12t: '',
  q1y: '2018', q1m: '3', q1t: '普通自動車第一種運転免許',
  q2y: '2019', q2m: '12', q2t: 'TOEIC 750点',
  q3y: '2020', q3m: '6', q3t: 'MOS Word/Excel/PowerPoint',
  q4y: '2024', q4m: '12', q4t: 'The Odin Project JavaScript / React Course 修了',
  q5y: '2010〜', q5m: '', q5t: '英会話 3,000回以上（1回25分）・90,000分以上（〜2022年）',
  q6y: '2024〜', q6m: '', q6t: 'Webアプリケーション開発技術継続学習中（React/Next.js、TypeScript、API・DB連携等）',
  p1y: '2025', p1m: '2', p1t: 'ポートフォリオサイト：https://ryoma-ai-portfolio.vercel.app/',
};
