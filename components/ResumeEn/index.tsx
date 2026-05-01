'use client';
import { useResumeStorage } from '@/hooks/useResumeStorage';
import { ResumeEnData, DEFAULT_EN } from './types';
import Header from './Header';
import Skills from './Skills';
import Experience from './Experience';
import EducationCerts from './EducationCerts';
import EditableText from '@/components/EditableText';
import { sectionTitle } from './Skills';

export default function ResumeEn() {
  const [data, updateData] = useResumeStorage<ResumeEnData>('resume-en-data', DEFAULT_EN);
  const set = (k: keyof ResumeEnData) => (v: string) => updateData({ ...data, [k]: v });

  return (
    <div>
      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 10mm 12mm; }
          nav, .no-print { display: none !important; }
          html {
            height: auto !important;
          }
          body {
            display: block !important;
            height: auto !important;
            min-height: 0 !important;
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          main {
            display: block !important;
            height: auto !important;
            min-height: 0 !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .resume-en-page {
            display: block !important;
            position: static !important;
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
      {/* 印刷ボタン */}
      <div
        className="no-print"
        style={{ padding: '12px 24px', background: '#f8f8f8', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: '8px', alignItems: 'center' }}
      >
        <button
          onClick={() => window.print()}
          style={{ padding: '8px 20px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
        >
          🖨 Print / Save PDF
        </button>
        <button
          onClick={() => { if (confirm('デフォルトにリセットしますか？')) { localStorage.removeItem('resume-en-data'); window.location.reload(); } }}
          style={{ padding: '8px 14px', background: 'white', color: '#888', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}
        >
          リセット
        </button>
        <span style={{ fontSize: '12px', color: '#888' }}>各テキストをクリックして編集できます。変更は自動保存されます。</span>
      </div>

      {/* A4 レイアウト */}
      <div
        className="resume-en-page"
        style={{
          width: '210mm',
          minHeight: '297mm',
          margin: '24px auto',
          background: 'white',
          padding: '14mm 16mm',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
          fontFamily: 'Arial, "Helvetica Neue", sans-serif',
          color: '#111',
        }}
      >
        <Header data={data} set={set} />

        {/* 職務要約 */}
        <div style={{ marginBottom: '10px' }}>
          <div style={sectionTitle}>Professional Summary</div>
          <hr style={{ border: 'none', borderTop: '1px solid #ccc', marginBottom: '5px' }} />
          <EditableText
            value={data.summary}
            onChange={set('summary')}
            multiline
            style={{ fontSize: '10pt', lineHeight: 1.6, display: 'block' }}
          />
        </div>

        <Skills data={data} set={set} />
        <Experience data={data} set={set} />
        <EducationCerts data={data} set={set} />
      </div>
    </div>
  );
}
