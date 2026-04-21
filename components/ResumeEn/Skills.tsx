import EditableText from '@/components/EditableText';
import { ResumeEnData } from './types';

interface Props {
  data: ResumeEnData;
  set: (k: keyof ResumeEnData) => (v: string) => void;
}

export const sectionTitle: React.CSSProperties = {
  fontSize: '11pt',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '6px',
  color: '#1a1a2e',
};

const label: React.CSSProperties = { fontWeight: 600, color: '#333', minWidth: '90px', display: 'inline-block' };

export default function Skills({ data, set }: Props) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={sectionTitle}>Technical Skills</div>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', marginBottom: '8px' }} />
      {(
        [
          ['skillsFrontend', 'Frontend'],
          ['skillsAI', 'AI / LLM'],
          ['skillsBackend', 'Backend'],
          ['skillsTools', 'Tools'],
          ['skillsLanguages', 'Languages'],
        ] as [keyof ResumeEnData, string][]
      ).map(([key, lbl]) => (
        <div key={key} style={{ fontSize: '10pt', marginBottom: '4px' }}>
          <span style={label}>{lbl}:</span>
          <EditableText value={data[key]} onChange={set(key)} />
        </div>
      ))}
    </div>
  );
}
