import EditableText from '@/components/EditableText';
import { RirekishoData } from './types';

interface Props {
  data: RirekishoData;
  set: (k: keyof RirekishoData) => (v: string) => void;
}

const td: React.CSSProperties = { border: '1px solid #000', padding: '2mm', verticalAlign: 'top', fontSize: '9pt' };
const th: React.CSSProperties = { ...td, background: '#f5f5f5', fontWeight: 'bold', textAlign: 'center', width: '15%', fontSize: '8pt' };

export default function InfoTable({ data, set }: Props) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '3mm' }}>
      <tbody>
        <tr>
          <td style={th}>ふりがな</td>
          <td style={{ ...td, width: '35%' }}><EditableText value={data.nameFurigana} onChange={set('nameFurigana')} /></td>
          <td style={th}>※性別</td>
          <td style={{ ...td, width: '20%' }}><EditableText value={data.gender} onChange={set('gender')} /></td>
          <td rowSpan={5} style={{ ...td, width: '35mm', textAlign: 'center', verticalAlign: 'middle', padding: 0 }}>
            <img
              src="https://res.cloudinary.com/dptxzcxot/image/upload/v1740218108/PROFILE_PIC_ORIGINAL__pnllgi.png"
              alt="証明写真"
              style={{ width: '100%', height: '40mm', objectFit: 'cover' }}
            />
          </td>
        </tr>
        <tr>
          <td style={th}>氏　名</td>
          <td style={{ ...td, fontSize: '12pt', fontWeight: 'bold' }}>
            <EditableText value={data.name} onChange={set('name')} />
          </td>
          <td colSpan={2} style={{ ...td, fontSize: '7pt', color: '#666' }}>※記載は任意です</td>
        </tr>
        <tr>
          <td style={th}>生年月日</td>
          <td colSpan={3} style={td}><EditableText value={data.dob} onChange={set('dob')} /></td>
        </tr>
        <tr>
          <td style={th}>ふりがな</td>
          <td colSpan={3} style={{ ...td, fontSize: '8pt' }}>
            <EditableText value={data.addressFurigana} onChange={set('addressFurigana')} />
          </td>
        </tr>
        <tr>
          <td style={th}>現住所</td>
          <td colSpan={3} style={{ ...td, fontSize: '8pt' }}>
            <EditableText value={data.address} onChange={set('address')} />
          </td>
        </tr>
        <tr>
          <td style={th}>電話</td>
          <td style={td}><EditableText value={data.phone} onChange={set('phone')} /></td>
          <td colSpan={3} style={{ ...td, fontSize: '8pt', color: '#666' }}>（現住所以外に連絡希望の場合のみ）</td>
        </tr>
        <tr>
          <td style={th}>E-mail</td>
          <td colSpan={4} style={td}><EditableText value={data.email} onChange={set('email')} /></td>
        </tr>
      </tbody>
    </table>
  );
}
