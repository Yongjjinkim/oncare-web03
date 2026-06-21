"use client";

import { useState } from "react";

export default function OnStartPage() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          🩺 온케어 건강검진 분석
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          부모님의 건강검진 결과지 사진을 업로드해 주세요.
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer mb-4">
          <p className="text-sm text-gray-600">
            클릭하거나 이미지를 여기로 드래그하세요
          </p>
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
          분석 요청하기 (간호사 QC 대기)
        </button>
      </div>
    </div>
  );
}
