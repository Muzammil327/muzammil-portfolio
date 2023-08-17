import { FaFacebook, FaYoutube,FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Social() {
  return (
    <>
      <ul className="flex items-center gap-4">
        <li>
          <Link
            href="/"
            className="bg h-10 w-10 text-white text-xl rounded-md flex items-center justify-center"
          >
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="bg h-10 w-10 text-white text-xl rounded-md flex items-center justify-center"
          >
            <FaYoutube />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/muzammil-safdar"
            target="_blank"
            className="bg h-10 w-10 text-white text-xl rounded-md flex items-center justify-center"
          >
            <FaLinkedinIn />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Muzammil327"
            target="_blank"
            className="bg h-10 w-10 text-white text-xl rounded-md flex items-center justify-center"
          >
            <FaGithub />
          </Link>
        </li>
      </ul>
    </>
  );
}
