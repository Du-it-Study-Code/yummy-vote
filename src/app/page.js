// 요약: 홈 페이지 (주문하러 가기 버튼)

import Link from 'next/link';

import Header from '@/views/components/layouts/Header';
import LogoHeader from '@/views/components/layouts/LogoHeader';
import Footer from '@/views/components/layouts/Footer';
import Container from '@/views/components/layouts/Container';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <LogoHeader />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-[540px] flex flex-col space-y-4 border-2 p-4">
          <button className="w-full py-3 px-4 font-semibold rounded-lg shadow-md text-white bg-orange-500 hover:bg-orange-300 cursor-pointer">
            주문하기
          </button>
          <span className="text-base py-2 font-light tracking-tight text-center text-black">
            <Link href="">회원가입</Link> / <Link href="/manager">로그인</Link>
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
