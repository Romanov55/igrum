import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

export const Zovs: React.FC<Props> = () => {
  return (
    <section className="max-w-[370px] mx-auto rounded-[25px] bg-white px-4 w-[95%]">
      <div className="flex w-full items-center justify-between py-4 text-text1 cursor-pointer border-b border-black/10">
        <span className="h-[13px] w-[13px] rounded-full bg-green"></span>
        <span className="mx-auto ml-[18px] text-[20px] font-semibold tracking-[0.20px]">ЗОВЫ</span>
        <span className="flex h-[28px] min-w-[28px] items-center justify-center rounded-full bg-back text-[22px] font-bold tracking-[0.22px] mr-[22px] px-1.5">
          2
        </span>
        <Image width={31} height={18} alt="Стрелка" src="/icon/arrow.svg" />
      </div>
      <div className="flex w-full items-center justify-between py-4 text-text1 cursor-pointer">
        <span className="h-[13px] w-[13px] rounded-full bg-green"></span>
        <span className="mx-auto ml-[18px] text-[20px] font-semibold tracking-[0.20px]">ИДУ</span>
        <span className="flex h-[28px] min-w-[28px] items-center justify-center rounded-full bg-back text-[22px] font-bold tracking-[0.22px] mr-[22px] px-1.5">
          3
        </span>
        <Image width={31} height={18} alt="Стрелка" src="/icon/arrow.svg" />
      </div>
    </section>
  );
};