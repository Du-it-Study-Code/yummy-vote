// app/order/page.js
'use client';

import Image from 'next/image';
import { useState } from 'react';

const menuList = [
  { id: 1, name: '짬뽕', price: 1300, image: '/images/menu/jjambbong.jpg', color: 'blue' },
  { id: 2, name: '짜장면', price: 1300, image: '/images/menu/jajang.jpg', color: 'purple' },
  { id: 3, name: '탕수육', price: 1300, image: '/images/menu/tangsuyuk.jpg', color: 'blue' },
  { id: 4, name: '김밥', price: 1300, image: '/images/menu/gimbap.jpg', color: 'purple' },
  { id: 5, name: '샐러드', price: 1300, image: '/images/menu/salad.jpg', color: 'blue' },
  { id: 6, name: '떡볶이', price: 1300, image: '/images/menu/tteokbokki.jpg', color: 'purple' },
  { id: 7, name: '피자', price: 1300, image: '/images/menu/pizza.jpg', color: 'blue' },
  { id: 8, name: '치킨', price: 1300, image: '/images/menu/chicken.jpg', color: 'purple' },
];

export default function OrderPage() {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="px-4 py-8">
      <div className='bg-white px-4 py-6 max-w-[728px] w-full mx-auto rounded-xl'>
        <h2 className="text-lg font-semibold text-gray-800 mb-4 relative"><span className='relative'>아맛나 빨리빨리감<span className="absolute left-[0px] bottom-[-8px] w-full h-1 bg-orange-300 rounded-full" /></span>
          
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {menuList.map((menu) => (
            <div
              key={menu.id}
              className={`cursor-pointer rounded-lg overflow-hidden border ${selectedId === menu.id ? 'border-blue-400 shadow-md' : 'border-transparent'
                }`}
              onClick={() => handleClick(menu.id)}
            >
              <div className="w-full aspect-[3/2] relative">
                <Image src={menu.image} alt={menu.name} fill className="object-cover" />
              </div>
              <div className="p-2">
                <div className="text-center text-sm font-medium">
                  {selectedId === menu.id ? (
                    <span className="text-blue-600 underline">{menu.name}</span>
                  ) : (
                    <span className="text-gray-700">{menu.name}</span>
                  )}
                </div>
                <div className="flex justify-center items-center mt-1">
                  <div
                    className={`w-10 h-1 rounded-full ${menu.color === 'blue' ? 'bg-blue-200' : 'bg-purple-200'
                      }`}
                  />
                </div>
                <div className="text-center text-sm text-gray-600 mt-1">₩{menu.price.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
