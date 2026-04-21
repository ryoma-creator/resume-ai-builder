import EditableText from '@/components/EditableText';
import { RirekishoData } from './types';

interface Props {
  data: RirekishoData;
  set: (k: keyof RirekishoData) => (v: string) => void;
}

const td: React.CSSProperties = { border: '1px solid #000', padding: '2mm', verticalAlign: 'top', fontSize: '9pt' };
const th: React.CSSProperties = { ...td, background: '#f5f5f5', fontWeight: 'bold', textAlign: 'center' };
const yCell: React.CSSProperties = { ...td, width: '15%', textAlign: 'center', fontSize: '8pt' };
const mCell: React.CSSProperties = { ...td, width: '10%', textAlign: 'center', fontSize: '8pt' };

const tableBase: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '3mm' };

type QRow = { y: keyof RirekishoData; m: keyof RirekishoData; t: keyof RirekishoData };
const QROWS: QRow[] = [
  { y: 'q1y', m: 'q1m', t: 'q1t' }, { y: 'q2y', m: 'q2m', t: 'q2t' },
  { y: 'q3y', m: 'q3m', t: 'q3t' }, { y: 'q4y', m: 'q4m', t: 'q4t' },
  { y: 'q5y', m: 'q5m', t: 'q5t' }, { y: 'q6y', m: 'q6m', t: 'q6t' },
];

export default function RightColumn({ data, set }: Props) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* 免許・資格 */}
      <table style={tableBase}>
        <thead>
          <tr><th style={th}>年</th><th style={th}>月</th><th style={th}>免許・資格</th></tr>
        </thead>
        <tbody>
          {QROWS.map(({ y, m, t }) => (
            <tr key={y}>
              <td style={yCell}><EditableText value={data[y] as string} onChange={set(y)} /></td>
              <td style={mCell}><EditableText value={data[m] as string} onChange={set(m)} /></td>
              <td style={td}><EditableText value={data[t] as string} onChange={set(t)} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ポートフォリオ */}
      <table style={tableBase}>
        <thead>
          <tr><th style={th}>年</th><th style={th}>月</th><th style={th}>ポートフォリオ</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style={yCell}><EditableText value={data.p1y} onChange={set('p1y')} /></td>
            <td style={mCell}><EditableText value={data.p1m} onChange={set('p1m')} /></td>
            <td style={td}><EditableText value={data.p1t} onChange={set('p1t')} /></td>
          </tr>
        </tbody>
      </table>

      {/* 志望動機 */}
      <table style={{ ...tableBase, flex: 1 }}>
        <thead>
          <tr><th colSpan={3} style={th}>志望の動機、特技、好きな学科、アピールポイントなど</th></tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} style={{ ...td, height: '80mm', padding: '4mm', lineHeight: 1.3 }}>
              <EditableText
                value={data.motivation}
                onChange={set('motivation')}
                multiline
                style={{ whiteSpace: 'pre-wrap', fontSize: '9pt', lineHeight: 1.3 }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* 本人希望記入欄 */}
      <table style={tableBase}>
        <thead>
          <tr><th colSpan={3} style={{ ...th, fontSize: '8pt' }}>本人希望記入欄（特に給料・職種・勤務時間・勤務地・その他についての希望などがあれば記入）</th></tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} style={{ ...td, height: '40mm', padding: '4mm', lineHeight: 1.3, fontSize: '9pt' }}>
              <EditableText value={data.request} onChange={set('request')} multiline style={{ whiteSpace: 'pre-wrap' }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
