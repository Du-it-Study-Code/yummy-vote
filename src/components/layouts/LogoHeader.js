// 요약: 햄버거 버튼 없이 로고만 가운데 배치된 헤더, 메인 페이지 전용

import Logo from '@/components/layouts/Logo';

export default function LogoHeader() {
  return (
    <header className="sticky top-0 z-50 border-b">
      <Container className="flex h-14 items-center">
        <a href="#">
          <Logo />
        </a>
      </Container>
    </header>
  );
}