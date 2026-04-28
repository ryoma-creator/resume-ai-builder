import EditableText from '@/components/EditableText';
import EditableBullets from '@/components/EditableBullets';
import { ResumeEnData } from './types';
import { sectionTitle } from './Skills';

interface Props {
  data: ResumeEnData;
  set: (k: keyof ResumeEnData) => (v: string) => void;
}

function ExpEntry({
  company, title, period, location, bullets,
  onCompany, onTitle, onPeriod, onLocation, onBullets,
}: {
  company: string; title: string; period: string; location: string; bullets: string;
  onCompany: (v: string) => void; onTitle: (v: string) => void; onPeriod: (v: string) => void;
  onLocation: (v: string) => void; onBullets: (v: string) => void;
}) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <EditableText value={company} onChange={onCompany} style={{ fontWeight: 700, fontSize: '11pt' }} />
          {' | '}
          <EditableText value={title} onChange={onTitle} style={{ fontWeight: 600, fontSize: '10.5pt' }} />
        </div>
        <EditableText value={period} onChange={onPeriod} style={{ fontSize: '10pt', color: '#555' }} />
      </div>
      {location && (
        <EditableText value={location} onChange={onLocation} style={{ fontSize: '9.5pt', color: '#777', display: 'block', marginBottom: '4px' }} />
      )}
      <EditableBullets value={bullets} onChange={onBullets} style={{ fontSize: '10pt' }} />
    </div>
  );
}

export default function Experience({ data, set }: Props) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={sectionTitle}>Work Experience</div>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', marginBottom: '5px' }} />
      <ExpEntry
        company={data.exp1Company} title={data.exp1Title}
        period={data.exp1Period} location={data.exp1Location} bullets={data.exp1Bullets}
        onCompany={set('exp1Company')} onTitle={set('exp1Title')}
        onPeriod={set('exp1Period')} onLocation={set('exp1Location')} onBullets={set('exp1Bullets')}
      />
      <ExpEntry
        company={data.exp2Company} title={data.exp2Title}
        period={data.exp2Period} location={data.exp2Location} bullets={data.exp2Bullets}
        onCompany={set('exp2Company')} onTitle={set('exp2Title')}
        onPeriod={set('exp2Period')} onLocation={set('exp2Location')} onBullets={set('exp2Bullets')}
      />
    </div>
  );
}
