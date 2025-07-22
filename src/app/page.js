// 요약: 홈 페이지 (주문하러 가기 버튼)

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header 영역 */}

      {/* Main 영역 */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* 섹션 제목 */}
            <h2 className="text-3xl font-bold tracking-tight">주문하기</h2>
            <span className="text-1xl font-light tracking-tight">회원가입/로그인</span>

            {/* 프리텐다드 폰트 적용 여부 */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Pretendard Bold</h1>
              <p className="text-base font-normal">이건 Regular입니다.</p>
              <p className="text-base font-medium">이건 Medium</p>
              <p className="text-base font-semibold">이건 SemiBold</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer 영역 */}
    </div>
  );
}
