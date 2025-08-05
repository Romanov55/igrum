import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

export const Zovs: React.FC<Props> = () => {
  return (
    <section className="zovs">
      <div className="zovs__block">
        <span className="dot"></span>
        <span className="zovs__zov">ЗОВЫ</span>
        <span className="zovs__number">2</span>
        <Image className="zovs__arrow" width={31} height={18} alt="Стрелка" src={`/icon/arrow.svg`} />
      </div>
      <div className="zovs__block">
        <span className="dot"></span>
        <span className="zovs__zov">ИДУ</span>
        <span className="zovs__number">3</span>
        <Image className="zovs__arrow" width={31} height={18} alt="Стрелка" src={`/icon/arrow.svg`} />
      </div>
    </section>
  );
};