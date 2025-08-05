import { Info } from '@/app/page';
import { formattedDate } from '@/settings/date';
import Image from 'next/image';
import React from 'react';

export const Profile = ( {data} : {data: Info}) => {
  return (
    <section className="profile">
      <div className="profile__top">
        <div className="avatar">
          <Image width={180} height={180} src={`/photo/profile.png`} alt="Аватар" />
          <span className="avatar__type">{data.role === 'roomer' ? 'Р' : 'M'}</span>
        </div>
        <div className="profile__top__right">
          <div>
            <Image  width={27} height={41} src={`/icon/button.svg`} alt="Кнопка" />
          </div>
          <div className="profile__top__right__center">
            <Image width={36} height={20} src={`/icon/eye.svg`} alt="Кот" />
            <p>Это я</p>
          </div>
          <div>
            <Image width={30} height={30} src={`/icon/cat.svg`} alt="Глаз" />
            <p>Котум</p>
          </div>
        </div>
      </div>
      <p className="profile__name__block">
        <span className="profile__type">{data.role === 'roomer' ? 'румер' : 'мастер'}:</span>
        <span className="profile__name">{data.name}</span>
      </p>
      <div className="profile__nick">
        <p>{data.nickname}</p>
        <p>{formattedDate(data.last_login_at)}</p>
      </div>
      <div className="profile__info">
        <div className="profile__info__block">
          <p className="profile__info__value">1 месяц</p>
          <p>в игруме</p>
        </div>
        <div className="profile__info__block center">
          <p className="profile__info__value">15</p>
          <p>встреч</p>
        </div>
        <div className="profile__info__block">
          <p className="profile__info__value">350</p>
          <p>румеров</p>
        </div>
      </div>

      <div className="profile__bottom">
        <p className="profile__city">{data.city.name}</p>
        <button className="profile__change">
          <Image width={30} height={30} src={`/icon/set.svg`} alt="Шестерня" />
          Редакт
        </button>
      </div>
    </section>
  );
};