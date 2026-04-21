'use client';
import { useState } from 'react';

type GeneratedCV = {
  summary: string;
  highlights: string[];
  coverLetterOutline: string;
};

export default function AiCvPage() {
  const [jobDesc, setJobDesc] = useState('');
  const [language, setLanguage] = useState<'en' | 'ja'>('ja');
  const [result, setResult] = useState<GeneratedCV | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generate = async () => {
    if (!jobDesc.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch('/api/generate-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobDescription: jobDesc,
          language,
          resumeData: localStorage.getItem(language === 'en' ? 'resume-en-data' : 'shokumu-data') ?? '',
        }),
      });
      if (!res.ok) throw new Error('API error');
      setResult(await res.json());
    } catch {
      setError('生成に失敗しました。OPENAI_API_KEY の設定を確認してください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>AI CV生成</h1>
      <p style={{ color: '#666', marginBottom: '24px', fontSize: '14px' }}>
        求人票を貼り付けると、あなたの経歴をその会社向けにカスタマイズします。
      </p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>対象言語</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'ja')}
          style={{ padding: '8px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
        >
          <option value="ja">日本語（履歴書・職務経歴書）</option>
          <option value="en">English (Resume)</option>
        </select>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>求人票テキスト</label>
        <textarea
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          placeholder="求人票のテキストをここに貼り付けてください..."
          style={{ width: '100%', height: '200px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
        />
      </div>

      <button
        onClick={generate}
        disabled={loading || !jobDesc.trim()}
        style={{ padding: '10px 28px', background: loading ? '#999' : '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: '15px' }}
      >
        {loading ? '生成中...' : '✨ 生成する'}
      </button>

      {error && <div style={{ marginTop: '16px', color: '#dc2626', fontSize: '14px' }}>{error}</div>}

      {result && (
        <div style={{ marginTop: '32px' }}>
          <Section title="カスタマイズされた職務要約">
            <p style={{ fontSize: '14px', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{result.summary}</p>
          </Section>
          <Section title="強調すべきスキル・経験">
            <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: 1.8 }}>
              {result.highlights?.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </Section>
          <Section title="カバーレターの骨子">
            <p style={{ fontSize: '14px', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{result.coverLetterOutline}</p>
          </Section>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '24px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '20px' }}>
      <h2 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px', color: '#1a1a2e' }}>{title}</h2>
      {children}
    </div>
  );
}
