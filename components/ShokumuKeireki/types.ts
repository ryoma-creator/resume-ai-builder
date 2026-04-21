export type ShokumuData = {
  date: string;
  name: string;
  summary: string;
  skillFront: string;
  skillBack: string;
  skillDev: string;
  skillDesign: string;
  skillLang: string;
  exp1Summary: string;
  exp1Duties: string;
  exp1Results: string;
  itPeriodBullets: string;
  otherBullets: string;
  portfolioUrl: string;
  portfolioDetail: string;
  portfolioBullets: string;
  otherPortfolioBullets: string;
  ibmDetail: string;
  ibmBullets: string;
  currentDetail: string;
  motivation: string;
};

export const DEFAULT_SHOKUMU: ShokumuData = {
  date: '2026年　　月　　日現在',
  name: '田口　龍馬',
  summary:
    'アクセンチュアにて金融・HRシステムの国際プロジェクトに2年間従事。\n' +
    '日本・中国・フィリピン間の多国籍チームでの業務調整、資料作成、実装支援を担当。\n' +
    '退職後はReact/Next.js/TypeScriptを中心にWeb開発を学習・実装し、複数のWebアプリを開発。\n' +
    '現在は開発エンジニアとしての就業を目指し、ポートフォリオ開発および案件応募を継続中。',
  skillFront: 'React / Next.js / TypeScript / JavaScript\nHTML / CSS / Tailwind',
  skillBack: 'REST API / CRUD\nSupabase / PostgreSQL（基礎）',
  skillDev: 'Git / GitHub / Node.js / Vercel / Docker',
  skillDesign: 'Figma / Photoshop / pixel perfect実装',
  skillLang: '日本語：ネイティブ\n英語：業務使用（会議・交渉・教育）',
  exp1Summary:
    '日本・中国・フィリピン間のHR業務移管プロジェクトに参画。\n全業務を英語環境で実施し、多国間の調整・運用支援を担当。',
  exp1Duties:
    '中国拠点からフィリピン拠点へのHR業務移管に伴う課題整理\n' +
    '英語での会議進行および関係部署間の調整\n' +
    '中国ITチーム・フィリピンITチームとの連携\n' +
    '業務手順書・マニュアル作成\n' +
    '新人教育および業務引き継ぎ対応\n' +
    'タスク配分見直しおよび進行管理\n' +
    '顧客との英語での業務確認',
  exp1Results:
    'HR業務のフィリピン拠点立ち上げを主導\n' +
    '業務マニュアルを新規作成\n' +
    '教育期間3ヶ月 → 1ヶ月へ短縮\n' +
    '日本・中国・PH間の業務連携を確立\n' +
    'タスク配分を再設計し業務停滞を解消\n' +
    '多国籍チームの調整役として稼働',
  itPeriodBullets: 'プログラミングスクール受講\nWeb開発基礎学習\n短期業務（翻訳・事務等）',
  otherBullets: '教育・接客・空港業務等に従事（英語対応含む）',
  portfolioUrl: 'https://ryoma-ai-portfolio.vercel.app/',
  portfolioDetail: '（Next.js / TypeScript）',
  portfolioBullets:
    'API Routeによる問い合わせフォーム実装\n' +
    '入力バリデーション／自動返信メール\n' +
    '日程通知など簡易バックエンド処理\n' +
    'Figmaデザイン再現／レスポンシブ対応',
  otherPortfolioBullets:
    'Docker＋MySQLによるCRUD検証アプリ\n' +
    'React Contextによるカート機能実装\n' +
    '外部API連携アプリ制作経験',
  ibmDetail: 'IBM Philippines\nBilingual Application Developer\n2025年5月 ～ 2025年10月',
  ibmBullets: '書類選考\nコーディングテスト\nHR面接\n言語テスト\n技術面接\n行動面接',
  currentDetail: 'Web開発技術の習得および実装を継続。\n2025年5月より海外案件を中心に応募・テスト参加。',
  motivation:
    'React/Next.jsを中心とした開発経験と、\nアクセンチュアでの国際プロジェクト経験を活かし、\n開発業務に貢献したく応募いたしました。',
};
