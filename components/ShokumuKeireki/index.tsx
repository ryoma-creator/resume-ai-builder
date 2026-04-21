'use client';
import { useResumeStorage } from '@/hooks/useResumeStorage';
import { ShokumuData, DEFAULT_SHOKUMU } from './types';
import Page1 from './Page1';
import Page2 from './Page2';

export default function ShokumuKeireki() {
  const [data, updateData] = useResumeStorage<ShokumuData>('shokumu-data', DEFAULT_SHOKUMU);
  const set = (k: keyof ShokumuData) => (v: string) => updateData({ ...data, [k]: v });

  return (
    <div>
      {/* A4縦で印刷するための @page 指定 */}
      <style>{`@media print { @page { size: A4 portrait; margin: 0; } .page { page-break-after: always; } .page:last-child { page-break-after: avoid; } }`}</style>
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

      {/* A4縦 2ページ */}
      <div style={{ padding: '24px' }}>
        <div
          style={{
            maxWidth: '210mm',
            margin: '0 auto',
            background: 'white',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          }}
        >
          <Page1 data={data} set={set} />
          {/* ページ区切り線 */}
          <div className="no-print" style={{ borderTop: '3px dashed #ccc', margin: '0', padding: '4px 20px', background: '#f9f9f9', fontSize: '11px', color: '#999', textAlign: 'center' }}>
            — 2ページ目 —
          </div>
          <Page2 data={data} set={set} />
        </div>
      </div>
    </div>
  );
}
