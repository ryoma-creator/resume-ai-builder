import EditableText from '@/components/EditableText';
import { ResumeEnData } from './types';

interface Props {
  data: ResumeEnData;
  set: (k: keyof ResumeEnData) => (v: string) => void;
}

export default function Header({ data, set }: Props) {
  const cellStyle: React.CSSProperties = { fontSize: '11pt' };

  return (
    <div style={{ marginBottom: '14px' }}>
      {/* 名前・タイトル */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6px' }}>
        <div>
          <EditableText
            value={data.name}
            onChange={set('name')}
            style={{ fontSize: '26pt', fontWeight: 700, display: 'block', lineHeight: 1.1 }}
          />
          <EditableText
            value={data.jobTitle}
            onChange={set('jobTitle')}
            style={{ fontSize: '12pt', color: '#555', display: 'block', marginTop: '2px' }}
          />
        </div>
        {/* 連絡先 */}
        <div style={{ textAlign: 'right', fontSize: '10pt', color: '#444', lineHeight: 1.6 }}>
          <EditableText value={data.email} onChange={set('email')} style={cellStyle} />
          <br />
          <EditableText value={data.phone} onChange={set('phone')} style={cellStyle} />
          <br />
          <EditableText value={data.location} onChange={set('location')} style={cellStyle} />
          <br />
          <span style={{ color: '#555' }}>Portfolio: </span>
          <a href={data.portfolio} target="_blank" rel="noopener noreferrer" style={{ ...cellStyle, color: '#4f46e5', textDecoration: 'underline' }}>
            <EditableText value={data.portfolio} onChange={set('portfolio')} style={{ color: '#4f46e5' }} />
          </a>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '2px solid #1a1a2e', margin: '8px 0' }} />
    </div>
  );
}
