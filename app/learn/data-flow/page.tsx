"use client";

import { useState } from "react";
import Link from "next/link";
import DiagramSvg from "./DiagramSvg";
import StepPanel, { STEPS } from "./StepPanel";

export default function DataFlowPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  // アクティブなステップで光らせるノードを取得
  const activeStep_ = STEPS.find((s) => s.id === activeStep);
  const activeNodes = activeStep_ ? [activeStep_.from, activeStep_.to] : [];

  // 自動再生（1.8秒ごとにステップを進める）
  const handlePlay = () => {
    if (playing) return;
    setPlaying(true);
    setActiveStep(null);
    let i = 0;
    const interval = setInterval(() => {
      setActiveStep(STEPS[i].id);
      i++;
      if (i >= STEPS.length) {
        clearInterval(interval);
        setPlaying(false);
      }
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 max-w-3xl mx-auto">
      {/* ナビ */}
      <Link href="/learn" className="text-gray-500 text-sm hover:text-gray-300 mb-6 inline-block">
        ← トピック一覧
      </Link>

      <h1 className="text-2xl font-bold mb-1">データの流れ</h1>
      <p className="text-gray-400 text-sm mb-6">
        ボタンを押したとき、裏で何が起きているか
      </p>

      {/* 図 */}
      <div className="bg-gray-900 rounded-2xl p-4 mb-5">
        <DiagramSvg activeStep={activeStep} activeNodes={activeNodes} />
      </div>

      {/* ステップ選択 */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={handlePlay}
          disabled={playing}
          className="px-4 py-2 bg-white text-gray-900 rounded-lg font-bold text-sm disabled:opacity-40 hover:bg-gray-100"
        >
          ▶ 再生
        </button>
        {STEPS.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeStep === step.id
                ? `${step.color} text-white`
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      {/* 詳細パネル（説明 + コード） */}
      <StepPanel activeStep={activeStep} />
    </div>
  );
}
