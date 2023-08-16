"use client";
import Link from "next/link";
import { Logo1, Logo2 } from "@/components/elements/logo/page";
import Container from "@/components/elements/container/page";
import { FaBars, FaTimes, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";

export default function Header() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const saveFile = () => {
    saveAs(
      "/resume.pdf",
      "frontend-resume.pdf"
    );
  };

  return (
    <div className="home py-4">
      <Container>
        <div className="flex items-center md:gap-16 gap-8 justify-between">
          {/* logo  */}
          <div>
            <Logo1 />
          </div>
          {/* link */}
          <div className="lg:hidden z-50 block mr-4 transition-all bg-black p-2 rounded-md  ">
            <span
              className="cursor-pointer text-2xl text-white z-50"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? <FaTimes /> : <FaBars />}
            </span>
          </div>

          <div
            className={
              open
                ? "flex-col pt-7 p-4 overlay bg-slate-50 transition-all element md:w-[60%] w-full"
                : "lg:flex hidden items-center gap-8"
            }
          >
            <div className={open ? "mx-auto my-6" : "hidden"}>
              <Logo2 />
            </div>
            <ul
              className={
                open ? "flex-col m-2" : "items-center lg:gap-8 gap-4 flex"
              }
            >
              {Nav.map((data: any) => (
                <>
                  <li
                    className={
                      open
                        ? "py-3 text-lg font-medium text-gray-800 border-b-2 border-solid border-slate-200"
                        : "text-lg font-medium text-white "
                    }
                  >
                    <span
                      onClick={() => {
                        router.push(`${data.link}`);
                        setOpen(false);
                      }}
                      className={ open
                        ? "flex items-center justify-between cursor-pointer"
                        : "cursor-pointer "}
                    >
                      <span className={ open
                          ? "text-black"
                          : "text-white font-semibold "} >{data.text}</span>
                      <span className={open ? "block" : "hidden"}>
                        <FaAngleRight />
                      </span>
                    </span>
                  </li>
                </>
              ))}
            </ul>

            <button
             onClick={saveFile}
              className={open ? "btn btn2 flex w-full my-4" : "btn btn1"}
            >
              Download CV
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Nav = [
  {
    id: 1,
    link: "/about",
    text: "About Us",
  },
  {
    id: 2,
    link: "/contact",
    text: "Contact Us",
  },
  {
    id: 3,
    link: "/services",
    text: "Services",
  },
  {
    id: 4,
    link: "/portfolio",
    text: "Portfolio",
  },
  {
    id: 5,
    link: "/blog",
    text: "Blog",
  },
];
