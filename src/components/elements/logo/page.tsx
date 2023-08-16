import Image from "next/image";
import logo1 from "@/public/logo.png";
import logo2 from "@/public/logo-2.png";
import Link from "next/link";

export function Logo1() {
  return<Link href="/" className="flex gap-2 items-center"> 
  <Image src={logo1} alt="Logo" height={64} width={176} className="h-16 w-auto" />
  <div className="flex flex-col text-white">
  <span className="text-xl font-semibold">Muzammil</span>
  <span className="text-lg font-medium">Portfolio</span>
  </div>
  </Link>;
}

export function Logo2() {
  return<Link href="/"> <Image src={logo2} alt="Logo" height={100} width={150} className="mx-auto h-28 w-auto" /></Link>;
}
