export const dynamic = 'force-dynamic';

import { getInfo } from "@/actions";
import { InfoBlock } from "@/components/infoBlock";
import { Profile } from "@/components/profile";
import { Zovs } from "@/components/zovs";
import Image from "next/image";
import Link from "next/link";

export interface Info {
  id: string;
  role: string;
  name: string;
  nickname: string;
  avatar_url: string;
  age: number;
  is_private: boolean;
  telegram: string;
  about: string;
  city: City;
  calling_limit: number;
  going_limit: number;
  account_status: string;
  last_login_at: Date,
  created_at: Date,
  updated_at: Date,
}

export interface City {
  id: string;
  name: string;
}

export default async function Home() {
  const  { data } = await getInfo() as { data: Info }

  return (
    <>
      <Profile data={data} />

      <Zovs />

      <section className="create">
        <button className="create__block create__create">СОЗДАТЬ ИГРУМ</button>
        <button className="create__block create__my">МОИ ИГРУМЫ</button>
      </section>

      <section className="info__section">
        <InfoBlock className="info__block" text="ИСТОРИЯ ВСТРЕЧ" width={28} height={26} alt="часы" img="/icon/clock.svg" />
      </section>

      <section className="info__section">
        <InfoBlock className="info__block" text="Публичный аккаун" width={35} height={21} alt="глаз" img="/icon/eye2.svg" />
        <hr />
        <InfoBlock className="info__block" text="Взрослый" width={22} height={23} alt="черточки" img="/icon/lines.svg" />
      </section>

      <section className="info__section">
        <InfoBlock className="info__block" text="Мои подписки" width={26} height={19} alt="галочка" img="/icon/check.svg" />
        <hr />
        <InfoBlock className="info__block" text="Черный список" width={22} height={22} alt="крест" img="/icon/x.svg" />
        <hr />
        <InfoBlock className="info__block" text="Закладки" width={17} height={20} alt="закладка" img="/icon/marker.svg" />
      </section>

      <section className="info__section">
        <p className="info__block long">
          Я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию с друзьями по вечера в Сицилии и зовем всех желающ и разные другие дела...
          <Image className="info__block__arrow" width={21} height={12} src={'/icon/arrow.svg'} alt="Стрелка" />
        </p>

        <hr />
        <Link href={''} className="info__block tg">
          <span>Мой телеграм</span>
          <span className="tg__name">@{data.telegram}</span>
        </Link>
      </section>

      <section className="info__section">
        <InfoBlock className="info__block" text="Возможновти ИГРУМА" type={2} />
        <hr />
        <InfoBlock className="info__block" text="Правила ИГРУМА" type={2} />
        <hr />
        <InfoBlock className="info__block" text="Инструкция РУМЕРА" type={2} />
        <hr />
        <InfoBlock className="info__block" text="Инструкция МАСТЕРА" type={2} />
        <hr />
        <InfoBlock className="info__block" text="Инструкция МЕСТА " type={2} />
        <hr />
        <InfoBlock className="info__block" text="Пользовательское соглашение" type={2} />
      </section>

      <button className="info__section last">
        <InfoBlock className="info__block" text="Выйти из профиля" width={23} height={28} alt="дверь" img="/icon/door.svg" />
      </button>
    </>
  );
}
