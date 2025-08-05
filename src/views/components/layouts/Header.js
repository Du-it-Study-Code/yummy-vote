"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // 아이콘에 힘을 덜 쓰기 위한 라이브러리, lucide-react 설치 필요
import Container from '@/views/components/layouts/Container';
import Logo from '@/views/components/layouts/Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <Container className="flex h-14 items-center justify-between">
          {/* 왼쪽 로고 */}
          <a href="#">
            <Logo/>
          </a>

          {/* 햄버거 버튼 */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      {/* 사이드 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">메뉴</h2>
          <ul className="space-y-2">
            <li><a href="#">메뉴판</a></li>
            <li><a href="#">주문자 명단</a></li>
            <li><a href="#">오늘의 식당</a></li>
            <li><a href="#">주문자 명단</a></li>
          </ul>
        </div>
      </div>

      {/* 오버레이 (메뉴 열렸을 때만) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
