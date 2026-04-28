'use client';

interface Props {
  data: {
    companyName: string;
    position: string;
    date: string;
    body: string;
  };
}

export default function CoverLetterJaPreview({ data }: Props) {
  const printWithFilename = () => {
    const filename = `${data.companyName}_送付状`;
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
          .cover-ja-page, .cover-ja-page * { visibility: visible; }
          .cover-ja-page {
            position: absolute !important;
            left: 0 !important; top: 0 !important;
            margin: 0 !important;
            padding: 20mm 22mm !important;
            box-shadow: none !important;
            width: 210mm !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="no-print" style={{ padding: '12px 0', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button
          onClick={printWithFilename}
          style={{ padding: '10px 24px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '14px' }}
        >
          🖨 送付状をPDF保存
        </button>
        <span style={{ fontSize: '13px', color: '#666' }}>宛先: {data.companyName} — {data.position}</span>
      </div>

      <div
        className="cover-ja-page"
        style={{
          width: '210mm', minHeight: '297mm', margin: '0 auto', background: 'white',
          padding: '20mm 22mm', boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          boxSizing: 'border-box', fontFamily: '"MS Mincho", "Yu Mincho", serif',
          color: '#111', fontSize: '10.5pt', lineHeight: 2,
        }}
      >
        {/* 日付・宛先・差出人 */}
        <p style={{ textAlign: 'right', marginBottom: '4px' }}>{data.date}</p>
        <p style={{ marginBottom: '24px' }}>{data.companyName}<br />採用ご担当者様</p>
        <div style={{ textAlign: 'right', marginBottom: '24px', lineHeight: 1.8 }}>
          <p style={{ margin: 0 }}>田口 龍馬（たぐち りょうま）</p>
          <p style={{ margin: 0, fontSize: '9.5pt', color: '#555' }}>
            ryoma.t.engineer@gmail.com　080-5519-4585<br />
            linkedin.com/in/ryoma-taguchi-b32024283
          </p>
        </div>

        {/* タイトル */}
        <p style={{ textAlign: 'center', fontWeight: 700, fontSize: '12pt', marginBottom: '24px' }}>
          応募書類のご送付について
        </p>

        {/* 本文 */}
        <p style={{ whiteSpace: 'pre-wrap', marginBottom: '24px', textIndent: '1em' }}>
          {data.body}
        </p>

        {/* 書類リスト */}
        <div style={{ marginTop: '32px' }}>
          <p style={{ textAlign: 'center' }}>記</p>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
            <li>・履歴書　1通</li>
            <li>・職務経歴書　1通</li>
          </ul>
          <p style={{ textAlign: 'right' }}>以上</p>
        </div>
      </div>
    </div>
  );
}
