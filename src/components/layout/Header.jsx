'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

const navLinks = [
  { href: '/service', label: '서비스 소개' },
  { href: '/pricing', label: '요금제' },
  { href: '/ir', label: 'IR' },
  { href: '/contact', label: '문의하기' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 64)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user ?? null))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setMobileOpen(false)
  }

  const textColor = scrolled || mobileOpen ? 'text-[#1D1D1F]' : 'text-white'
  const logoColor = scrolled || mobileOpen ? 'text-[#0071E3]' : 'text-white'

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-16
          transition-all duration-300
          ${scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-[#D2D2D7]'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 h-full flex items-center justify-between">
          <Link href="/" className={`text-xl font-bold tracking-tight ${logoColor} transition-colors duration-300`}>
            OnCare
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${textColor} hover:opacity-70 transition-all duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className={`text-sm ${textColor}`}>{user.email?.split('@')[0]}</span>
                <button
                  onClick={handleLogout}
                  className={`text-sm font-medium ${textColor} hover:opacity-70 transition-all duration-300`}
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className={`text-sm font-medium ${textColor} hover:opacity-70 transition-all duration-300`}
                >
                  로그인
                </Link>
                <Link
                  href="/auth/signup"
                  className="text-sm font-medium bg-[#0071E3] text-white px-5 py-2 rounded-full hover:opacity-85 transition-all duration-200"
                >
                  시작하기
                </Link>
              </>
            )}
          </div>

          <button
            className={`md:hidden p-2 ${textColor} transition-colors duration-300`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-16">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-[#D2D2D7] pt-6 flex flex-col gap-4">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-xl font-medium text-[#1D1D1F] text-left"
                >
                  로그아웃
                </button>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-medium text-[#1D1D1F]"
                  >
                    로그인
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-medium text-white bg-[#0071E3] px-6 py-3 rounded-full text-center"
                  >
                    시작하기
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
