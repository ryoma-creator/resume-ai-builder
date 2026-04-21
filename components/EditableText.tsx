'use client';
import { useRef, useEffect } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
  multiline?: boolean;
  className?: string;
}

// contentEditableのラッパー。フォーカス外れたら onChange を呼ぶ。
export default function EditableText({ value, onChange, style, multiline, className }: Props) {
  const ref = useRef<HTMLElement>(null);

  // 外部から value が変わったとき（localStorage読込後など）にDOMを更新
  useEffect(() => {
    if (ref.current && document.activeElement !== ref.current) {
      ref.current.textContent = value;
    }
  }, [value]);

  const sharedProps = {
    contentEditable: true as const,
    suppressContentEditableWarning: true,
    onBlur: (e: React.FocusEvent<HTMLElement>) => onChange(e.currentTarget.textContent ?? ''),
    style: { outline: 'none', cursor: 'text', minWidth: '1em', ...style },
    className,
  };

  return multiline
    ? <div ref={ref as React.RefObject<HTMLDivElement>} {...sharedProps} />
    : <span ref={ref as React.RefObject<HTMLSpanElement>} {...sharedProps} />;
}
