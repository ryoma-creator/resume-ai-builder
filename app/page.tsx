import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '60px 32px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>Resume Builder</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>左上のタブから各書類を開いてください</p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { href: '/resume-en', label: '英語 Resume', desc: 'English CV (PDF出力対応)' },
          { href: '/resume-ja', label: '履歴書', desc: '日本語 A3横（PDF出力対応）' },
          { href: '/shokumu', label: '職務経歴書', desc: 'A4 2ページ（PDF出力対応）' },
          { href: '/ai-cv', label: 'AI CV生成', desc: '求人票に合わせてAIでカスタマイズ' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            style={{
              display: 'block',
              padding: '24px 32px',
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              textDecoration: 'none',
              color: '#111',
              minWidth: '200px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>{label}</div>
            <div style={{ fontSize: '13px', color: '#888' }}>{desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
