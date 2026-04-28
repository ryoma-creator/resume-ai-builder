'use client';

interface CoverLetter {
  companyName?: string;
  position?: string;
  greeting: string;
  body: string;
  closing: string;
}

interface Props {
  data: CoverLetter;
}

export default function CoverLetterPreview({ data }: Props) {
  return (
    <div>
      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          body * { visibility: hidden; }
          .cover-letter-page, .cover-letter-page * { visibility: visible; }
          .cover-letter-page {
            position: absolute !important;
            left: 0 !important; top: 0 !important;
            margin: 0 !important;
            padding: 18mm 22mm !important;
            box-shadow: none !important;
            width: 210mm !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="no-print" style={{ padding: '12px 0', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          onClick={() => {
            const filename = data.companyName ? `${data.companyName}_CoverLetter` : 'CoverLetter_Ryoma_Taguchi';
            const prev = document.title;
            document.title = filename;
            window.print();
            setTimeout(() => { document.title = prev; }, 2000);
          }}
          style={{ padding: '10px 24px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '14px' }}
        >
          🖨 カバーレターをPDF保存
        </button>
        {data.companyName && (
          <span style={{ fontSize: '13px', color: '#666' }}>
            宛先: {data.companyName} — {data.position}
          </span>
        )}
      </div>

      <div
        className="cover-letter-page"
        style={{
          width: '210mm',
          minHeight: '297mm',
          margin: '0 auto',
          background: 'white',
          padding: '18mm 22mm',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
          fontFamily: 'Arial, "Helvetica Neue", sans-serif',
          color: '#111',
          fontSize: '10.5pt',
          lineHeight: 1.75,
        }}
      >
        {/* ヘッダー：連絡先 */}
        <div style={{ marginBottom: '28px', paddingBottom: '14px', borderBottom: '1px solid #ddd' }}>
          <p style={{ fontSize: '13pt', fontWeight: 700, margin: '0 0 4px 0' }}>Ryoma Taguchi</p>
          <p style={{ fontSize: '9.5pt', color: '#555', margin: 0, lineHeight: 1.8 }}>
            ryoma.t.engineer@gmail.com · +81-80-5519-4585<br />
            LinkedIn: linkedin.com/in/ryoma-taguchi-b32024283<br />
            AI Portfolio (live apps): ryoma-ai-portfolio.vercel.app
          </p>
        </div>

        <p style={{ marginBottom: '20px' }}>{data.greeting}</p>
        <div style={{ whiteSpace: 'pre-wrap', marginBottom: '24px' }}>{data.body}</div>
        <p style={{ whiteSpace: 'pre-wrap', marginBottom: '24px' }}>{data.closing}</p>
        <p style={{ fontWeight: 700, margin: 0 }}>Ryoma Taguchi</p>
      </div>
    </div>
  );
}
