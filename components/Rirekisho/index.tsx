'use client';
import { useResumeStorage } from '@/hooks/useResumeStorage';
import { RirekishoData, DEFAULT_JA } from './types';
import InfoTable from './InfoTable';
import CareerTable from './CareerTable';
import RightColumn from './RightColumn';
import EditableText from '@/components/EditableText';

export default function Rirekisho() {
  const [data, updateData] = useResumeStorage<RirekishoData>('resume-ja-data', DEFAULT_JA);
  const set = (k: keyof RirekishoData) => (v: string) => updateData({ ...data, [k]: v });

  const containerStyle: React.CSSProperties = {
    width: '420mm',
    minHeight: '297mm',
    margin: '0 auto',
    padding: '6mm',
    background: 'white',
    fontFamily: "'Noto Sans JP', 'MS PGothic', sans-serif",
    fontSize: '10pt',
    lineHeight: 1.2,
    color: '#000',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  return (
    <div>
      {/* A3横で印刷するための @page 指定 */}
      <style>{`@media print { @page { size: A3 landscape; margin: 0; } }`}</style>
      {/* 印刷ボタン */}
      <div className="no-print" style={{ padding: '12px 24px', background: '#f8f8f8', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button
          onClick={() => window.print()}
          style={{ padding: '8px 20px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
        >
          🖨 Print / Save PDF
        </button>
        <span style={{ fontSize: '12px', color: '#888' }}>各セルをクリックして編集できます。変更は自動保存されます。</span>
      </div>

      {/* A3横 レイアウト */}
      <div style={{ padding: '24px', overflowX: 'auto' }}>
        <div style={containerStyle}>
          <h1 style={{ textAlign: 'center', fontSize: '16pt', fontWeight: 'bold', margin: '0 0 4mm 0', letterSpacing: '4px' }}>
            履　歴　書
          </h1>
          <div style={{ textAlign: 'right', marginBottom: '4mm', fontSize: '10pt' }}>
            <EditableText value={data.date} onChange={set('date')} />
          </div>

          {/* 2カラムレイアウト */}
          <div style={{ display: 'flex', flex: 1, gap: '4mm' }}>
            {/* 左列 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <InfoTable data={data} set={set} />
              <CareerTable data={data} set={set} />
            </div>
            {/* 右列 */}
            <RightColumn data={data} set={set} />
          </div>
        </div>
      </div>
    </div>
  );
}
