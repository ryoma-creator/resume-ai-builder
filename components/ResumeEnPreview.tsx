'use client';
import { ResumeEnData } from './ResumeEn/types';
import Header from './ResumeEn/Header';
import Skills, { sectionTitle } from './ResumeEn/Skills';
import Experience from './ResumeEn/Experience';
import EducationCerts from './ResumeEn/EducationCerts';
import EditableText from './EditableText';

interface Props {
  data: ResumeEnData;
  onChange: (data: ResumeEnData) => void;
  companyName?: string;
}

// 求人票に合わせてAI生成されたレジュメのプレビュー（編集・PDF印刷対応）
export default function ResumeEnPreview({ data, onChange, companyName }: Props) {
  const set = (k: keyof ResumeEnData) => (v: string) => onChange({ ...data, [k]: v });

  const printWithFilename = () => {
    const filename = companyName ? `${companyName}_Resume` : 'Resume_Ryoma_Taguchi';
    const prev = document.title;
    document.title = filename;
    window.print();
    setTimeout(() => { document.title = prev; }, 2000);
  };

  return (
    <div>
      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body * { visibility: hidden; }
          .resume-preview-page, .resume-preview-page * { visibility: visible; }
          .resume-preview-page {
            position: absolute !important;
            left: 0 !important; top: 0 !important;
            margin: 0 !important;
            padding: 7mm 10mm !important;
            box-shadow: none !important;
            width: 210mm !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="no-print" style={{ padding: '12px 0', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          onClick={printWithFilename}
          style={{ padding: '8px 20px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}
        >
          🖨 Print / Save PDF
        </button>
        <span style={{ fontSize: '12px', color: '#888' }}>各テキストをクリックして編集できます</span>
      </div>

      <div
        className="resume-preview-page"
        style={{
          width: '210mm',
          minHeight: '297mm',
          margin: '0 auto',
          background: 'white',
          padding: '14mm 16mm',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
          fontFamily: 'Arial, "Helvetica Neue", sans-serif',
          color: '#111',
        }}
      >
        <Header data={data} set={set} />
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
