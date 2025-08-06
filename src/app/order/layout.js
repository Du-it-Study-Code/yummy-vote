// 요약: 전체 레이아웃 (헤더, 폰트, Tailwind globals)

import '../globals.css';
import Header from '@/views/components/layouts/Header';
import Footer from '@/views/components/layouts/Footer';
import Container from '@/views/components/layouts/Container';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    { path: '../fonts/Pretendard-Regular.woff', weight: '400', style: 'normal' },
    { path: '../fonts/Pretendard-Medium.woff', weight: '500', style: 'normal' },
    { path: '../fonts/Pretendard-SemiBold.woff', weight: '600', style: 'normal' },
    { path: '../fonts/Pretendard-Bold.woff', weight: '700', style: 'normal' },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});


export const metadata = {
  title: 'YUMMY VOTE',
  description: '당신의 메뉴에게 투표하세요!',
};

export default function OrderLayout({ children }) {
  return (
    <div
      className={`${pretendard.variable} antialiased bg-gray-100 min-h-screen flex flex-col`}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
