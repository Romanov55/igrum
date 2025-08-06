import Link from "next/link"

export default async function Home() {

  return (
    <>
      <Link href={'/profile'} className="text-[22px] m-5">Профиль</Link>
    </>
  );
}
