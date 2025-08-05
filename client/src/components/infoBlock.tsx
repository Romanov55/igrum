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

export const InfoBlock: React.FC<Props> = ({className, text, width, height, alt, img, type}) => {
  return (
    <Link href={''} className={className}>
      {type !== 2 && <Image className="info__block__img" width={width} height={height} alt={alt || ''} src={img || ''} />}
      {type === 2 && <span className="info__dot"></span>}
      {text}
    </Link>
  );
};