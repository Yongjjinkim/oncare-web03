'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
    privacyAgreed: false,
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const validate = () => {
    if (!form.name.trim()) return '이름을 입력해주세요.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return '올바른 이메일을 입력해주세요.'
    if (!form.type) return '문의 유형을 선택해주세요.'
    if (!form.message.trim() || form.message.trim().length < 10) return '문의 내용을 10자 이상 입력해주세요.'
    if (!form.privacyAgreed) return '개인정보 수집 및 이용에 동의해주세요.'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setStatus('loading')
    try {
      const { error: supabaseError } = await supabase.from('contacts').insert([
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          type: form.type,
          message: form.message.trim(),
        },
      ])
      if (supabaseError) throw supabaseError
      setStatus('success')
    } catch {
      setStatus('error')
      setError('문의 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }
  }

  if (status === 'success') {
    return (
      <>
        <section className="pt-32 pb-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-[52px] font-bold text-[#1D1D1F] tracking-tight mb-4">무엇이든 물어보세요</h1>
            <p className="text-lg text-[#6E6E73]">평일 09:00 ~ 18:00 내에 답변드립니다</p>
          </div>
        </section>
        <section className="py-20 bg-[#F5F5F7]">
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <div className="bg-white rounded-[24px] p-12 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="text-2xl font-bold text-[#1D1D1F] mb-3">문의가 접수되었습니다</h2>
              <p className="text-[#6E6E73] leading-relaxed">
                소중한 문의 감사합니다.<br />
                평일 09:00~18:00 내에 입력하신 이메일로 답변드리겠습니다.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* 헤더 섹션 */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-[52px] lg:text-[56px] font-bold text-[#1D1D1F] tracking-tight mb-4">
            무엇이든 물어보세요
          </h1>
          <p className="text-lg text-[#6E6E73]">평일 09:00 ~ 18:00 내에 답변드립니다</p>
        </div>
      </section>

      {/* 폼 + 연락처 섹션 */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* 폼 */}
            <div className="lg:col-span-2 bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-2">
                      이름 <span className="text-[#0071E3]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-2">
                      이메일 <span className="text-[#0071E3]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-2">연락처</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-2">
                      문의 유형 <span className="text-[#0071E3]">*</span>
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all bg-white appearance-none"
                    >
                      <option value="">선택해주세요</option>
                      <option value="personal">개인 서비스 문의</option>
                      <option value="b2b">기업 도입 문의</option>
                      <option value="investment">투자/파트너십</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-2">
                    문의 내용 <span className="text-[#0071E3]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="문의하실 내용을 자세히 적어주세요 (최소 10자)"
                    className="w-full px-4 py-3 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyAgreed"
                    checked={form.privacyAgreed}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 accent-[#0071E3]"
                  />
                  <span className="text-sm text-[#6E6E73]">
                    개인정보 수집 및 이용에 동의합니다.{' '}
                    <span className="text-[#0071E3] underline cursor-pointer">개인정보처리방침 보기</span>
                  </span>
                </label>

                {error && (
                  <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-[#0071E3] text-white rounded-full text-base font-semibold hover:opacity-85 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      전송 중...
                    </>
                  ) : '문의 보내기'}
                </button>
              </form>
            </div>

            {/* 연락처 정보 */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-6">연락처 정보</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-sm font-medium text-[#1D1D1F]">이메일</p>
                      <p className="text-sm text-[#6E6E73]">contact@oncarenurse.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="text-sm font-medium text-[#1D1D1F]">응답 시간</p>
                      <p className="text-sm text-[#6E6E73]">평일 09:00 ~ 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="text-sm font-medium text-[#1D1D1F]">카카오톡</p>
                      <p className="text-sm text-[#6E6E73]">추후 추가 예정</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0071E3]/5 rounded-[24px] p-8 border border-[#0071E3]/20">
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">기업 도입 문의</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  임직원 건강관리 솔루션 도입을 검토 중이시라면 &apos;기업 도입 문의&apos;를 선택하고 인원 수와 요구사항을 함께 적어주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
