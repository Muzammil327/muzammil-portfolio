import Image from "next/image";
import Container from "../../elements/container/page";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function HireCard() {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-16">
        <div className="bg p-10 rounded-lg ">
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
          <Icon />
        </div>
        <div className="bg p-10 rounded-lg ">
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
          <Icon />
        </div>
        <div className="bg p-10 rounded-lg ">
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
          <Icon />
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
        <a
          href=""
          className="bg-white block w-auto py-2 rounded-3xl mt-4 hover:bg-red-400 transition-all hover:border-2 hover:border-solid border-red-400 border-2 border-solid hover:border-white"
        >
          Hire Me
        </a>
      </div>
      <hr className="my-5 text-slate-100" />
      <div>
        <ul className="flex gap-5 justify-between">
          <li className="flex flex-col justify-center text-center">
            <span className="bg-slate-100 icon h-16 w-16 rounded-full flex items-center justify-center text-2xl">
              <FaFacebook />
            </span>
            <span className="mt-1 text-white">Facebook</span>
          </li>
          <li className="flex flex-col justify-center text-center">
            <span className="bg-slate-100 icon h-16 w-16 rounded-full flex items-center justify-center text-2xl">
              <FaTwitter />
            </span>
            <span className="mt-1 text-white">Twitter</span>
          </li>
          <li className="flex flex-col justify-center text-center">
            <span className="bg-slate-100 icon h-16 w-16 rounded-full flex items-center justify-center text-2xl">
              <FaYoutube />
            </span>
            <span className="mt-1 text-white">You Tube</span>
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
