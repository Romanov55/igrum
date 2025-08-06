import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="fixed bottom-0 w-full max-w-[770px] mx-auto bg-back2 py-[7px] pb-[15px]">
      <div className="flex gap-[35px] justify-center items-center">
        <Link href={''}>
          <Image src={'/icon/home.svg'} width={37} height={37} alt='Дом' />
        </Link>
        <Link href={''}>
          <Image src={'/icon/chat.svg'} width={40} height={34} alt='Чат' />
        </Link>
        <Link href={''}>
          <Image src={'/icon/sphere.svg'} width={35} height={35} alt='Сфера' />
        </Link>
        <Link href={''}>
          <Image src={'/icon/ring.svg'} width={28} height={39} alt='Колокол' />
        </Link>
        <Link href={''}>
          <Image src={'/icon/people.svg'} width={28} height={35} alt='Человек' />
        </Link>
      </div>
    </footer>
  );
};