// app/order/members/page.js
'use client';

import React from 'react';

export default function OrderMembersPage() {
  // 예시 데이터
  const members = Array(9).fill({ menu: '불맛나는 짬뽕', name: '박여울' });

  const handleDelete = (index) => {
    // 삭제 로직
    console.log(`삭제: ${index}`);
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 min-h-screen bg-gray-100">
      <div className="w-full max-w-[540px] bg-white rounded-xl shadow-md p-6">
        {/* 타이틀 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4 relative">
          오늘의 식탁멤버
          <span className="absolute left-[-4px] bottom-[-4px] w-[120px] h-1 bg-orange-300 rounded-full" />
        </h2>

        {/* 테이블 헤더 */}
        <div className="grid grid-cols-3 text-sm font-bold text-gray-600 border-b pb-2 mt-[30px] mb-[10px]">
          <div>메뉴</div>
          <div>주문자</div>
          <div></div>
        </div>

        {/* 멤버 목록 */}
        <div className="space-y-2 max-h-[400px] overflow-y-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="grid grid-cols-3 text-sm text-gray-700 items-center"
            >
              <div>{member.menu}</div>
              <div>{member.name}</div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:underline text-xs"
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
