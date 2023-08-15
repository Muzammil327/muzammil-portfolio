import Link from "next/link";
import Image from "next/image";
import { Button } from "@/types/page";
import {FaAngleRight}  from "react-icons/fa";

export default function Button({ href, text,className }: Button) {
  return <Link href={href} className={`btn ${className}`}>
    {text} <span><FaAngleRight /></span>
    </Link>;
}
