'use client';
import { useState, useRef } from 'react';
import { ResumeEnData, DEFAULT_EN } from '@/components/ResumeEn/types';
import ResumeEnPreview from '@/components/ResumeEnPreview';

interface Props {
  jobDesc: string;
}

// 求人票 → 完成版レジュメ生成 → そのままPDF保存
export default function FullResumeSection({ jobDesc }: Props) {
  const [data, setData] = useState<ResumeEnData | null>(null);
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const previewRef = useRef<HTMLDivElement>(null);

  const generate = async () => {
    setLoading(true);
    setError('');
    setData(null);

    const stored = typeof window !== 'undefined' ? localStorage.getItem('resume-en-data') : null;
    const baseData: ResumeEnData = stored ? JSON.parse(stored) : DEFAULT_EN;
    const jaContext = typeof window !== 'undefined' ? (localStorage.getItem('resume-ja-data') ?? '') : '';
    const shokumuContext = typeof window !== 'undefined' ? (localStorage.getItem('shokumu-data') ?? '') : '';

    try {
      const res = await fetch('/api/generate-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription: jobDesc, baseData, jaContext, shokumuContext }),
      });
      if (!res.ok) throw new Error('API error');
      const generated = await res.json() as ResumeEnData & { _companyName?: string };
      setCompanyName(generated._companyName ?? '');
      setData(generated);
      // 生成完了後、自動でプレビューへスクロール
      setTimeout(() => previewRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch {
      setError('生成に失敗しました。OPENAI_API_KEY を確認してください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '32px', borderTop: '2px solid #e5e7eb', paddingTop: '24px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>
        完成版レジュメを生成 — そのままPDF保存
      </h2>
      <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>
        英語Resume・日本語履歴書・職務経歴書の全データをもとに、この求人用にカスタマイズします。
      </p>

      <button
        onClick={generate}
        disabled={loading}
        style={{
          padding: '12px 32px',
          background: loading ? '#999' : '#059669',
          color: 'white', border: 'none', borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 700, fontSize: '16px',
        }}
      >
        {loading ? '⏳ 生成中（15〜30秒）...' : '📄 完成版レジュメを生成'}
      </button>

      {error && <p style={{ marginTop: '12px', color: '#dc2626', fontSize: '14px' }}>{error}</p>}

      {data && (
        <div ref={previewRef} style={{ marginTop: '24px' }}>
          {/* ダウンロードボタン（目立つ位置） */}
          <div className="no-print" style={{
            background: '#f0fdf4', border: '2px solid #059669', borderRadius: '10px',
            padding: '16px 20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px',
          }}>
            <button
              onClick={() => window.print()}
              style={{
                padding: '12px 28px', background: '#059669', color: 'white',
                border: 'none', borderRadius: '8px', cursor: 'pointer',
                fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap',
              }}
            >
              📥 PDFとして保存
            </button>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#065f46', margin: 0 }}>
                クリック → ブラウザの印刷画面が開きます
              </p>
              <p style={{ fontSize: '12px', color: '#047857', margin: 0 }}>
                「保存先」を「PDFに保存」に変更 → 保存ボタンで完了
              </p>
            </div>
          </div>
          <ResumeEnPreview data={data} onChange={setData} companyName={companyName} />
        </div>
      )}
    </div>
  );
}
