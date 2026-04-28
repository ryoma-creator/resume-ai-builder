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
          @page { size: A4 portrait; margin: 0; }
          body * { visibility: hidden; }
          .resume-en-page, .resume-en-page * { visibility: visible; }
          .resume-en-page {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            margin: 0 !important;
            padding: 5mm 8mm !important;
            box-shadow: none !important;
            /* 94%縮小でA4(297mm)に収める: 223mm × 0.94 = 210mm */
            width: 223mm !important;
            transform-origin: top left !important;
            transform: scale(0.94) !important;
          }
          .no-print { display: none !important; }
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
