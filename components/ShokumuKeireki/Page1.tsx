import EditableText from '@/components/EditableText';
import { ShokumuData } from './types';

interface Props {
  data: ShokumuData;
  set: (k: keyof ShokumuData) => (v: string) => void;
}

const page: React.CSSProperties = {
  minHeight: '297mm', padding: '20mm', fontFamily: "'MS PGothic', 'Noto Sans JP', sans-serif",
  fontSize: '9.5pt', lineHeight: 1.3, color: '#000', boxSizing: 'border-box',
};
const sec: React.CSSProperties = { fontSize: '11pt', fontWeight: 'bold', margin: '6mm 0 3mm', paddingBottom: '1.5mm', borderBottom: '2px solid #000' };
const td: React.CSSProperties = { border: '1px solid #333', padding: '2.5mm 3mm', textAlign: 'left', verticalAlign: 'top', fontSize: '9pt', lineHeight: 1.3 };
const th: React.CSSProperties = { ...td, background: '#f0f0f0', fontWeight: 'bold', width: '22%', whiteSpace: 'nowrap' };
const ul: React.CSSProperties = { margin: 0, paddingLeft: '5mm', fontSize: '9pt', lineHeight: 1.4, listStyle: 'none' };

export default function Page1({ data, set }: Props) {
  return (
    <div className="page" style={page}>
      <div style={{ textAlign: 'center', marginBottom: '8mm' }}>
        <h1 style={{ fontSize: '16pt', fontWeight: 'bold', letterSpacing: '4px', margin: '0 0 5mm' }}>職　務　経　歴　書</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11pt' }}>
          <EditableText value={data.date} onChange={set('date')} />
          <EditableText value={data.name} onChange={set('name')} style={{ fontWeight: 'bold' }} />
        </div>
      </div>

      <div style={sec}>■ 職務要約</div>
      <EditableText value={data.summary} onChange={set('summary')} multiline style={{ fontSize: '9.5pt', lineHeight: 1.4, whiteSpace: 'pre-wrap' }} />

      <div style={sec}>■ スキル</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '2mm 0 4mm' }}>
        <tbody>
          {([['フロントエンド', 'skillFront'], ['バックエンド理解', 'skillBack'], ['開発環境', 'skillDev'], ['デザイン再現', 'skillDesign'], ['言語', 'skillLang']] as [string, keyof ShokumuData][]).map(([label, key]) => (
            <tr key={key}>
              <th style={th}>{label}</th>
              <td style={td}>
                <EditableText value={data[key] as string} onChange={set(key)} multiline style={{ whiteSpace: 'pre-wrap' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={sec}>■ 職務経歴</div>
      <div style={{ marginBottom: '5mm' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5mm' }}>
          <strong style={{ fontSize: '10pt' }}>アクセンチュア株式会社</strong>
          <span style={{ fontSize: '9pt', color: '#333' }}>2022年2月 ～ 2024年2月</span>
        </div>
        <EditableText value={data.exp1Summary} onChange={set('exp1Summary')} multiline style={{ fontSize: '9pt', lineHeight: 1.3, whiteSpace: 'pre-wrap', marginBottom: '2mm', display: 'block' }} />
        <div style={{ fontWeight: 'bold', fontSize: '9pt', margin: '2mm 0 1mm' }}>担当業務</div>
        <ul style={ul}>
          {data.exp1Duties.split('\n').map((b, i) => b.trim() ? <li key={i} style={{ marginBottom: '1mm' }}>・{b}</li> : null)}
        </ul>
        <div style={{ fontWeight: 'bold', fontSize: '9pt', margin: '2mm 0 1mm' }}>実績</div>
        <ul style={ul}>
          {data.exp1Results.split('\n').map((b, i) => b.trim() ? <li key={i} style={{ marginBottom: '1mm' }}>・{b}</li> : null)}
        </ul>
        <details style={{ marginTop: '4px' }}>
          <summary style={{ fontSize: '8pt', color: '#999', cursor: 'pointer' }}>担当業務・実績を編集</summary>
          <EditableText value={data.exp1Duties} onChange={set('exp1Duties')} multiline style={{ fontSize: '8pt', background: '#f9f9f9', padding: '3px', border: '1px solid #ddd', display: 'block', marginTop: '2px', whiteSpace: 'pre-wrap' }} />
          <EditableText value={data.exp1Results} onChange={set('exp1Results')} multiline style={{ fontSize: '8pt', background: '#f9f9f9', padding: '3px', border: '1px solid #ddd', display: 'block', marginTop: '2px', whiteSpace: 'pre-wrap' }} />
        </details>
      </div>
    </div>
  );
}
