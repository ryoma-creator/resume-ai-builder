'use client';
import { useRef, useEffect, useCallback } from 'react';

interface Props {
  value: string; // 改行区切りの文字列
  onChange: (value: string) => void;
  style?: React.CSSProperties;
}

// 各箇条書きを直接クリックで編集できるリスト。削除は行を空にしてblur。
export default function EditableBullets({ value, onChange, style }: Props) {
  const containerRef = useRef<HTMLUListElement>(null);

  // valueが変わったとき（localStorage読み込み後）にDOMを更新
  useEffect(() => {
    if (!containerRef.current) return;
    const lis = Array.from(containerRef.current.querySelectorAll('li'));
    const lines = value.split('\n').filter((b) => b.trim());
    if (lis.length !== lines.length) return;
    lis.forEach((li, i) => {
      if (document.activeElement !== li) li.textContent = lines[i];
    });
  }, [value]);

  const handleBlur = useCallback(() => {
    if (!containerRef.current) return;
    const lines = Array.from(containerRef.current.querySelectorAll('li'))
      .map((li) => li.textContent ?? '')
      .filter((t) => t.trim());
    onChange(lines.join('\n'));
  }, [onChange]);

  const lines = value.split('\n').filter((b) => b.trim());

  return (
    <ul ref={containerRef} style={{ margin: 0, paddingLeft: '18px', lineHeight: 1.5, ...style }}>
      {lines.map((b, i) => (
        <li
          key={i}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
          style={{ marginBottom: '2px', outline: 'none', cursor: 'text' }}
        >
          {b}
        </li>
      ))}
    </ul>
  );
}
