'use client';
import { useRouter } from 'next/navigation';

export default function ManagerHome() {
  const router = useRouter();

  // 예시로 하드코딩했지만, 실제로는 로그인 상태에서 받아오는 값으로 교체하세요
  const adminEmail = 'admin@example.com';

  return (
    <div className="p-8 px-4">
          <div className="max-w-2 xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <h2 className="mb-1 text-2xl font-semibold">
                  <span className="text-orange-500">관리자</span>님 배고파요!
              </h2>
              <p className="mb-6 text-sm text-gray-600">이메일: {adminEmail}</p>

              <div className="flex flex-col gap-4">
                  <button
                      onClick={() => router.push('/manager/order')}
                      className="py-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
                  >
                      주문 현황
                  </button>
                  <button
                      onClick={() => router.push('/manager/menu')}
                      className="py-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
                  >
                      메뉴 등록
                  </button>
                  <button
                      onClick={() => router.push('/manager/members')}
                      className="py-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
                  >
                      멤버 관리
                  </button>
              </div>
          </div>

    </div>
  );
}