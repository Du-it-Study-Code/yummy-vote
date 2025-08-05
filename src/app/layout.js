// 요약: 전체 레이아웃 (헤더, 폰트, Tailwind globals)

import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Container from '@/components/layouts/Container';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});


export const metadata = {
  title: 'YUMMY VOTE',
  description: '당신의 메뉴에게 투표하세요!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
