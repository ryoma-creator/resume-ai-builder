'use client';
import { useState } from 'react';
import CoverLetterPreview from '@/components/CoverLetterPreview';

interface Props {
  jobDesc: string;
}

interface CoverLetter {
  companyName?: string;
  position?: string;
  greeting: string;
  body: string;
  closing: string;
}

export default function CoverLetterSection({ jobDesc }: Props) {
  const [data, setData] = useState<CoverLetter | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generate = async () => {
    setLoading(true);
    setError('');
    setData(null);
    try {
      const res = await fetch('/api/generate-cover-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription: jobDesc }),
      });
      if (!res.ok) throw new Error('error');
      setData(await res.json());
    } catch {
      setError('生成失敗。OPENAI_API_KEYを確認してください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
        {loading ? '⏳ 生成中（10〜20秒）...' : '📝 カバーレターを生成'}
      </button>

      {error && <p style={{ color: '#dc2626', marginTop: '8px', fontSize: '14px' }}>{error}</p>}

      {data && (
        <div style={{ marginTop: '20px' }}>
          <div style={{ background: '#f0fdf4', border: '2px solid #059669', borderRadius: '10px', padding: '14px 20px', marginBottom: '16px' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#065f46', margin: 0 }}>
              ✅ 完成 — 「🖨 カバーレターをPDF保存」を押してダウンロードして提出するだけ
            </p>
          </div>
          <CoverLetterPreview data={data} />
        </div>
      )}
    </div>
  );
}
