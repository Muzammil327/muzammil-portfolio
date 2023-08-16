import Image from "next/image";
import Container from "../../elements/container/page";
import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function HireCard() {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-16">
        <div className="bg p-10 rounded-lg ">
          <Link href="/" target="_blank">
            <div className="image relative">
              <Image
                src={data.img1}
                alt={data.name}
                title={data.name}
                className="rounded-full w-24 my-4 h-24 mx-auto"
                height={250}
                width={250}
              />
            </div>
          </Link>
          <Icon />
          <Link
            href="/"
            className="bg-white block w-auto py-2 rounded-3xl mt-4 hover:bg-red-400 transition-all hover:border-2 hover:border-solid border-red-400 border-2 border-solid hover:border-white text-center hover:text-white font-semibold text-lg"  >
            Hire Me
          </Link>
        </div>
        <div className="bg p-10 rounded-lg ">
          <Link
            href="https://www.upwork.com/freelancers/~013fbdbd02c10b41af"
            target="_blank"
          >
            <div className="image relative">
              <Image
                src={data.img2}
                alt={data.name}
                title={data.name}
                className="rounded-full w-24 my-4 h-24 mx-auto"
                height={250}
                width={250}
              />
            </div>
          </Link>
          <Icon />
          <Link
            href="https://www.upwork.com/freelancers/~013fbdbd02c10b41af"
            target="_blank"
            className="bg-white block w-auto py-2 rounded-3xl mt-4 hover:bg-red-400 transition-all hover:border-2 hover:border-solid border-red-400 border-2 border-solid hover:border-white text-center hover:text-white font-semibold text-lg"  >
            Hire Me
          </Link>
        </div>
        <div className="bg p-10 rounded-lg ">
          <Link href="/" target="_blank">
            <div className="image relative">
              <Image
                src={data.img3}
                alt={data.name}
                title={data.name}
                className="rounded-full w-24 my-4 h-24 mx-auto"
                height={250}
                width={250}
              />
            </div>
          </Link>
          <Icon />
          <Link
            href="/"
            target="_blank"
            className="bg-white block w-auto py-2 rounded-3xl mt-4 hover:bg-red-400 transition-all hover:border-2 hover:border-solid border-red-400 border-2 border-solid hover:border-white text-center hover:text-white font-semibold text-lg"   >
            Hire Me
          </Link>
        </div>
      </div>
    </Container>
  );
}

export function Icon() {
  return (
    <>
      <div className="text-center">
        <h3 className="text-2xl font-medium text-white">{data.name}</h3>
        <span className="text-slate-100 font-medium">{data.position}</span>
      </div>
      <hr className="my-5 text-slate-100" />
      <div>
        <ul className="flex gap-5 justify-between">
          <li className="flex flex-col justify-center text-center">
            <span className="bg-slate-100 icon h-16 w-16 rounded-full flex items-center justify-center text-2xl">
              <FaFacebook />
            </span>
          </li>
          <li className="flex flex-col justify-center text-center">
            <span className="bg-slate-100 icon h-16 w-16 rounded-full flex items-center justify-center text-2xl">
              <FaTwitter />
            </span>
          </li>
          <li className="flex flex-col justify-center text-center">
            <span className="bg-slate-100 icon h-16 w-16 rounded-full flex items-center justify-center text-2xl">
              <FaYoutube />
            </span>
          </li>
          <li className="flex flex-col justify-center text-center">
            <Link
              href="https://github.com/Muzammil327"
              target="_blank"
              className="bg-slate-100 icon h-16 w-16 rounded-full flex items-center justify-center text-2xl"
            >
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

const data = {
  id: "1",
  name: "Muzammil Safdar",
  position: "Developer",
  img1: "/fiverr.png",
  img2: "/upwork.png",
  img3: "/linkedin.png",
};
