import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const Container = dynamic(() => import("@/components/elements/container/page"));
const Social = dynamic(() => import("@/components/elements/Social/page"));
import { Logo2 } from "../../elements/logo/page";
import aboutData from "../../about/resume/data";

export default function Footer() {
  return (
    <>
      <div className="bg-blue-50 mt-8">
        <section>
          <Container>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-16 pb-5">
              <div className="">
                <div className="mb-10 block">
                  <h3 className="mb-7 text-normal font-bold">
                    <Logo2 />
                  </h3>
                  <p>{aboutData.description}</p>
                </div>
                <div className="mb-10 block">
                  <h3 className="mb-5 text-lg font-bold">Connect</h3>
                  <Social />
                </div>
              </div>
              <div className="md:ml-5 ml-0">
                <h3 className="mb-5 text-lg font-bold">Useful Links</h3>
                <ul>
                  <li className="mb-3">
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="mb-3">
                    <Link href="/blog">Blogs</Link>
                  </li>
                  <li className="mb-3">
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                </ul>
              </div>
              <div className="md:ml-5 ml-0">
                <h3 className="mb-5 text-lg font-bold">Other</h3>
                <ul>
                  <li className="mb-3">
                    <Link href="/about">About US</Link>
                  </li>
                  <li className="mb-3">
                    <Link href="/contact">Contact US</Link>
                  </li>
                  <li className="mb-3">
                    <Link href="/">Our Team</Link>
                  </li>
                  <li className="mb-3">
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>

          <div className="text-center border-t-2 border-solid py-5 border-gray-200">
            <p className="mb-0 font-normal text-sm text-gray-600">
              Copyright © 2023 All rights reserved | This template is made with
              by{" "}
              <Link href="/" target="_blank" className="text-gray-600">
                Muzammil
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
