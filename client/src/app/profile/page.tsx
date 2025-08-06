export const dynamic = 'force-dynamic';

import { InfoBlock } from "@/components/infoBlock";
import { Profile } from "@/components/profile";
import { TgInfo } from "@/components/tg";
import { Zovs } from "@/components/zovs";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {

  return (
    <>
      <Profile />

      <Zovs />

      <section className="max-w-[370px] w-[95%] mx-auto my-5 flex flex-col rounded-[25px]">
        <button className="h-[60px] bg-blue text-white text-[22px] font-bold tracking-[0.26px] rounded-t-[25px] transition-all duration-500 hover:bg-white hover:text-blue">
          СОЗДАТЬ ИГРУМ
        </button>
        <button className="h-[60px] bg-white text-blue text-[22px] font-bold tracking-[0.26px] border-4 border-blue rounded-b-[25px] transition-all duration-500 hover:bg-blue hover:text-white">
          МОИ ИГРУМЫ
        </button>
      </section>

      <section className="bg-white rounded-[25px] max-w-[370px] w-[96%] mx-auto mb-5">
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="ИСТОРИЯ ВСТРЕЧ" 
          width={28} 
          height={26} 
          alt="часы" 
          img="/icon/clock.svg" 
        />
      </section>

      <section className="bg-white rounded-[25px] max-w-[370px] w-[96%] mx-auto mb-5">
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Публичный аккаун" 
          width={35} 
          height={21} 
          alt="глаз" 
          img="/icon/eye2.svg" 
        />
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Взрослый" 
          width={22} 
          height={23} 
          alt="черточки" 
          img="/icon/lines.svg" 
        />
      </section>

      <section className="bg-white rounded-[25px] max-w-[370px] w-[96%] mx-auto mb-5">
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Мои подписки" 
          width={26} 
          height={19} 
          alt="галочка" 
          img="/icon/check.svg" 
        />
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Черный список" 
          width={22} 
          height={22} 
          alt="крест" 
          img="/icon/x.svg" 
        />
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Закладки" 
          width={17} 
          height={20} 
          alt="закладка" 
          img="/icon/marker.svg" 
        />
      </section>

      <section className="bg-white rounded-[25px] max-w-[370px] w-[96%] mx-auto mb-5">
        <p className="relative h-max pt-[15px] pb-[18px] px-4 text-justify text-[17px] leading-[22px] tracking-[-0.43px]">
          Я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию с друзьями по вечера в Сицилии и зовем всех желающ и разные другие дела...
          <Image 
            className="absolute right-2 bottom-5 rotate-270" 
            width={21} 
            height={12} 
            src="/icon/arrow.svg" 
            alt="Стрелка" 
          />
        </p>
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <Link href="" className="flex h-[60px] items-center justify-between px-4 text-[17px]">
          <span>Мой телеграм</span>
          <TgInfo />
        </Link>
      </section>

      <section className="bg-white rounded-[25px] max-w-[370px] w-[96%] mx-auto mb-5">
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Возможновти ИГРУМА" 
          type={2} 
        />
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Правила ИГРУМА" 
          type={2} 
        />
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Инструкция РУМЕРА" 
          type={2} 
        />
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Инструкция МАСТЕРА" 
          type={2} 
        />
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Инструкция МЕСТА" 
          type={2} 
        />
        <hr className="mx-4 h-[1px] bg-black/20 border-none" />
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Пользовательское соглашение" 
          type={2} 
        />
      </section>

      <button className="bg-white rounded-[25px] max-w-[370px] w-[96%] mx-auto mb-[70px] block">
        <InfoBlock 
          className="flex h-[60px] items-center gap-[10px] px-4 text-[20px] tracking-[-0.45px] transition-all duration-300"
          text="Выйти из профиля" 
          width={23} 
          height={28} 
          alt="дверь" 
          img="/icon/door.svg" 
        />
      </button>
    </>
  );
}
