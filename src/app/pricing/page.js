'use client'

import { useState } from 'react'
import Link from 'next/link'
import FAQAccordion from '@/components/common/FAQAccordion'

const b2bTiers = [
  { size: '소규모', range: '10~50인', feature: '기본 헬스케어 패키지' },
  { size: '중규모', range: '51~200인', feature: '맞춤형 건강관리 솔루션' },
  { size: '대규모', range: '200인 이상', feature: '엔터프라이즈 전용 플랜' },
]

const comparisonRows = [
  { feature: 'AI 결과 분류 (신호등)', traffic: '✓', onstart: '—', ontrack: '✓ 포함', oncheck: '✓ 포함' },
  { feature: '1회 간호사 상담', traffic: '—', onstart: '✓', ontrack: '—', oncheck: '✓' },
  { feature: '전담 간호사 배정', traffic: '—', onstart: '—', ontrack: '✓', oncheck: '✓' },
  { feature: '정기 보건 상담', traffic: '—', onstart: '—', ontrack: '✓', oncheck: '✓' },
  { feature: '시계열 데이터 시각화', traffic: '—', onstart: '—', ontrack: '✓', oncheck: '✓' },
  { feature: '월간 건강관리 가이드', traffic: '—', onstart: '—', ontrack: '✓', oncheck: '✓' },
  { feature: '복약 일정 관리', traffic: '—', onstart: '—', ontrack: '✓', oncheck: '✓' },
  { feature: 'HIRA 의료기관 정보 조회', traffic: '—', onstart: '—', ontrack: '—', oncheck: '✓' },
  { feature: '치료 접근 지원', traffic: '—', onstart: '—', ontrack: '—', oncheck: '✓' },
  { feature: 'QC Gate 이중 검증', traffic: '—', onstart: '—', ontrack: '—', oncheck: '✓' },
]

const faqItems = [
  {
    q: '신호등 서비스와 OnStart는 별도로 구매해야 하나요?',
    a: '네, 신호등 서비스(4,900원/회)와 OnStart(최초 1회 50,000원)는 각각 별도로 이용하실 수 있습니다. 온케어를 처음 시작하신다면 OnStart로 전담 간호사와 상담 후 케어 플랜을 설계하는 것을 권장합니다.',
  },
  {
    q: 'OnCheck는 얼마나 이용하게 되나요?',
    a: '추적관찰 판정 시점부터 첫 치료 시작까지 보통 3~5개월이 소요됩니다. 상황에 따라 기간이 달라질 수 있으며, 첫 치료 이후는 OnCall 등 연계 서비스를 준비 중입니다.',
  },
  {
    q: '언제든지 해지할 수 있나요?',
    a: '네, OnTrack은 언제든지 해지 가능합니다. 해지 후에도 남은 구독 기간 동안은 서비스를 계속 이용하실 수 있습니다.',
  },
  {
    q: '결제 수단은 무엇을 지원하나요?',
    a: '신용카드, 체크카드(국내 모든 카드사), 계좌이체를 지원합니다. 기업 고객의 경우 세금계산서 발행도 가능합니다.',
  },
  {
    q: '환불 정책은 어떻게 되나요?',
    a: '결제 후 7일 이내에는 전액 환불이 가능합니다. 7일 이후에는 남은 기간에 대해 비례 환불됩니다. 자세한 내용은 이용약관을 참고해주세요.',
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
      {/* 헤더 섹션 */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-[52px] lg:text-[56px] font-bold text-[#1D1D1F] tracking-tight leading-tight mb-4">
            나에게 맞는 플랜을<br className="md:hidden" /> 선택하세요
          </h1>
          <p className="text-lg text-[#6E6E73] mb-8">건강검진 이후, 불안 없이 일상을 유지하는 온케어의 4단계 서비스</p>

          {/* 월간/연간 토글 (OnTrack 해당) */}
          <div className="inline-flex items-center bg-[#F5F5F7] rounded-full p-1 gap-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isYearly ? 'bg-white text-[#1D1D1F] shadow-sm' : 'text-[#6E6E73]'
              }`}
            >
              월간
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isYearly ? 'bg-white text-[#1D1D1F] shadow-sm' : 'text-[#6E6E73]'
              }`}
            >
              연간
              <span className="text-xs text-[#34C759] font-semibold">OnTrack 할인</span>
            </button>
          </div>
        </div>
      </section>

      {/* 요금제 카드 4개 */}
      <section className="pb-20 lg:pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* 신호등 서비스 */}
            <div className="rounded-[18px] p-7 flex flex-col border border-[#D2D2D7] bg-white">
              <div className="mb-4">
                <span className="text-xs font-semibold bg-[#FF9500]/10 text-[#FF9500] px-3 py-1 rounded-full tracking-wider uppercase">AI-POWERED</span>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">신호등 서비스</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold text-[#1D1D1F]">4,900</span>
                  <span className="text-sm text-[#6E6E73] mb-1">원 / 1회</span>
                </div>
              </div>
              <p className="text-sm text-[#6E6E73] mb-5 leading-relaxed flex-1">건강검진 결과를 즉각 3색 신호등으로 분류</p>
              <ul className="flex flex-col gap-2.5 mb-6">
                {['검진 결과지 AI OCR 분석', 'LOINC 국제 표준 코드 매핑', '공인 학회 기준 초록/주황/빨강 분류', '참고지표 시각화 화면 제공'].map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-[#34C759] text-sm">✓</span>
                    <span className="text-xs text-[#1D1D1F]">{feat}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#6E6E73] mb-5 bg-[#F5F5F7] rounded-xl px-3 py-2">의료적 진단이 아닌 참고지표 표시 서비스</p>
              <Link
                href="/auth/signup"
                className="w-full flex items-center justify-center py-3 rounded-full text-sm font-semibold transition-all duration-200 border border-[#1D1D1F] text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white"
              >
                지금 확인하기
              </Link>
            </div>

            {/* OnStart */}
            <div className="rounded-[18px] p-7 flex flex-col border border-[#D2D2D7] bg-white">
              <div className="mb-4">
                <span className="text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] px-3 py-1 rounded-full tracking-wider uppercase">STEP 01 · HUMAN-POWERED</span>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">OnStart</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold text-[#1D1D1F]">50,000</span>
                  <span className="text-sm text-[#6E6E73] mb-1">원 / 최초 1회</span>
                </div>
              </div>
              <p className="text-sm text-[#6E6E73] mb-5 leading-relaxed flex-1">동행을 위한 데이터 수집 — 전담 간호사 1회 상담</p>
              <ul className="flex flex-col gap-2.5 mb-6">
                {['1회 전담 간호사 이용자 상담', '건강 이력·복약 정보 수집', '맞춤형 케어 플랜 설계', '검진 전 복약 준비 리마인더 설정', 'OnTrack 연계 가능'].map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-[#34C759] text-sm">✓</span>
                    <span className="text-xs text-[#1D1D1F]">{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/signup"
                className="w-full flex items-center justify-center py-3 rounded-full text-sm font-semibold transition-all duration-200 border border-[#1D1D1F] text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white mt-auto"
              >
                시작하기
              </Link>
            </div>

            {/* OnTrack ⭐ 추천 */}
            <div className="rounded-[18px] p-7 flex flex-col relative border-2 border-[#0071E3] bg-white shadow-[0_8px_40px_rgba(0,113,227,0.2)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="text-xs font-semibold bg-[#0071E3] text-white px-4 py-1.5 rounded-full">추천</span>
              </div>
              <div className="mb-4">
                <span className="text-xs font-semibold bg-[#34C759]/10 text-[#34C759] px-3 py-1 rounded-full tracking-wider uppercase">STEP 02 · AI+HUMAN · ONGOING</span>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">OnTrack</h3>
                {isYearly ? (
                  <div>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-bold text-[#1D1D1F]">10,000</span>
                      <span className="text-sm text-[#6E6E73] mb-1">원/월</span>
                    </div>
                    <p className="text-xs text-[#6E6E73] mt-1">연 120,000원 청구</p>
                  </div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-[#1D1D1F]">10,000</span>
                    <span className="text-sm text-[#6E6E73] mb-1">원/월</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-[#6E6E73] mb-5 leading-relaxed flex-1">안전한 동행 — 전담 간호사와 지속적 건강관리</p>
              <ul className="flex flex-col gap-2.5 mb-6">
                {['신호등 서비스 포함', '전담 간호사 정기 보건 상담', '시계열 건강정보 변화 추이 시각화', '매월 학회 기준 맞춤 건강관리 가이드', '6개월/1년 단위 검진 일정 리마인더', '복약 일정 관리 및 알림'].map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-[#34C759] text-sm">✓</span>
                    <span className="text-xs text-[#1D1D1F]">{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/signup"
                className="w-full flex items-center justify-center py-3 rounded-full text-sm font-semibold transition-all duration-200 bg-[#0071E3] text-white hover:opacity-85 mt-auto"
              >
                시작하기
              </Link>
            </div>

            {/* OnCheck */}
            <div className="rounded-[18px] p-7 flex flex-col bg-black text-white">
              <div className="mb-4">
                <span className="text-xs font-semibold bg-white/10 text-white/80 px-3 py-1 rounded-full tracking-wider uppercase">STEP 03 · AI+HUMAN · ONGOING</span>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-3">OnCheck</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold text-white">300,000</span>
                  <span className="text-sm text-white/60 mb-1">원/월</span>
                </div>
                <p className="text-xs text-white/50 mt-1">서비스 기간 3~5개월 예상</p>
              </div>
              <p className="text-sm text-white/60 mb-5 leading-relaxed flex-1">건강정보 네비게이션 — 추적관찰 판정부터 첫 치료까지</p>
              <ul className="flex flex-col gap-2.5 mb-5">
                {['OnTrack 모든 기능 포함', 'HIRA 공공데이터 기반 진료과목별 의료기관 정보 조회', '올바른 진료 절차 안내 (진료의뢰서, 초진 절차 등)', 'LLM + 간호사 QC Gate 이중 검증', '치료 시작까지 전담 간호사 집중 동행'].map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-[#34C759] text-sm">✓</span>
                    <span className="text-xs text-white/80">{feat}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/40 mb-5">첫 치료 이후 서비스는 OnCall 등 연계 서비스 준비 중</p>
              <Link
                href="/auth/signup"
                className="w-full flex items-center justify-center py-3 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-black hover:opacity-90 mt-auto"
              >
                시작하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 흐름 안내 */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight">
              온케어와 함께하는 건강관리 여정
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 mb-10">
            {[
              { step: '01', name: '신호등 서비스', desc: '검진 결과 즉각 확인', color: '#FF9500' },
              { step: '02', name: 'OnStart', desc: '전담 간호사와 첫 만남, 데이터 수집', color: '#0071E3' },
              { step: '03', name: 'OnTrack', desc: '지속적 동행, 일상 유지', color: '#34C759' },
              { step: '04', name: 'OnCheck', desc: '추적관찰·정밀검사 필요 시, 치료 접근 지원', color: '#34C759' },
            ].map((item, i) => (
              <div key={item.step} className="flex md:flex-col md:flex-1 items-center md:items-start gap-4 md:gap-0">
                <div className="flex md:flex-row items-center gap-3 w-full md:mb-5">
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: item.color }}
                  >
                    {item.step}
                  </div>
                  {i < 3 && <div className="hidden md:block flex-1 h-px bg-[#D2D2D7]" />}
                </div>
                <div>
                  <p className="font-semibold text-[#1D1D1F] text-sm mb-0.5">{item.name}</p>
                  <p className="text-xs text-[#6E6E73]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#6E6E73] max-w-2xl mx-auto leading-relaxed">
            온케어는 치료를 대체하지 않습니다. 치료 과정이 불안하지 않도록, 일상을 유지할 수 있도록 함께합니다.
          </p>
        </div>
      </section>

      {/* 기능 비교표 */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1D1D1F] tracking-tight">플랜별 기능 비교</h2>
          </div>
          <div className="bg-white rounded-[18px] overflow-auto border border-[#D2D2D7]">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#D2D2D7]">
                  <th className="text-left py-4 px-6 text-sm font-medium text-[#6E6E73]">기능</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-[#FF9500]">신호등</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-[#0071E3]">OnStart</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-[#34C759]">OnTrack</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-[#1D1D1F]">OnCheck</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F7]/50'}>
                    <td className="py-4 px-6 text-sm text-[#1D1D1F] font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-sm text-[#FF9500]">{row.traffic}</td>
                    <td className="py-4 px-4 text-center text-sm text-[#0071E3]">{row.onstart}</td>
                    <td className="py-4 px-4 text-center text-sm text-[#34C759]">{row.ontrack}</td>
                    <td className="py-4 px-4 text-center text-sm text-[#1D1D1F] font-medium">{row.oncheck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* B2B 요금제 섹션 */}
      <section className="py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-white tracking-tight mb-4">
              기업 고객을 위한 맞춤 플랜
            </h2>
            <p className="text-lg text-white/60">임직원 건강검진 사후 관리를 일괄 제공합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {b2bTiers.map((tier) => (
              <div key={tier.size} className="bg-[#111111] border border-[#222222] rounded-[18px] p-8 hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-white mb-1">{tier.size}</h3>
                <p className="text-[#0071E3] text-sm font-medium mb-4">{tier.range}</p>
                <p className="text-[#6E6E73] text-sm">{tier.feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0071E3] text-white px-8 py-4 rounded-full text-base font-medium hover:opacity-85 transition-all duration-200"
            >
              기업 요금 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1D1D1F] tracking-tight">자주 묻는 질문</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  )
}
