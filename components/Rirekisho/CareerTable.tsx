import EditableText from '@/components/EditableText';
import { RirekishoData } from './types';

interface Props {
  data: RirekishoData;
  set: (k: keyof RirekishoData) => (v: string) => void;
}

type RowKey = { y: keyof RirekishoData; m: keyof RirekishoData; t: keyof RirekishoData };

const ROWS: RowKey[] = [
  { y: 'c1y', m: 'c1m', t: 'c1t' }, { y: 'c2y', m: 'c2m', t: 'c2t' },
  { y: 'c3y', m: 'c3m', t: 'c3t' }, { y: 'c4y', m: 'c4m', t: 'c4t' },
  { y: 'c5y', m: 'c5m', t: 'c5t' }, { y: 'c6y', m: 'c6m', t: 'c6t' },
  { y: 'c7y', m: 'c7m', t: 'c7t' }, { y: 'c8y', m: 'c8m', t: 'c8t' },
  { y: 'c9y', m: 'c9m', t: 'c9t' }, { y: 'c10y', m: 'c10m', t: 'c10t' },
  { y: 'c11y', m: 'c11m', t: 'c11t' }, { y: 'c12y', m: 'c12m', t: 'c12t' },
];

const td: React.CSSProperties = { border: '1px solid #000', padding: '1.5mm', verticalAlign: 'top', fontSize: '9pt' };
const th: React.CSSProperties = { ...td, background: '#f5f5f5', fontWeight: 'bold', textAlign: 'center' };
const yCell: React.CSSProperties = { ...td, width: '12%', textAlign: 'center', fontSize: '8pt' };
const mCell: React.CSSProperties = { ...td, width: '8%', textAlign: 'center', fontSize: '8pt' };

export default function CareerTable({ data, set }: Props) {
  const CAREER_DIVIDER_INDEX = 5; // 学歴と職歴の区切り（c6行）

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', flex: 1 }}>
      <thead>
        <tr>
          <th style={th}>年</th>
          <th style={th}>月</th>
          <th style={th}>学歴・職歴（各別にまとめて書く）</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={3} style={{ ...td, textAlign: 'center', fontWeight: 'bold' }}>学　歴</td>
        </tr>
        {ROWS.slice(0, CAREER_DIVIDER_INDEX).map(({ y, m, t }) => (
          <tr key={y}>
            <td style={yCell}><EditableText value={data[y] as string} onChange={set(y)} /></td>
            <td style={mCell}><EditableText value={data[m] as string} onChange={set(m)} /></td>
            <td style={td}><EditableText value={data[t] as string} onChange={set(t)} /></td>
          </tr>
        ))}
        <tr>
          <td colSpan={3} style={{ ...td, textAlign: 'center', fontWeight: 'bold' }}>職　歴</td>
        </tr>
        {ROWS.slice(CAREER_DIVIDER_INDEX).map(({ y, m, t }) => (
          <tr key={y}>
            <td style={yCell}><EditableText value={data[y] as string} onChange={set(y)} /></td>
            <td style={mCell}><EditableText value={data[m] as string} onChange={set(m)} /></td>
            <td style={td}><EditableText value={data[t] as string} onChange={set(t)} /></td>
          </tr>
        ))}
        <tr>
          <td colSpan={3} style={{ ...td, textAlign: 'center', fontWeight: 'bold' }}>以　上</td>
        </tr>
      </tbody>
    </table>
  );
}
