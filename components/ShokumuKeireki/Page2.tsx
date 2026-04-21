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
const hr: React.CSSProperties = { border: 'none', borderTop: '1px solid #ccc', margin: '4mm 0' };
const ul: React.CSSProperties = { margin: 0, paddingLeft: '5mm', fontSize: '9pt', lineHeight: 1.4, listStyle: 'none' };
const sub: React.CSSProperties = { fontWeight: 'bold', fontSize: '9pt', margin: '2mm 0 1mm' };

export default function Page2({ data, set }: Props) {
  return (
    <div className="page" style={page}>
      {/* IT転向期間 */}
      <div style={{ marginBottom: '5mm' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5mm' }}>
          <strong style={{ fontSize: '10pt' }}>IT分野への転向期間</strong>
          <span style={{ fontSize: '9pt', color: '#333' }}>2019年4月 ～ 2021年3月</span>
        </div>
        <ul style={ul}>
          {data.itPeriodBullets.split('\n').map((b, i) => b.trim() ? <li key={i} style={{ marginBottom: '1mm' }}>・{b}</li> : null)}
        </ul>
      </div>
      <div style={hr} />
      {/* その他 */}
      <div style={{ marginBottom: '5mm' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5mm' }}>
          <strong style={{ fontSize: '10pt' }}>その他職務経験</strong>
          <span style={{ fontSize: '9pt', color: '#333' }}>2010年 ～ 2021年</span>
        </div>
        <ul style={ul}>
          {data.otherBullets.split('\n').map((b, i) => b.trim() ? <li key={i}>・{b}</li> : null)}
        </ul>
      </div>
      <div style={hr} />

      <div style={sec}>■ ポートフォリオ</div>
      <div style={sub}>ポートフォリオサイト</div>
      <div style={{ fontSize: '9pt', marginBottom: '1mm' }}>
        <EditableText value={data.portfolioUrl} onChange={set('portfolioUrl')} />
      </div>
      <div style={{ fontSize: '9pt', marginBottom: '3mm' }}>
        <EditableText value={data.portfolioDetail} onChange={set('portfolioDetail')} />
      </div>
      <ul style={ul}>
        {data.portfolioBullets.split('\n').map((b, i) => b.trim() ? <li key={i} style={{ marginBottom: '1mm' }}>・{b}</li> : null)}
      </ul>
      <div style={sub}>その他制作</div>
      <ul style={ul}>
        {data.otherPortfolioBullets.split('\n').map((b, i) => b.trim() ? <li key={i} style={{ marginBottom: '1mm' }}>・{b}</li> : null)}
      </ul>
      <div style={hr} />

      <div style={sec}>■ 選考実績</div>
      <div style={{ marginBottom: '3mm' }}>
        <EditableText value={data.ibmDetail} onChange={set('ibmDetail')} multiline style={{ fontSize: '9.5pt', lineHeight: 1.5, whiteSpace: 'pre-wrap', display: 'block' }} />
        <div style={{ fontSize: '9pt', margin: '2mm 0' }}>全6段階選考通過（最終選考合格）／全選考英語実施</div>
        <ul style={ul}>
          {data.ibmBullets.split('\n').map((b, i) => b.trim() ? <li key={i} style={{ marginBottom: '1mm' }}>・{b}</li> : null)}
        </ul>
      </div>
      <div style={hr} />

      <div style={sec}>■ 現在</div>
      <div style={{ fontSize: '9pt', color: '#333', marginBottom: '2mm' }}>2024年3月 ～ 現在</div>
      <EditableText value={data.currentDetail} onChange={set('currentDetail')} multiline style={{ fontSize: '9pt', lineHeight: 1.5, whiteSpace: 'pre-wrap', display: 'block' }} />
      <div style={hr} />

      <div style={sec}>■ 志望動機</div>
      <EditableText value={data.motivation} onChange={set('motivation')} multiline style={{ fontSize: '9.5pt', lineHeight: 1.4, whiteSpace: 'pre-wrap', display: 'block' }} />
      <div style={{ textAlign: 'right', marginTop: '10mm', fontSize: '10pt' }}>以上</div>
    </div>
  );
}
