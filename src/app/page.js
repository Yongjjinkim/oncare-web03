import Link from 'next/link'
import CounterSection from '@/components/home/CounterSection'

export default function HomePage() {
  return (
    <>
      {/* Hero 섹션 */}
      <section className="min-h-screen bg-gradient-to-br from-black via-[#0A1628] to-[#0D2952] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF9500] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0071E3] rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-20 pt-20 pb-20 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 mb-8">
            <span className="w-2 h-2 bg-[#FF9500] rounded-full animate-pulse" />
            ✦ HEALTH CARE NAVIGATION
          </div>
          <h1 className="text-[52px] md:text-[64px] lg:text-[72px] font-bold text-white leading-tight tracking-[-1px] mb-4">
            모두가 무시하던<br />
            <span className="text-[#FF9500]">'주황불'의 순간</span>을 해석하다
          </h1>
          <p className="text-lg md:text-xl text-[#FF9500] font-semibold mb-3">
            Sign Translator — 경고 신호 해석자
          </p>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            검진 결과부터 후속 케어까지,<br className="hidden md:block" />
            전담 간호사가 함께하는 스마트 헬스케어
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0071E3] text-white px-8 py-4 rounded-full text-base font-medium hover:opacity-85 transition-all duration-200"
            >
              서비스 시작하기
            </Link>
            <Link
              href="/service"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-all duration-200"
            >
              더 알아보기
            </Link>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
            <span className="text-white/40 text-xs">스크롤</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white/40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* PROBLEM 01 — 이분법 구조 */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-3">PROBLEM 01</p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight leading-snug max-w-3xl mx-auto mb-8">
              우리는 건강을 '정상' 아니면 '질병'이라는<br />이분법 구조로만 이해해 왔습니다
            </h2>
            <div className="max-w-xl mx-auto space-y-3 mb-14">
              <p className="text-lg text-[#1D1D1F] italic">
                "몸은 초록불에서 갑자기 빨간불로 바뀌지 않습니다."
              </p>
              <p className="text-lg text-[#1D1D1F] italic">
                "그 사이에는 반드시 <span className="text-[#FF9500] font-semibold not-italic">주황불의 경고 신호</span>가 존재합니다."
              </p>
            </div>
          </div>

          {/* 신호등 시각화 */}
          <div className="flex items-center justify-center gap-6 md:gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#34C759]" />
              <div className="text-center">
                <p className="font-semibold text-[#1D1D1F] text-sm">초록불</p>
                <p className="text-[#6E6E73] text-xs">정상</p>
              </div>
            </div>
            <div className="w-10 md:w-16 h-px bg-[#D2D2D7]" />
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-16 h-16 rounded-full bg-[#FF9500]"
                style={{ boxShadow: '0 0 32px rgba(255,149,0,0.6), 0 0 64px rgba(255,149,0,0.3)' }}
              />
              <div className="text-center">
                <p className="font-bold text-[#FF9500] text-base">주황불</p>
                <p className="text-[#FF9500]/70 text-xs font-medium">경고 신호 ← 온케어</p>
              </div>
            </div>
            <div className="w-10 md:w-16 h-px bg-[#D2D2D7]" />
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF3B30]" />
              <div className="text-center">
                <p className="font-semibold text-[#1D1D1F] text-sm">빨간불</p>
                <p className="text-[#6E6E73] text-xs">질병</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM 02 — 극단의 반응 */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-3">PROBLEM 02</p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight leading-snug mb-3">
              인간은 경고 신호 앞에서 항상 극단으로 갑니다
            </h2>
            <p className="text-lg text-[#6E6E73]">누구도 그 '사이'를 설명해주지 않습니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-[#F5F5F7] rounded-[18px] p-8 border border-[#D2D2D7]">
              <div className="text-3xl mb-4">😶</div>
              <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">방치</h3>
              <p className="text-[#6E6E73] text-sm leading-relaxed">"괜찮겠지" → 위험 가속</p>
            </div>
            <div className="bg-black rounded-[18px] p-8 relative overflow-hidden flex flex-col justify-center items-center text-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9500] to-[#0071E3] blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.08em] uppercase text-white/50 mb-2">골든타임 소실</p>
                <h3 className="text-lg font-bold text-white mb-1">해석의 공백</h3>
                <p className="text-white/50 text-sm">아무도 채우지 않은 구간</p>
              </div>
            </div>
            <div className="bg-[#F5F5F7] rounded-[18px] p-8 border border-[#D2D2D7]">
              <div className="text-3xl mb-4">😰</div>
              <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">과잉 불안</h3>
              <p className="text-[#6E6E73] text-sm leading-relaxed">"큰 병인가?" → 의료 쇼핑</p>
            </div>
          </div>
          <p className="text-center text-sm text-[#6E6E73]">* 온케어는 이 공백을 채웁니다</p>
        </div>
      </section>

      {/* SOLUTION — Sign Translator */}
      <section className="py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-white/50 mb-3">SOLUTION</p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-white tracking-tight mb-3">
              몸의 위험 신호를 해석하는 독창적 가치
            </h2>
            <p className="text-xl text-[#FF9500] font-semibold">Sign Translator</p>
          </div>

          {/* 3단계 흐름 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 relative">
            <div className="bg-[#111111] border border-[#222222] rounded-[18px] p-8 text-center relative">
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-white/40 mb-3">INPUT</p>
              <h3 className="text-lg font-semibold text-white mb-2">복잡한 의학 데이터</h3>
              <p className="text-sm text-[#6E6E73]">검진 결과 · 수치 · 의학 용어</p>
              <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 text-[#FF9500] text-2xl z-10">→</div>
            </div>
            <div className="rounded-[18px] p-8 text-center relative" style={{ background: 'linear-gradient(135deg, #1a0f00 0%, #331e00 100%)', border: '1px solid rgba(255,149,0,0.3)' }}>
              <div className="w-10 h-10 rounded-full bg-[#FF9500] mx-auto mb-3 flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(255,149,0,0.5)' }}>
                <span className="text-black font-bold text-sm">AI</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#FF9500]/70 mb-3">TRANSLATE</p>
              <h3 className="text-lg font-semibold text-[#FF9500] mb-2">OnCare Sign Translator</h3>
              <p className="text-sm text-[#6E6E73]">AI 분석 + 간호사</p>
              <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 text-[#FF9500] text-2xl z-10">→</div>
            </div>
            <div className="bg-[#111111] border border-[#222222] rounded-[18px] p-8 text-center">
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-white/40 mb-3">OUTPUT</p>
              <h3 className="text-lg font-semibold text-white mb-2">직관적 행동 가이드</h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed">지금 당장 해야 할 것<br />주의해야 할 신호<br />다음 단계 행동 계획</p>
            </div>
          </div>

          {/* 3개 가치 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '🔍', title: '건강검진 수치의 진짜 의미 발견', desc: '오늘 실천할 수 있는 맞춤형 건강관리 제공' },
              { icon: '📊', title: '건강 히스토리 관리', desc: '변화 추이 축적 및 분석' },
              { icon: '🏥', title: '위기 순간의 건강 컨트롤 타워', desc: '가장 불안한 순간을 함께' },
            ].map((v) => (
              <div key={v.title} className="bg-[#111111] border border-[#222222] rounded-[18px] p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICE MODEL — OnStart + OnTrack */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-3">CORE SERVICE MODEL</p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight mb-3">
              AI 기술과 휴먼 터치가 결합된 하이브리드 솔루션
            </h2>
            <p className="text-lg text-[#6E6E73]">AI의 정밀한 통역 × 전문 간호사의 맞춤형 동행</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {/* STEP 01 — 신호등 서비스 */}
            <div className="bg-white rounded-[18px] p-7 border border-[#D2D2D7] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs font-semibold bg-[#FF9500]/10 text-[#FF9500] px-2.5 py-1 rounded-full tracking-wider uppercase">AI-POWERED</span>
                <span className="text-xs font-semibold bg-[#F5F5F7] text-[#6E6E73] px-2.5 py-1 rounded-full tracking-wider uppercase">INSTANT</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-1.5">STEP 01</p>
              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">신호등 서비스</h3>
              <p className="text-[#FF9500] text-sm font-semibold mb-3">건강검진 결과 즉각 신호등 분류</p>
              <p className="text-xs text-[#6E6E73] leading-relaxed">초록/주황/빨강 3단계 직관적 시각화</p>
            </div>
            {/* STEP 02 — OnStart */}
            <div className="bg-white rounded-[18px] p-7 border border-[#D2D2D7] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3] px-2.5 py-1 rounded-full tracking-wider uppercase">HUMAN-POWERED</span>
                <span className="text-xs font-semibold bg-[#F5F5F7] text-[#6E6E73] px-2.5 py-1 rounded-full tracking-wider uppercase">INSTANT</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-1.5">STEP 02</p>
              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">OnStart</h3>
              <p className="text-[#0071E3] text-sm font-semibold mb-3">동행을 위한 데이터 수집</p>
              <p className="text-xs text-[#6E6E73] leading-relaxed">맞춤형 케어 플랜 설계를 위한 기초 정보 구성</p>
            </div>
            {/* STEP 03 — OnTrack */}
            <div className="bg-white rounded-[18px] p-7 border border-[#D2D2D7] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs font-semibold bg-[#34C759]/10 text-[#34C759] px-2.5 py-1 rounded-full tracking-wider uppercase">AI+HUMAN</span>
                <span className="text-xs font-semibold bg-[#F5F5F7] text-[#6E6E73] px-2.5 py-1 rounded-full tracking-wider uppercase">ONGOING</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-1.5">STEP 03</p>
              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">OnTrack</h3>
              <p className="text-[#34C759] text-sm font-semibold mb-3">안전한 동행</p>
              <p className="text-xs text-[#6E6E73] leading-relaxed">정기 구독 관리 → 일상 유지</p>
            </div>
            {/* STEP 04 — OnCheck */}
            <div className="bg-white rounded-[18px] p-7 border border-[#D2D2D7] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs font-semibold bg-[#34C759]/10 text-[#34C759] px-2.5 py-1 rounded-full tracking-wider uppercase">AI+HUMAN</span>
                <span className="text-xs font-semibold bg-[#F5F5F7] text-[#6E6E73] px-2.5 py-1 rounded-full tracking-wider uppercase">ONGOING</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-1.5">STEP 04</p>
              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">OnCheck</h3>
              <p className="text-[#34C759] text-sm font-semibold mb-3">건강정보 네비게이션</p>
              <p className="text-xs text-[#6E6E73] leading-relaxed">불안 없는 치료 접근, 일상 유지</p>
            </div>
          </div>
          <p className="text-center text-sm text-[#6E6E73]">기술(AI) + 인간(전문 간호사) — 가장 신뢰할 수 있는 케어</p>
        </div>
      </section>

      {/* 신뢰 지표 섹션 */}
      <CounterSection />

      {/* 최종 CTA 섹션 */}
      <section className="py-20 lg:py-[120px] bg-[#0071E3]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl lg:text-[48px] font-bold text-white tracking-tight mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-white/80 mb-10">
            첫 달 무료로 온케어를 경험해보세요
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center bg-white text-[#0071E3] px-10 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-all duration-200 shadow-lg"
          >
            무료로 시작하기
          </Link>
        </div>
      </section>
    </>
  )
}
