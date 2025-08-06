'use client'

import { getInfo } from '@/actions';
import { useStore } from '@/context';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import z from "zod";

interface Props {
  className?: string;
}

const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
})

const InfoSchema = z.object({
  id: z.string(),
  role: z.string(),
  name: z.string(),
  nickname: z.string(),
  avatar_url: z.string(),
  age: z.number(),
  is_private: z.boolean(),
  telegram: z.string(),
  about: z.string(),
  city: CitySchema,
  calling_limit: z.number(),
  going_limit: z.number(),
  account_status: z.string(),
  last_login_at: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Info = z.infer<typeof InfoSchema>;
export type City = z.infer<typeof CitySchema>;

export const Header: React.FC<Props> = () => {
  const { setUserInfo } = useStore();
  const pathname = usePathname();
  
  useEffect(() => {
    const fetchAndSetUser = async () => {
      try {
        const { data: rawData } = await getInfo();
        const data = InfoSchema.parse(rawData);
        setUserInfo(data);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchAndSetUser();
  }, [setUserInfo]);

  return (
    <header className="max-w-[770px] flex justify-between mx-[21px] mr-[10px] items-center h-12">
      <span className="text-[28px] tracking-[0.38%] text-gray">{pathname === '/' ? 'Главная' : 'Профиль'}</span>
      <button>
        <Image 
          width={28}
          height={23}
          src="/icon/menu.svg"
          alt="Меню"
          className="h-[23px] w-[28px]"
        />
      </button>
    </header>
  );
};