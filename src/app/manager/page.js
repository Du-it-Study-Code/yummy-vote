'use client';
import { useRouter } from 'next/navigation';
import { Pencil } from 'lucide-react';

export default function ManagerHome() {
  const router = useRouter();

  // 예시로 하드코딩했지만, 실제로는 로그인 상태에서 받아오는 값으로 교체
  const adminEmail = 'admin@example.com';

  return (
    <div className="p-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="mb-1 text-xl font-semibold text-[#333] flex items-center justify-between">
          <div>
            <span className="mr-1 text-2xl text-orange-500">관리자</span>님 배고파요!
          </div>
          <button
            type="button"
            className="flex items-center gap-1 text-[14px] text-[#aaa] font-light hover:underline"
            onClick={() => {
              // 여기에 편집 모달 또는 이동 로직
            }}
          >
            <Pencil size={16} />
          </button>
        </h2>
        <p className="mb-6 text-sm text-[#aaa]">이메일: {adminEmail}</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push('/manager/order')}
            className="py-3 bg-orange-400 text-white rounded-md hover:bg-blue-500 transition"
          >
            주문 현황
          </button>
          <button
            onClick={() => router.push('/manager/menu')}
            className="py-3 bg-orange-400 text-white rounded-md hover:bg-blue-500 transition"
          >
            식당 / 메뉴 등록
          </button>
          <button
            onClick={() => router.push('/manager/members')}
            className="py-3 bg-orange-400 text-white rounded-md hover:bg-blue-500 transition"
          >
            멤버 관리
          </button>
        </div>
      </div>

    </div>
  );
}