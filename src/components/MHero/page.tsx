"use client";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/components/elements/container/page"));
const Social = dynamic(() => import("@/components/elements/Social/page"));
import aboutData from "../about/resume/data";

export default function MHero() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mb-12">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
          <div className="lg:py-40 md:py-20 py-8 md:text-left text-center">
            <h1 className="xl:text-5xl lg:text-3xl md:text-2xl text-3xl md:my-8 my-4 font-bold text-black">
              {aboutData.head}
            </h1>
            <p className="text-base font-normal mb-7 text-slate-500 leading-7">
              {aboutData.description}
            </p>
            <Link href="/hireme" className="btn btn2 ">
              Hire Me
            </Link>
            <div className="mt-6 ">
              <Social />
            </div>
          </div>
          <div className="md:pt-56 pt-8">
            <Slider {...settings}>
              {SliderImage.map((data: any) => (
                <>
                  <div key={data.id} className="relative rounded-lg">
                    <Image
                      src={data.image}
                      alt=""
                      height={250}
                      width={300}
                      className="w-full px-2 h-auto rounded-lg"
                    />
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}

const SliderImage = [
  {
    id: "1",
    image: "/slider/structure.png",
  },
  {
    id: "2",
    image: "/slider/styling.png",
  },
  {
    id: "3",
    image: "/slider/framework.png",
  },
  {
    id: "4",
    image: "/slider/tools.png",
  },
  {
    id: "5",
    image: "/slider/cms.png",
  },
  {
    id: "5",
    image: "/slider/backend.png",
  },
];
