import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: '온케어 - 내 곁의 의료 네비게이터',
  description: '검진 결과부터 후속 케어까지, 전담 간호사가 함께하는 스마트 헬스케어',
  openGraph: {
    title: '온케어 (OnCare)',
    description: '내 곁의 의료 네비게이터, 내편',
    url: 'https://oncarenurse.com',
    siteName: '온케어',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="antialiased">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
