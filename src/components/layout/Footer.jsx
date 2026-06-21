import Link from 'next/link'

const serviceLinks = [
  { href: '/service', label: '서비스 소개' },
  { href: '/pricing', label: '요금제' },
  { href: '/ir', label: 'IR' },
  { href: '/contact', label: '문의하기' },
]

const legalLinks = [
  { href: '/terms', label: '이용약관' },
  { href: '/privacy', label: '개인정보처리방침' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] py-15">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-[#333333]">
          <div className="max-w-xs">
            <Link href="/" className="text-xl font-bold text-white">
              OnCare
            </Link>
            <p className="mt-2 text-sm font-medium" style={{ color: '#FF9500' }}>
              Sign Translator — 경고 신호 해석자
            </p>
            <p className="mt-2 text-sm text-[#6E6E73] leading-relaxed">
              내 곁의 의료 네비게이터, 내편
            </p>
            <p className="mt-2 text-sm text-[#6E6E73]">
              건강검진 결과부터 후속 케어까지,<br />
              전담 간호사가 함께하는 스마트 헬스케어
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">서비스</h3>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6E6E73] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">법적 고지</h3>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6E6E73] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">연락처</h3>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-[#6E6E73]">contact@oncarenurse.com</li>
                <li className="text-sm text-[#6E6E73]">평일 09:00 ~ 18:00</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-[#6E6E73]">
            © 2026 라파엘 온케어. All rights reserved.
          </p>
          <p className="text-sm text-[#6E6E73]">
            사업자등록번호: 000-00-00000
          </p>
        </div>
      </div>
    </footer>
  )
}
