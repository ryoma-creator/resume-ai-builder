'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/resume-en', label: '英語 Resume' },
  { href: '/resume-ja', label: '履歴書' },
  { href: '/shokumu', label: '職務経歴書' },
  { href: '/ai-cv', label: 'AI CV生成' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="no-print"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#1a1a2e',
        borderBottom: '1px solid #333',
        padding: '12px 24px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
      }}
    >
      <Link
        href="/"
        style={{ color: '#888', fontSize: '14px', marginRight: '16px', textDecoration: 'none' }}
      >
        Resume Builder
      </Link>
      {links.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: active ? 600 : 400,
              background: active ? '#4f46e5' : 'transparent',
              color: active ? '#fff' : '#aaa',
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
