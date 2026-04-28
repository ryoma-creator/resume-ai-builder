'use client';
import { useState } from 'react';
import CoverLetterSection from './CoverLetterSection';
import FullResumeSection from './FullResumeSection';
import JaSection from './JaSection';

type Lang = 'en' | 'ja';

export default function AiCvPage() {
  const [jobDesc, setJobDesc] = useState('');
  const [lang, setLang] = useState<Lang>('en');
  const [showResume, setShowResume] = useState(false);
  const ready = jobDesc.trim().length > 50;

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '6px' }}>AI CV生成</h1>
      <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
        求人票を貼り付けるだけ。カバーレター・送付状・レジュメをAIが生成してPDF保存できます。
      </p>

      {/* 言語タブ */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {(['en', 'ja'] as Lang[]).map(l => (
          <button
            key={l}
            onClick={() => { setLang(l); setShowResume(false); }}
            style={{
              padding: '8px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', border: 'none',
              background: lang === l ? '#111' : '#f3f4f6',
              color: lang === l ? 'white' : '#374151',
            }}
          >
            {l === 'en' ? '🇺🇸 English' : '🇯🇵 日本語'}
          </button>
        ))}
      </div>

      {/* 求人票入力 */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
          求人票テキスト（コピペするだけでOK）
        </label>
        <textarea
          value={jobDesc}
          onChange={e => { setJobDesc(e.target.value); setShowResume(false); }}
          placeholder="LinkedInやWorkdayの求人ページのテキストを全部貼り付けてください..."
          style={{ width: '100%', height: '180px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
        />
      </div>

      {!ready && (
        <p style={{ fontSize: '13px', color: '#999' }}>↑ 求人票を貼り付けると生成ボタンが現れます</p>
      )}

      {/* 英語 */}
      {ready && lang === 'en' && (
        <>
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>📝 Cover Letter（メイン）</h2>
            <CoverLetterSection jobDesc={jobDesc} />
          </div>
          <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: '24px' }}>
            {!showResume ? (
              <button
                onClick={() => setShowResume(true)}
                style={{ padding: '10px 24px', background: 'white', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}
              >
                📄 Resume も生成する（オプション）
              </button>
            ) : (
              <FullResumeSection jobDesc={jobDesc} />
            )}
          </div>
        </>
      )}

      {/* 日本語 */}
      {ready && lang === 'ja' && (
        <JaSection jobDesc={jobDesc} />
      )}
    </div>
  );
}
