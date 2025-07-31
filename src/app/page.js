// 요약: 홈 페이지 (주문하러 가기 버튼)

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Container from '@/components/layouts/Container';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header 영역 */}

      {/* Main 영역 */}
      <main className="flex-1">
        <Container className="py-8">
          <div className="flex flex-col space-y-4 border-2 p-4">
            {/* 섹션 제목 */}
            <button className="w-full py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-orange-500 hover:bg-orange-300 cursor-pointer">주문하기</button>
            <span className="text-base font-light tracking-tight text-center text-black"><a>회원가입</a> / <a>로그인</a></span>

          </div>
        </Container>
      </main>

      {/* Footer 영역 */}
    </div>
  );
}
