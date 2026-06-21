'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('올바른 이메일을 입력해주세요.')
      return
    }
    setError('')
    setStatus('loading')
    try {
      const { error: authError } = await supabase.auth.resetPasswordForEmail(email.trim())
      if (authError) throw authError
      setStatus('success')
    } catch {
      setError('재설정 메일 발송 중 오류가 발생했습니다.')
      setStatus('idle')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-[420px]">
        <div className="bg-white rounded-[18px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block text-2xl font-bold text-[#0071E3]">OnCare</Link>
            <h1 className="text-xl font-semibold text-[#1D1D1F] mt-3">비밀번호 재설정</h1>
            <p className="text-sm text-[#6E6E73] mt-1">
              {status === 'success'
                ? '재설정 메일을 확인해주세요'
                : '가입하신 이메일을 입력해주세요'}
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center">
              <div className="text-6xl mb-4">📧</div>
              <p className="text-sm text-[#6E6E73] leading-relaxed mb-6">
                <strong>{email}</strong>로 비밀번호 재설정 링크를 발송했습니다.
              </p>
              <Link href="/auth/login" className="inline-flex items-center justify-center w-full py-3.5 bg-[#0071E3] text-white rounded-full text-sm font-semibold hover:opacity-85 transition-all duration-200">
                로그인으로 돌아가기
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1D1D1F] mb-2">이메일</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#D2D2D7] text-[#1D1D1F] text-sm outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                />
              </div>
              {error && <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">{error}</p>}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 bg-[#0071E3] text-white rounded-full text-sm font-semibold hover:opacity-85 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    발송 중...
                  </>
                ) : '재설정 링크 보내기'}
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-[#6E6E73]">
            <Link href="/auth/login" className="text-[#0071E3] hover:underline">로그인으로 돌아가기</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
