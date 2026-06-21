import Link from 'next/link'
import FAQAccordion from '@/components/common/FAQAccordion'

export const metadata = {
  title: '서비스 소개 | 온케어',
  description: 'Sign Translator — 주황불 신호를 감지하고, 해석하고, 불안 없이 일상을 유지할 수 있도록 안내합니다',
}

const trafficLightFeatures = [
  '검진 결과지 AI OCR 분석',
  'LOINC 국제 표준 코드 자동 매핑',
  '공인 학회 기준 기계적 3색 분류 (초록/주황/빨강)',
  '의료행위 없는 참고지표 시각화',
]

const onStartFeatures = [
  '1회 전담 간호사 이용자 상담',
  '건강 이력, 복약 정보, 관심 지표 수집',
  '맞춤형 OnTrack 케어 플랜 설계',
  '검진 전 복약 준비 리마인더 설정',
]

const onTrackFeatures = [
  '전담 간호사 정기 보건 상담',
  '시계열 건강정보 변화 추이 시각화',
  '매월 학회 기준 맞춤 건강관리 가이드',
  '6개월/1년 단위 검진 일정 리마인더',
  '복약 일정 관리 및 알림',
]

const onCheckFeatures = [
  'HIRA 공공데이터 기반 진료과목별 요양기관 정보 조회',
  '올바른 진료 절차 안내 (진료의뢰서, 초진 절차 등)',
  '특정 병원 추천·유도 없는 중립적 정보 제공',
  'LLM + 간호사 QC Gate 이중 검증 (HITL)',
  '불안 완화 및 치료 접근 지원',
]

const nurseRoles = [
  '공인 학회 기준 건강관리 정보 전달 (간호법 제12조 제1항 제3호)',
  '이용자 자기주도 건강관리 실천 지원',
  '의료기관 이용 행정 절차 안내',
  '표준 매뉴얼 기반 보건 교육·상담',
]

const nurseLimits = [
  '의학적 진단·처방·치료 행위 불포함',
  '특정 의료기관 추천·유도 불포함',
  '보건복지부 비의료 건강관리서비스 가이드라인 준수',
]

const faqItems = [
  {
    q: '신호등 서비스, OnStart, OnTrack, OnCheck의 차이는 무엇인가요?',
    a: '신호등 서비스는 건강검진 결과를 즉각 3색으로 분류하는 AI 서비스(4,900원/회)입니다. OnStart는 최초 1회 간호사 상담을 통해 맞춤 케어 플랜을 설계합니다(50,000원). OnTrack은 전담 간호사의 정기 동행으로 일상을 유지합니다(월 10,000원). OnCheck는 추적관찰 판정 이후 첫 치료 시작까지 집중 네비게이션을 제공합니다(월 300,000원).',
  },
  {
    q: '간호사가 진단을 해주는 건가요?',
    a: '아닙니다. 온케어의 간호사는 의학적 진단·처방·치료 행위를 하지 않습니다. 공인 학회 기준의 건강관리 정보를 전달하고, 의료기관 이용 절차를 안내하는 비의료 건강관리 서비스입니다. 보건복지부 비의료 건강관리서비스 가이드라인을 준수합니다.',
  },
  {
    q: 'OnCheck는 어떤 분께 필요한가요?',
    a: '건강검진에서 추적관찰 또는 정밀검사 필요 판정을 받은 분께 적합합니다. 추가 검사부터 확진, 첫 치료 시작까지 전담 간호사가 동행하며 필요한 의료 정보를 안내합니다. 첫 치료 이후는 연계 서비스(OnCall 등)를 준비 중입니다.',
  },
  {
    q: '개인정보(건강정보)는 안전하게 관리되나요?',
    a: '온케어는 개인정보보호법(PIPA)을 철저히 준수하며, 모든 건강 데이터는 암호화되어 안전하게 보관됩니다. 동의 없이 제3자에게 절대 제공하지 않습니다.',
  },
  {
    q: '병원 예약을 대신 해주나요?',
    a: '특정 병원을 추천하거나 예약을 대행하지 않습니다. HIRA 공공데이터 기반으로 진료과목별 요양기관 정보를 중립적으로 안내하며, 올바른 진료 절차(진료의뢰서, 초진 절차 등)를 설명해 드립니다.',
  },
]

export default function ServicePage() {
  return (
    <>
      {/* 서비스 개요 헤더 — 다크 */}
      <section className="min-h-[60vh] bg-black flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 pt-28 pb-20 text-center w-full">
          <p className="text-xs font-semibold tracking-[0.08em] uppercase text-white/50 mb-4">SOLUTION</p>
          <h1 className="text-[48px] lg:text-[64px] font-bold text-white tracking-tight leading-tight mb-5">
            Sign Translator —<br />경고 신호 해석자
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
            주황불 신호를 감지하고, 해석하고, 불안 없이 일상을 유지할 수 있도록 안내합니다
          </p>

          {/* 서비스 흐름 인포그래픽 */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-10">
            {[
              { label: '신호등 서비스', sub: 'AI 분류', highlight: true },
              null,
              { label: 'OnStart', sub: '데이터 수집', blue: true },
              null,
              { label: 'OnTrack', sub: '간호사 동행', green: true },
              null,
              { label: 'OnCheck', sub: '의료기관 안내', green: true },
              null,
              { label: '일상 유지', sub: '목표' },
            ].map((item, i) => {
              if (!item) return <span key={i} className="text-white/30 text-xl hidden md:block">→</span>
              return (
                <div key={i} className={`px-4 py-2.5 rounded-full text-center ${item.highlight ? 'bg-[#FF9500] text-black' : item.blue ? 'bg-[#0071E3]/20 border border-[#0071E3]/40 text-[#0071E3]' : item.green ? 'bg-[#34C759]/20 border border-[#34C759]/40 text-[#34C759]' : 'bg-white/10 text-white'}`}>
                  <p className="text-sm font-bold">{item.label}</p>
                  <p className="text-xs opacity-70">{item.sub}</p>
                </div>
              )
            })}
          </div>

          {/* 온케어 방향성 경고 박스 */}
          <div className="max-w-2xl mx-auto bg-white/5 border border-white/20 rounded-[14px] px-6 py-5 text-left">
            <p className="text-xs font-semibold text-[#FF9500] uppercase tracking-wider mb-2">⚠️ 온케어의 방향성</p>
            <p className="text-sm text-white/70 leading-relaxed">
              온케어는 치료 솔루션을 제공하는 서비스가 아닙니다.
              건강검진 이후 발생하는 불안을 낮추고, 치료 일정에 일반인이 쉽게 접근할 수 있도록
              정보를 제공하는 건강정보 네비게이션 서비스입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주황불 문제 — 블루오션 */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight mb-3">
              병원과 일상 관리 앱 사이의 블루오션
            </h2>
            <p className="text-lg text-[#6E6E73]">주황불 시장 선점 — 병원도, 앱도 메우지 못한 공백</p>
          </div>

          {/* 스펙트럼 바 */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-stretch gap-1 rounded-[14px] overflow-hidden h-20 mb-4">
              <div className="flex-1 bg-[#D2D2D7] flex items-center justify-center">
                <span className="text-xs font-medium text-[#6E6E73] text-center px-2">일반 건강관리 앱</span>
              </div>
              <div className="flex-[1.5] bg-[#FF9500] flex items-center justify-center relative" style={{ boxShadow: '0 0 30px rgba(255,149,0,0.4)' }}>
                <span className="text-sm font-bold text-black text-center px-2">온케어<br />주황불 영역</span>
              </div>
              <div className="flex-1 bg-[#D2D2D7] flex items-center justify-center">
                <span className="text-xs font-medium text-[#6E6E73] text-center px-2">병원 진료</span>
              </div>
            </div>
            <p className="text-center text-sm text-[#6E6E73] leading-relaxed">
              질병 이전에 개입할 수 있는 마지막 골든타임 — 온케어가 새로운 카테고리를 선언합니다
            </p>
          </div>
        </div>
      </section>

      {/* 신호등 서비스 섹션 */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold bg-[#FF9500]/10 text-[#FF9500] px-3 py-1 rounded-full tracking-wider uppercase">FREE</span>
                <span className="text-xs font-semibold bg-[#F5F5F7] text-[#6E6E73] px-3 py-1 rounded-full tracking-wider uppercase">AI-POWERED</span>
                <span className="text-xs font-semibold bg-[#F5F5F7] text-[#6E6E73] px-3 py-1 rounded-full tracking-wider uppercase">INSTANT</span>
              </div>
              <h2 className="text-3xl lg:text-[36px] font-bold text-[#1D1D1F] tracking-tight mb-2">신호등 서비스</h2>
              <p className="text-xl text-[#FF9500] font-bold mb-1">4,900원 / 회</p>
              <p className="text-[#6E6E73] text-base leading-relaxed mb-8">건강검진 결과를 즉각 초록/주황/빨강으로 분류</p>
              <ul className="flex flex-col gap-4">
                {trafficLightFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF9500] text-black text-xs font-bold shrink-0">✓</span>
                    <span className="text-[#1D1D1F] text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#FF9500]/10 to-[#FF9500]/5 rounded-[24px] aspect-video flex items-center justify-center border border-[#FF9500]/20">
              <div className="text-center p-8">
                {/* 신호등 시각화 */}
                <div className="flex flex-col items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#34C759]" />
                  <div className="w-12 h-12 rounded-full bg-[#FF9500]" style={{ boxShadow: '0 0 24px rgba(255,149,0,0.6)' }} />
                  <div className="w-10 h-10 rounded-full bg-[#FF3B30]" />
                </div>
                <p className="text-[#FF9500] font-semibold text-sm">3색 신호등 즉각 분류</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OnStart 섹션 */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] px-3 py-1 rounded-full tracking-wider uppercase">STEP 01</span>
                <span className="text-xs font-semibold bg-white text-[#6E6E73] px-3 py-1 rounded-full tracking-wider uppercase border border-[#D2D2D7]">HUMAN-POWERED</span>
                <span className="text-xs font-semibold bg-white text-[#6E6E73] px-3 py-1 rounded-full tracking-wider uppercase border border-[#D2D2D7]">INSTANT</span>
              </div>
              <h2 className="text-3xl lg:text-[36px] font-bold text-[#1D1D1F] tracking-tight mb-2">OnStart</h2>
              <p className="text-xl text-[#0071E3] font-semibold mb-1">동행을 위한 데이터 수집</p>
              <p className="text-[#FF9500] font-bold mb-1">최초 1회 50,000원</p>
              <p className="text-[#6E6E73] text-base leading-relaxed mb-8">서비스 가입 시 1회, 이용자 상담 및 맞춤 데이터 수집</p>
              <ul className="flex flex-col gap-4">
                {onStartFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0071E3] text-white text-xs font-bold shrink-0">✓</span>
                    <span className="text-[#1D1D1F] text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-[#0071E3]/10 to-[#0071E3]/5 rounded-[24px] aspect-video flex items-center justify-center border border-[#0071E3]/20">
              <div className="text-center p-8">
                <div className="text-7xl mb-3">🗂️</div>
                <p className="text-[#0071E3] font-semibold">OnStart — 맞춤 케어 플랜 설계</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OnTrack 섹션 */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold bg-[#34C759]/10 text-[#34C759] px-3 py-1 rounded-full tracking-wider uppercase">STEP 02</span>
                <span className="text-xs font-semibold bg-[#F5F5F7] text-[#6E6E73] px-3 py-1 rounded-full tracking-wider uppercase">AI+HUMAN-POWERED</span>
                <span className="text-xs font-semibold bg-[#F5F5F7] text-[#6E6E73] px-3 py-1 rounded-full tracking-wider uppercase">ONGOING</span>
              </div>
              <h2 className="text-3xl lg:text-[36px] font-bold text-[#1D1D1F] tracking-tight mb-2">OnTrack</h2>
              <p className="text-xl text-[#34C759] font-semibold mb-1">안전한 동행</p>
              <p className="text-[#FF9500] font-bold mb-1">월 10,000원 / 연 120,000원</p>
              <p className="text-[#6E6E73] text-base leading-relaxed mb-8">임상 경험 풍부한 간호사의 맞춤형 행동 가이드로 일상을 유지합니다</p>
              <ul className="flex flex-col gap-4">
                {onTrackFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#34C759] text-white text-xs font-bold shrink-0">✓</span>
                    <span className="text-[#1D1D1F] text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#34C759]/10 to-[#34C759]/5 rounded-[24px] aspect-video flex items-center justify-center border border-[#34C759]/20">
              <div className="text-center p-8">
                <div className="text-7xl mb-3">👩‍⚕️</div>
                <p className="text-[#34C759] font-semibold">OnTrack — 간호사 정기 동행</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OnCheck 섹션 */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs font-semibold bg-[#34C759]/10 text-[#34C759] px-3 py-1 rounded-full tracking-wider uppercase">STEP 03</span>
                <span className="text-xs font-semibold bg-white text-[#6E6E73] px-3 py-1 rounded-full tracking-wider uppercase border border-[#D2D2D7]">AI+HUMAN-POWERED</span>
                <span className="text-xs font-semibold bg-white text-[#6E6E73] px-3 py-1 rounded-full tracking-wider uppercase border border-[#D2D2D7]">ONGOING</span>
              </div>
              <h2 className="text-3xl lg:text-[36px] font-bold text-[#1D1D1F] tracking-tight mb-2">OnCheck</h2>
              <p className="text-xl text-[#34C759] font-semibold mb-1">건강정보 네비게이션</p>
              <p className="text-[#FF9500] font-bold mb-1">월 300,000원 (서비스 기간 3~5개월 예상)</p>
              <p className="text-[#6E6E73] text-base leading-relaxed mb-4">불안한 순간, 공공데이터 기반으로 필요한 의료 정보를 안내합니다</p>
              <div className="bg-white rounded-[12px] px-5 py-4 border border-[#D2D2D7] mb-6 text-sm text-[#6E6E73] leading-relaxed">
                건강검진에서 추적관찰 또는 정밀검사 필요 판정 후,
                추가 검사 → 확진 → 첫 치료 시작까지 동행합니다.
                첫 치료 이후는 OnCall 등 연계 서비스 준비 중입니다.
              </div>
              <ul className="flex flex-col gap-4">
                {onCheckFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#34C759] text-white text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-[#1D1D1F] text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-[#34C759]/10 to-[#34C759]/5 rounded-[24px] aspect-video flex items-center justify-center border border-[#34C759]/20">
              <div className="text-center p-8">
                <div className="text-7xl mb-3">🏥</div>
                <p className="text-[#34C759] font-semibold">OnCheck — 의료기관 정보 안내</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 전담 간호사 섹션 */}
      <section className="py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-white tracking-tight mb-3">
              전담 간호사가 함께합니다
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              임상 경험을 보유한 전담 간호사가 검진부터 치료 시작까지 함께합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 간호사 역할 */}
            <div className="bg-[#111111] border border-[#222222] rounded-[18px] p-8">
              <p className="text-sm font-semibold text-[#34C759] uppercase tracking-wider mb-5">간호사 역할 (법적 근거 기반)</p>
              <ul className="flex flex-col gap-4">
                {nurseRoles.map((role) => (
                  <li key={role} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#34C759] text-white text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-white/80 text-sm leading-relaxed">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 법적 안전장치 */}
            <div className="bg-[#111111] border border-[#333333] rounded-[18px] p-8">
              <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-wider mb-5">⚠️ 법적 안전장치</p>
              <ul className="flex flex-col gap-4">
                {nurseLimits.map((limit) => (
                  <li key={limit} className="flex items-start gap-3">
                    <span className="text-[#FF9500] text-sm mt-0.5 shrink-0">⚠</span>
                    <span className="text-white/70 text-sm leading-relaxed">{limit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-[#222222]">
                <p className="text-xs text-white/40 leading-relaxed">
                  온케어는 보건복지부 비의료 건강관리서비스 가이드라인 및
                  간호법 제12조 제1항에 근거하여 서비스를 제공합니다.
                </p>
              </div>
            </div>
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
