'use client'

import { useStore } from '@/context';
import { formattedDate } from '@/settings/date';
import Image from 'next/image';
import React from 'react';

export const Profile = () => {
  const { userInfo } = useStore()

  return (
    <section className="mt-[50px]">
      <div className="relative flex w-full justify-center">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <Image width={180} height={180} src={`/photo/profile.png`} alt="Аватар" />
          <span className="absolute left-0 top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-green text-[28px] font-bold">
            {userInfo && userInfo.role === 'roomer' ? 'Р' : 'M'}
          </span>
        </div>

        <div className="ml-[278px] flex flex-col items-center justify-center text-gray">
          <div>
            <Image width={27} height={41} src={`/icon/button.svg`} alt="Кнопка" />
          </div>
          <div className="my-[25px] flex flex-col items-center justify-center gap-[3px]">
            <Image width={36} height={20} src={`/icon/eye.svg`} alt="Кот" />
            <p className="text-[16px]">Это я</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[3px]">
            <Image width={30} height={30} src={`/icon/cat.svg`} alt="Глаз" />
            <p className="text-[16px]">Котум</p>
          </div>
        </div>
      </div>

      <p className="mt-[30px] text-center text-[28px] font-bold tracking-[0.38px] flex justify-center">
        <span className="text-[22px] font-normal">{userInfo && userInfo.role === 'roomer' ? 'румер' : 'мастер'}:</span>
        <span className="ml-[5px] w-[65%]">{userInfo && userInfo.name}</span>
      </p>

      <div className="mt-[10px] mb-[10px] flex justify-center gap-[80px] text-[17px] tracking-[0.43px] text-text1">
        <p>{userInfo && userInfo.nickname}</p>
        <p>{userInfo && userInfo.last_login_at && formattedDate(userInfo.last_login_at)}</p>
      </div>

      <div className="flex justify-center text-text1">
        <div className="px-[20px] text-center text-[18px] tracking-[0.45px]">
          <p className="text-[22px] font-bold">1 месяц</p>
          <p>в игруме</p>
        </div>
        <div className="border-l border-r border-text1 px-[20px] text-center text-[18px] tracking-[0.45px]">
          <p className="text-[22px] font-bold">15</p>
          <p>встреч</p>
        </div>
        <div className="px-[20px] text-center text-[18px] tracking-[0.45px]">
          <p className="text-[22px] font-bold">350</p>
          <p>румеров</p>
        </div>
      </div>

      <div className="mx-auto mt-[18px] mb-[20px] flex w-[95%] justify-center gap-[11px]">
        <p className="flex h-[60px] w-[236px] items-center justify-center rounded-[25px] bg-white text-[22px] text-text1">
          {userInfo && userInfo.city && userInfo.city.name}
        </p>
        <button className="group flex h-[60px] w-[122px] items-center justify-center gap-[3px] rounded-[25px] border-[3px] border-border bg-white text-[16px] font-semibold uppercase text-border">
          <Image 
            width={30} height={30} src={`/icon/set.svg`} 
            alt="Шестерня" 
            className="transition-transform duration-300 group-hover:rotate-180"
          />
          Редакт
        </button>
      </div>
    </section>
  );
};