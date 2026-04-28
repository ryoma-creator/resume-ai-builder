import EditableText from '@/components/EditableText';
import EditableBullets from '@/components/EditableBullets';
import { ResumeEnData } from './types';
import { sectionTitle } from './Skills';

interface Props {
  data: ResumeEnData;
  set: (k: keyof ResumeEnData) => (v: string) => void;
}

export default function EducationCerts({ data, set }: Props) {
  return (
    <>
      {/* 学歴 */}
      <div style={{ marginBottom: '10px' }}>
        <div style={sectionTitle}>Education</div>
        <hr style={{ border: 'none', borderTop: '1px solid #ccc', marginBottom: '5px' }} />
        <div style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <EditableText value={data.edu1} onChange={set('edu1')} style={{ fontWeight: 700, fontSize: '11pt' }} />
            <EditableText value={data.edu1Period} onChange={set('edu1Period')} style={{ fontSize: '10pt', color: '#555' }} />
          </div>
          <EditableText value={data.edu1Degree} onChange={set('edu1Degree')} style={{ fontSize: '10pt', display: 'block', color: '#444' }} />
        </div>
        <div>
          <EditableText value={data.edu2} onChange={set('edu2')} style={{ fontWeight: 600, fontSize: '10.5pt' }} />
          <br />
          <EditableText value={data.edu2Detail} onChange={set('edu2Detail')} style={{ fontSize: '10pt', color: '#555' }} />
        </div>
      </div>

      {/* 資格・実績 */}
      <div style={{ marginBottom: '10px' }}>
        <div style={sectionTitle}>Certifications & Achievements</div>
        <hr style={{ border: 'none', borderTop: '1px solid #ccc', marginBottom: '5px' }} />
        <EditableBullets value={data.certs} onChange={set('certs')} style={{ fontSize: '10pt', lineHeight: 1.6 }} />
      </div>
    </>
  );
}
