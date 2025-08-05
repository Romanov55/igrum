import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = () => {
  return (
    <header className='header'>
      <span className='header__title'>Профиль</span>
      <button>
        <Image width={28}  height={23} src={`/icon/menu.svg`} alt='Полосы меню'  />
      </button>
    </header>
  );
};