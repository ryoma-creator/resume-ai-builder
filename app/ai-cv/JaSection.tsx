'use client';
import { useState } from 'react';
import CoverLetterJaPreview from '@/components/CoverLetterJaPreview';

interface Props {
  jobDesc: string;
}

interface JaCoverLetter {
  companyName: string;
  position: string;
  date: string;
  body: string;
}

interface Motivation {
  companyName: string;
  position: string;
  motivation: string;
}

// 日本語セクション：送付状 + 職務経歴書志望動機
export default function JaSection({ jobDesc }: Props) {
  const [coverLetter, setCoverLetter] = useState<JaCoverLetter | null>(null);
  const [motivation, setMotivation] = useState<Motivation | null>(null);
  const [loadingCover, setLoadingCover] = useState(false);
  const [loadingMotiv, setLoadingMotiv] = useState(false);

  const generateCoverLetter = async () => {
    setLoadingCover(true);
    setCoverLetter(null);
    const res = await fetch('/api/generate-cover-letter-ja', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDescription: jobDesc }),
    });
    setCoverLetter(await res.json());
    setLoadingCover(false);
  };

  const generateMotivation = async () => {
    setLoadingMotiv(true);
    setMotivation(null);
    const res = await fetch('/api/generate-shokumu-motivation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDescription: jobDesc }),
    });
    setMotivation(await res.json());
    setLoadingMotiv(false);
  };

  const printMotivation = () => {
    if (!motivation) return;
    const filename = `${motivation.companyName}_職務経歴書志望動機`;
    const prev = document.title;
    document.title = filename;
    window.print();
    setTimeout(() => { document.title = prev; }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* 送付状 */}
      <div>
        <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>📝 送付状を生成</h2>
        <button
          onClick={generateCoverLetter}
          disabled={loadingCover}
          style={{ padding: '12px 32px', background: loadingCover ? '#999' : '#059669', color: 'white', border: 'none', borderRadius: '8px', cursor: loadingCover ? 'not-allowed' : 'pointer', fontWeight: 700, fontSize: '16px' }}
        >
          {loadingCover ? '⏳ 生成中...' : '📝 送付状を生成'}
        </button>
        {coverLetter && (
          <div style={{ marginTop: '16px' }}>
            <div style={{ background: '#f0fdf4', border: '2px solid #059669', borderRadius: '10px', padding: '14px 20px', marginBottom: '16px' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#065f46', margin: 0 }}>
                ✅ 完成 — 「🖨 送付状をPDF保存」を押してダウンロード
              </p>
            </div>
            <CoverLetterJaPreview data={coverLetter} />
          </div>
        )}
      </div>

      {/* 職務経歴書 志望動機 */}
      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>📄 職務経歴書の志望動機を生成</h2>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>コピーして職務経歴書の志望動機欄に貼り付けてください</p>
        <button
          onClick={generateMotivation}
          disabled={loadingMotiv}
          style={{ padding: '10px 24px', background: loadingMotiv ? '#999' : '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', cursor: loadingMotiv ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: '14px' }}
        >
          {loadingMotiv ? '⏳ 生成中...' : '✍️ 志望動機を生成'}
        </button>

        {motivation && (
          <div style={{ marginTop: '16px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px 20px', background: 'white' }}>
            <p style={{ fontSize: '12px', color: '#888', margin: '0 0 8px 0' }}>
              {motivation.companyName} — {motivation.position}
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.8, whiteSpace: 'pre-wrap', margin: 0 }}>{motivation.motivation}</p>
            <button
              onClick={() => navigator.clipboard.writeText(motivation.motivation)}
              style={{ marginTop: '12px', padding: '6px 16px', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
            >
              📋 コピー
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
