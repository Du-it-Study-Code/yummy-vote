import '../globals.css';
import Header from '@/views/components/layouts/Header';
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
  title: '관리자 페이지',
  description: '관리자 전용 영역입니다.',
};

export default function ManagerLayout({ children }) {
  return (
    <div
      className={`${pretendard.variable} antialiased bg-gray-200 min-h-screen flex flex-col`}
    >
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
