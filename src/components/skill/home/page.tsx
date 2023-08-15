import React from "react";
import Container from "../../elements/container/page";
import Image from "next/image";
import react from '@/public/react.png'
import nextjs from '@/public/nextjs.png'
import tailwind from '@/public/tailwindcss.png'
import sanity from '@/public/sanity.png'
import Social from "../../elements/Social/page";
import Link from "next/link";

export default function HSkill() {
  return (
    <section className="section-img-background py-10 ">
      <Container>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <div className="left col-span-2 md:mt-40 mt-0">
            <h2 className="text-white mb-8 text-5xl font-bold">
              How We Can Make Your Business Grow
            </h2>
            <Link href="/skill" className="btn btn2">
              See All Skills
            </Link>
            <div className="mt-8">
            <Social />
            </div>
          </div>
          <div className="right col-span-3">
            <div className="grid md:grid-cols-2 grid-cols-1 mt-4 gap-3">
              <div className="skill">
                <Image
                  src={react}
                  className="image"
                  alt=""
                  title=""
                  height="300"
                  width="300"
                />
                <h4 className="text-xl my-4 capitalize">React JS</h4>
                <div className="flex gap-4 mt-3">
                  <p className="btn btn2">2 year</p>
                  <p className="btn btn2">Intermediate</p>
                </div>
              </div>
              <div className="skill">
              <Image
                  src={nextjs}
                  className="image"
                  alt=""
                  title=""
                  height="300"
                  width="300"
                />
                <h4 className="text-xl my-4 capitalize">Next JS</h4>
                <div className="flex gap-4 mt-3">
                  <p className="btn btn2">1.5+ year</p>
                  <p className="btn btn2">Intermediate</p>
                </div>
              </div>
              <div className="skill">
              <Image
                  src={tailwind}
                  className="image"
                  alt=""
                  title=""
                  height="300"
                  width="300"
                />
                <h4 className="text-xl my-4 capitalize">Tailwind CSS</h4>
                <div className="flex gap-4 mt-3">
                  <p className="btn btn2">1.5+ year</p>
                  <p className="btn btn2">Intermediate</p>
                </div>
              </div>
              <div className="skill">
              <Image
                  src={sanity}
                  className="image"
                  alt=""
                  title=""
                  height="300"
                  width="300"
                />
                <h4 className="text-xl my-4 capitalize">Sanity</h4>
                <div className="flex gap-4 mt-3">
                  <p className="btn btn2">1.5+ year</p>
                  <p className="btn btn2">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
