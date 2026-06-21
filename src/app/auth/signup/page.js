'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    termsAgreed: false,
    privacyAgreed: false,
    marketingAgreed: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const validate = () => {
    if (!form.name.trim()) return '이름을 입력해주세요.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return '올바른 이메일을 입력해주세요.'
    if (form.password.length < 8) return '비밀번호는 8자 이상이어야 합니다.'
    if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(form.password)) return '비밀번호는 영문과 숫자를 조합해야 합니다.'
    if (form.password !== form.passwordConfirm) return '비밀번호가 일치하지 않습니다.'
    if (!form.termsAgreed) return '이용약관에 동의해주세요.'
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
      const { error: authError } = await supabase.auth.signUp({
        email: form.email.trim(),
        password: form.password,
        options: { data: { name: form.name.trim() } },
      })
      if (authError) {
        if (authError.message.includes('already registered')) {
          setError('이미 가입된 이메일 주소입니다.')
        } else {
          setError(authError.message)
        }
        setStatus('idle')
        return
      }
      setStatus('success')
    } catch {
      setError('회원가입 중 오류가 발생했습니다.')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-[420px]">
          <div className="bg-white rounded-[18px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 text-center">
            <div className="text-6xl mb-4">📧</div>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">이메일을 확인해주세요</h2>
            <p className="text-sm text-[#6E6E73] leading-relaxed mb-6">
              <strong>{form.email}</strong>으로 인증 메일을 발송했습니다.<br />
              이메일 인증 후 로그인 가능합니다.
            </p>
            <Link
              href="/auth/login"
              className="inline-flex items-center justify-center w-full py-3.5 bg-[#0071E3] text-white rounded-full text-sm font-semibold hover:opacity-85 transition-all duration-200"
            >
              로그인 페이지로
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-[420px]">
        <div className="bg-white rounded-[18px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block text-2xl font-bold text-[#0071E3]">OnCare</Link>
            <h1 className="text-xl font-semibold text-[#1D1D1F] mt-3">회원가입</h1>
            <p className="text-sm text-[#6E6E73] mt-1">첫 달 무료로 시작하세요</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">이름 <span className="text-[#0071E3]">*</span></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="홍길동"
                autoComplete="name"
                className="w-full px-4 py-3 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">이메일 <span className="text-[#0071E3]">*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">비밀번호 <span className="text-[#0071E3]">*</span></label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="8자 이상, 영문+숫자"
                  autoComplete="new-password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {showPassword
                      ? <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      : <>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </>
                    }
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-2">비밀번호 확인 <span className="text-[#0071E3]">*</span></label>
              <div className="relative">
                <input
                  type={showPasswordConfirm ? 'text' : 'password'}
                  name="passwordConfirm"
                  value={form.passwordConfirm}
                  onChange={handleChange}
                  placeholder="비밀번호를 다시 입력하세요"
                  autoComplete="new-password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                />
                <button type="button" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {showPasswordConfirm
                      ? <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      : <>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </>
                    }
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-1">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="termsAgreed" checked={form.termsAgreed} onChange={handleChange} className="mt-0.5 w-4 h-4 accent-[#0071E3]" />
                <span className="text-sm text-[#6E6E73]">
                  <span className="text-[#0071E3] underline cursor-pointer">이용약관</span>에 동의합니다 <span className="text-[#0071E3]">*</span>
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="privacyAgreed" checked={form.privacyAgreed} onChange={handleChange} className="mt-0.5 w-4 h-4 accent-[#0071E3]" />
                <span className="text-sm text-[#6E6E73]">
                  <span className="text-[#0071E3] underline cursor-pointer">개인정보 수집 및 이용</span>에 동의합니다 <span className="text-[#0071E3]">*</span>
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="marketingAgreed" checked={form.marketingAgreed} onChange={handleChange} className="mt-0.5 w-4 h-4 accent-[#0071E3]" />
                <span className="text-sm text-[#6E6E73]">마케팅 정보 수신에 동의합니다 (선택)</span>
              </label>
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 bg-[#0071E3] text-white rounded-full text-sm font-semibold hover:opacity-85 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  처리 중...
                </>
              ) : '회원가입'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#6E6E73]">
            이미 계정이 있으신가요?{' '}
            <Link href="/auth/login" className="text-[#0071E3] font-medium hover:underline">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
