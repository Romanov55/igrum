import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  text: string;
  width?: number;
  height?: number;
  alt?: string;
  img?: string;
  type?: number;
}

export const InfoBlock: React.FC<Props> = ({ className, text, width, height, alt, img, type }) => {
  return (
    <Link 
      href={''} 
      className={`flex h-[60px] items-center gap-[10px] pl-[16px] text-[20px] tracking-[-0.45px] transition-all duration-300 ${className}`}
    >
      {type !== 2 && (
        <div className='w-[35px] flex justify-center'>
          <Image 
            width={width} 
            height={height} 
            alt={alt || ''} 
            src={img || ''} 
          />
        </div>
      )}
      {type === 2 && (
        <span className="h-[10px] w-[10px] rounded-full bg-gray mr-[5px] "></span>
      )}
      {text}
    </Link>
  );
};