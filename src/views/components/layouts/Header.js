"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/views/components/layouts/Container";
import Logo from "@/views/components/layouts/Logo";

const menuMap = {
  "/manager": [
    { label: "주문 현황", href: "/manager/orders" },
    { label: "식당 / 메뉴 관리", href: "/manager/restaurants" },
    { label: "멤버 관리", href: "/manager/members" },
  ],
  "/order": [
    { label: "오늘의 식당", href: "/order/" },
    { label: "오늘의 멤버", href: "/order/members" },
  ],
};

const titleMap = {
  "/manager": "관리자 페이지",
  "/order": "오늘의 식당",
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // 현재 경로 가져오기 (Next.js usePathname 사용)
  const pathname = usePathname();

  const currentBasePath = Object.keys(menuMap).find((basePath) =>
    pathname.startsWith(basePath)
  );

  const menus = currentBasePath ? menuMap[currentBasePath] : [];
  const title = currentBasePath ? titleMap[currentBasePath] : "";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <Container className="flex h-14 items-center justify-between">
          <a href="#">
            <Logo />
          </a>
          <button onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </Container>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <h2 className="mb-4 text-lg font-semibold text-[#333]">{title}</h2>
          <ul className="space-y-2 mt-3">
            {menus.map(({ label, href }, index) => (
              <li
                key={index}
                className="relative pl-4 pr-6 cursor-pointer group"
              >
                <a
                  href={href}
                  className="text-[#555] hover:text-orange-500 block w-full relative before:content-[''] before:absolute before:left-[-15px] before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-orange-500 after:content-[''] after:absolute after:right-[-15px] after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:rounded-full after:bg-orange-500 after:opacity-0 group-hover:after:opacity-100 active:after:scale-110 after:transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
