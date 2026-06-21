'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const coreValues = [
  { icon: '🔍', title: '해석 (Translate)', desc: '복잡한 의학 신호를 명확한 행동 가이드로' },
  { icon: '🤝', title: '동행 (Accompany)', desc: '환자와 의료 사이를 연결하는 메디컬 네비게이터' },
  { icon: '💡', title: '혁신 (Innovate)', desc: 'AI × 전문 간호사 하이브리드 케어' },
]

const marketStats = [
  { value: '61%', label: '건강검진 유소견자 비율' },
  { value: '42%', label: '사후관리 하지 않는 유소견자 비율 (온케어의 타겟)' },
  { value: '5건', label: '발명특허출원 (2026년 1~4월)' },
  { value: '6건', label: '상표출원 (2025년 9월)' },
]

const roadmapPhases = [
  {
    phase: 'Phase 1',
    market: 'SOM',
    subtitle: '거점 시장 (현재)',
    services: '신호등 서비스 + OnStart + OnTrack',
    target: '건강검진 후 질환의심·추적관찰 수검자',
    action: '검진 결과 해석 + 불안 완화 + 일상 유지 지원',
    current: true,
    color: '#FF9500',
  },
  {
    phase: 'Phase 2',
    market: 'SAM',
    subtitle: '유효 시장 (확장)',
    services: 'OnCheck 추가',
    target: '유병 의심자 의료기관 접근 지원',
    action: '추적관찰 → 확진 → 첫 치료까지 동행',
    current: false,
    color: '#0071E3',
  },
  {
    phase: 'Phase 3',
    market: 'TAM',
    subtitle: '전체 시장 (목표)',
    services: 'OnCall + OnVisit + OnWalk',
    target: '유질환자 홈케어 및 만성질환 관리 시장',
    action: '디지털 헬스케어 컨트롤 타워 — 병원 동행 + 전문가 상시 연결 + 가정 방문',
    current: false,
    color: '#34C759',
  },
]

const businessModels = [
  {
    type: 'B2C',
    badge: '안정적 반복 수익 (MRR)',
    badgeColor: '#FF9500',
    title: '개인 이용자 대상',
    items: [
      { label: '신호등 서비스', desc: '건당 4,900원 — AI 기반 즉각 결과 분류' },
      { label: 'OnStart', desc: '최초 1회 50,000원 — 전담 간호사 상담' },
      { label: 'OnTrack', desc: '월 10,000원 / 연 120,000원 — 정기 동행' },
      { label: 'OnCheck', desc: '월 300,000원 (3~5개월) — 집중 네비게이션' },
    ],
  },
  {
    type: 'B2B',
    badge: '폭발적 성장 레버 (ARR)',
    badgeColor: '#0071E3',
    title: '기업 임직원 대상',
    items: [
      { label: '건강검진 연계 패키지', desc: '사후 관리 일괄 제공 기업 계약' },
      { label: '연간 단체 구독 계약', desc: '복지 프로그램 통합 파트너십' },
    ],
  },
]

const patents = [
  { type: '발명 특허', count: 5, period: '2026년 1~4월 출원', icon: '🔬' },
  { type: '등록 상표', count: 6, period: '2025년 9월 등록', icon: '™' },
]

const teamMembers = [
  { role: '대표 / 기획 리드', name: '미공개', bg: '#FF9500' },
  { role: '임상 간호사', name: '미공개', bg: '#34C759' },
  { role: '임상 간호사', name: '미공개', bg: '#34C759' },
  { role: '임상 간호사', name: '미공개', bg: '#34C759' },
  { role: '임상 간호사', name: '미공개', bg: '#34C759' },
  { role: 'IT / 개발 리드', name: '미공개', bg: '#6E6E73' },
  { role: '비즈니스 리드', name: '미공개', bg: '#6E6E73' },
  { role: '운영 리드', name: '미공개', bg: '#6E6E73' },
]

function IRDownloadForm() {
  const [form, setForm] = useState({ name: '', organization: '', email: '', purpose: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.purpose) {
      setError('필수 항목을 모두 입력해주세요.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('올바른 이메일을 입력해주세요.')
      return
    }
    setError('')
    setStatus('loading')
    try {
      const { error: supabaseError } = await supabase.from('ir_downloads').insert([
        {
          name: form.name.trim(),
          organization: form.organization.trim() || null,
          email: form.email.trim(),
          purpose: form.purpose,
        },
      ])
      if (supabaseError) throw supabaseError
      setStatus('success')
    } catch {
      setError('요청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">요청이 접수되었습니다</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          입력하신 이메일로 IR 자료를 발송해드리겠습니다.<br />
          영업일 기준 1~2일 이내 연락드립니다.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">이름 *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/30 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">소속 기관</label>
          <input
            type="text"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="회사명 또는 기관명"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/30 transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">이메일 *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@company.com"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/30 transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">문의 목적 *</label>
        <select
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/30 transition-all appearance-none"
        >
          <option value="" className="text-black">선택해주세요</option>
          <option value="investment" className="text-black">투자 검토</option>
          <option value="partnership" className="text-black">파트너십</option>
          <option value="other" className="text-black">기타</option>
        </select>
      </div>
      {error && <p className="text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3">{error}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-[#0071E3] text-white rounded-full text-sm font-semibold hover:opacity-85 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            처리 중...
          </>
        ) : '자료 요청하기'}
      </button>
    </form>
  )
}

export default function IRPage() {
  return (
    <>
      {/* 헤더 섹션 */}
      <section className="min-h-[60vh] bg-black flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 pt-24 pb-20 text-center w-full">
          <p className="text-xs font-semibold tracking-[0.08em] uppercase text-white/50 mb-4">HEALTH CARE NAVIGATION</p>
          <h1 className="text-[52px] lg:text-[64px] font-bold text-white tracking-tight leading-tight mb-6">
            헬스케어의 미래를<br />함께 만들어갑니다
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            온케어는 대한민국 헬스케어 내비게이션의 새로운 기준을 세웁니다
          </p>
        </div>
      </section>

      {/* 미션 & 비전 */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#F5F5F7] rounded-[18px] p-10">
              <p className="text-sm font-semibold text-[#FF9500] uppercase tracking-wider mb-3">Mission</p>
              <p className="text-2xl font-semibold text-[#1D1D1F] leading-snug">
                건강검진 이후 누구나 불안 없이 일상을 유지할 수 있는 세상
              </p>
            </div>
            <div className="bg-[#F5F5F7] rounded-[18px] p-10">
              <p className="text-sm font-semibold text-[#0071E3] uppercase tracking-wider mb-3">Vision</p>
              <p className="text-2xl font-semibold text-[#1D1D1F] leading-snug">
                대한민국 No.1 헬스케어 신호 해석 플랫폼
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-white border border-[#D2D2D7] rounded-[18px] p-8 hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">{v.title}</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시장 기회 — MARKET OPPORTUNITY */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-3">MARKET OPPORTUNITY</p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight mb-3">
              병원과 일상 관리 앱 사이의 블루오션,<br />주황불 시장 선점
            </h2>
          </div>

          {/* TAM/SAM/SOM 동심원 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="relative flex items-center justify-center shrink-0" style={{ width: 320, height: 320 }}>
              {/* TAM — 가장 큰 원 */}
              <div className="absolute inset-0 rounded-full bg-[#34C759]/10 border border-[#34C759]/30 flex items-end justify-center pb-4">
                <span className="text-xs font-semibold text-[#34C759] tracking-wider uppercase">TAM</span>
              </div>
              {/* SAM — 중간 원 */}
              <div className="absolute rounded-full bg-[#0071E3]/10 border border-[#0071E3]/30 flex items-end justify-center pb-3" style={{ inset: '40px', paddingBottom: '12px' }}>
                <span className="text-xs font-semibold text-[#0071E3] tracking-wider uppercase">SAM</span>
              </div>
              {/* SOM — 가장 작은 원 */}
              <div className="absolute rounded-full flex items-center justify-center" style={{ inset: '90px', background: 'rgba(255,149,0,0.15)', border: '2px solid rgba(255,149,0,0.5)', boxShadow: '0 0 20px rgba(255,149,0,0.3)' }}>
                <div className="text-center">
                  <span className="text-sm font-bold text-[#FF9500] block">SOM</span>
                  <span className="text-xs text-[#FF9500]/70">현재</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              {[
                { label: 'SOM', sub: '거점 시장 (현재)', desc: '신호등 서비스 + OnStart + OnTrack — 건강검진 후 유소견자 대상, 불안 완화 + 일상 유지 지원', color: '#FF9500' },
                { label: 'SAM', sub: '유효 시장 (확장)', desc: 'OnCheck 추가 — 유병 의심자 의료기관 접근 지원, 추적관찰 → 확진 → 첫 치료까지 동행', color: '#0071E3' },
                { label: 'TAM', sub: '전체 시장 (목표)', desc: 'OnCall + OnVisit 등 연계 서비스 — 유질환자 홈케어 및 만성질환 관리, 디지털 헬스케어 컨트롤 타워', color: '#34C759' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-bold text-sm" style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}>
                    {item.label}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D1D1F] mb-1">{item.sub}</p>
                    <p className="text-sm text-[#6E6E73] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 숫자 지표 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#FF9500] mb-2">{s.value}</div>
                <div className="text-sm text-[#6E6E73] leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 비즈니스 모델 — BUSINESS MODEL */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-3">BUSINESS MODEL</p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight mb-3">
              안정적 수익 기반 × 폭발적 확장 가능성
            </h2>
            <p className="text-lg text-[#6E6E73]">B2C로 기반을 쌓고, B2B로 도약한다 — 두 엔진이 함께 작동하는 수익 구조</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessModels.map((bm) => (
              <div key={bm.type} className="bg-[#F5F5F7] rounded-[18px] p-10 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold" style={{ color: bm.badgeColor }}>{bm.type}</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${bm.badgeColor}15`, color: bm.badgeColor }}>
                    {bm.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-6">{bm.title}</h3>
                <ul className="flex flex-col gap-4">
                  {bm.items.map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: bm.badgeColor }} />
                      <div>
                        <p className="font-semibold text-[#1D1D1F] text-sm">{item.label}</p>
                        <p className="text-xs text-[#6E6E73]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 확장 로드맵 — MARKET EXPANSION ROADMAP */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-3">MARKET EXPANSION ROADMAP</p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight">
              거점 시장 선점 → 유효 시장 확장 → 전체 시장 장악
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapPhases.map((p, i) => (
              <div
                key={p.phase}
                className={`rounded-[18px] p-8 relative hover:-translate-y-1 transition-transform duration-300 ${p.current ? 'bg-black' : 'bg-white border border-[#D2D2D7]'}`}
              >
                {p.current && (
                  <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${p.color}20`, color: p.color }}>
                    현재 단계
                  </span>
                )}
                <div className="w-10 h-10 rounded-full mb-4 flex items-center justify-center font-bold text-xs" style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40` }}>
                  {p.market}
                </div>
                <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: p.color }}>{p.phase}</p>
                <p className={`text-sm mb-3 ${p.current ? 'text-white/60' : 'text-[#6E6E73]'}`}>{p.subtitle}</p>
                <h3 className={`text-lg font-bold mb-3 ${p.current ? 'text-white' : 'text-[#1D1D1F]'}`}>{p.services}</h3>
                <p className={`text-sm mb-2 font-medium ${p.current ? 'text-white/80' : 'text-[#1D1D1F]'}`}>{p.target}</p>
                <p className={`text-xs leading-relaxed ${p.current ? 'text-white/50' : 'text-[#6E6E73]'}`}>{p.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 지식재산권 */}
      <section className="py-20 lg:py-[120px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight">특허 및 지식재산</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {patents.map((p) => (
              <div key={p.type} className="bg-white rounded-[18px] p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#D2D2D7]">
                <div className="text-5xl mb-4">{p.icon}</div>
                <div className="text-6xl font-bold text-[#FF9500] mb-2">{p.count}</div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">{p.type}</h3>
                <p className="text-sm text-[#6E6E73]">{p.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="py-20 lg:py-[120px] bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6E6E73] mb-3">TEAM</p>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#1D1D1F] tracking-tight mb-3">
              IT 기술력과 메디컬 전문성이 조화된<br />최적의 팀 구성
            </h2>
            <p className="text-lg text-[#6E6E73] max-w-2xl mx-auto">기술 중심의 리더십 위에 메디컬 전문성이 유기적으로 결합된 컨트롤 타워</p>
          </div>
          <div className="inline-flex items-center gap-2 bg-white border border-[#D2D2D7] rounded-full px-5 py-2 text-sm text-[#1D1D1F] mx-auto flex justify-center mb-12">
            <span className="font-semibold">고도의 테크 플래닝 + 깊이 있는 메디컬 역량</span>
            <span className="text-[#6E6E73]">→ 가장 신뢰할 수 있는 팀</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((m, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold"
                  style={{ background: m.bg }}
                >
                  {m.role[0]}
                </div>
                <p className="text-sm font-semibold text-[#1D1D1F]">{m.name}</p>
                <p className="text-xs text-[#6E6E73] mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IR 자료 다운로드 */}
      <section className="py-20 lg:py-[120px] bg-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[40px] font-semibold text-white tracking-tight mb-4">IR 자료 요청</h2>
            <p className="text-lg text-white/60">이메일 인증 후 사업계획서를 다운로드하실 수 있습니다</p>
          </div>
          <IRDownloadForm />
        </div>
      </section>
    </>
  )
}
