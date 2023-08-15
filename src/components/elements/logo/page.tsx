import Image from "next/image";
import logo1 from "@/public/logo.png";
import logo2 from "@/public/logo-2.png";
import Link from "next/link";

export function Logo1() {
  return<Link href="/"> <Image src={logo1} alt="Logo" height={35} width={127} className="w-[127px] h-[35px] ml-2" /></Link>;
}

export function Logo2() {
  return<Link href="/"> <Image src={logo2} alt="Logo" height={100} width={150} className="mx-auto" /></Link>;
}
