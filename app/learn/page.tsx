import Link from "next/link";

// トピック定義
const TOPICS = [
  {
    href: "/learn/data-flow",
    emoji: "🔄",
    title: "データの流れ",
    description: "ボタンを押したとき、裏で何が起きているか。ブラウザ → API → DB の流れを追う。",
    tags: ["API", "リクエスト", "レスポンス"],
    status: "done" as const,
  },
  {
    href: "/learn/storage",
    emoji: "🗄️",
    title: "データの保存場所",
    description: "localStorage、DB、キャッシュ。どこに何を保存するか、なぜ違うのか。",
    tags: ["localStorage", "DB", "キャッシュ"],
    status: "coming" as const,
  },
  {
    href: "/learn/scaling",
    emoji: "📈",
    title: "1人 vs 1万人",
    description: "ユーザーが増えるとなぜ重くなるか。スケーリングの基本概念を図で理解する。",
    tags: ["スケーリング", "負荷", "サーバー"],
    status: "coming" as const,
  },
  {
    href: "/learn/async",
    emoji: "⏳",
    title: "非同期処理",
    description: "なぜ「待つ」処理が必要か。同期と非同期の違いをアニメで追う。",
    tags: ["非同期", "Queue", "Promise"],
    status: "coming" as const,
  },
  {
    href: "/learn/auth",
    emoji: "🔐",
    title: "認証・JWT",
    description: "ログインはどう実現されているか。JWTの仕組みを図で理解する。",
    tags: ["JWT", "認証", "セッション"],
    status: "coming" as const,
  },
];

export default function LearnIndexPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 max-w-3xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">アーキテクチャ学習</h1>
        <p className="text-gray-400 text-sm">
          「なぜその設計か」を説明できるようになる。1トピック10分。
        </p>
      </div>

      {/* トピック一覧 */}
      <div className="space-y-3">
        {TOPICS.map((topic) => (
          <TopicCard key={topic.href} {...topic} />
        ))}
      </div>

      {/* 進捗 */}
      <div className="mt-8 p-4 bg-gray-900 rounded-xl">
        <p className="text-xs text-gray-500 mb-2">進捗</p>
        <div className="flex gap-1">
          {TOPICS.map((topic) => (
            <div
              key={topic.href}
              className={`h-2 flex-1 rounded-full ${
                topic.status === "done" ? "bg-blue-500" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {TOPICS.filter((t) => t.status === "done").length} / {TOPICS.length} 完了
        </p>
      </div>
    </div>
  );
}

// トピックカードコンポーネント
function TopicCard({
  href, emoji, title, description, tags, status,
}: (typeof TOPICS)[number]) {
  const isDone = status === "done";

  const card = (
    <div
      className={`p-5 rounded-2xl border transition-all ${
        isDone
          ? "bg-gray-900 border-gray-700 hover:border-blue-500 cursor-pointer"
          : "bg-gray-900/50 border-gray-800 opacity-60 cursor-not-allowed"
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl mt-0.5">{emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="font-bold text-base">{title}</h2>
            {isDone ? (
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                学習可
              </span>
            ) : (
              <span className="text-xs bg-gray-700 text-gray-500 px-2 py-0.5 rounded-full">
                準備中
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 mb-3 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return isDone ? <Link href={href}>{card}</Link> : <div>{card}</div>;
}
