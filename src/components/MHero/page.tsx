'use client'
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import Container from "../elements/container/page";

import Social from "../elements/Social/page";
import aboutData from "../about/resume/data";

export default function MHero() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="mb-16">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
        <div className="lg:py-44 md:py-20 py-8 md:text-left text-center">
          <h1 className="xl:text-5xl lg:text-3xl md:text-2xl text-3xl md:my-8 my-4 font-bold text-black">{aboutData.head}</h1>
          <p className="text-base font-normal mb-7 text-slate-500 leading-7">
            {aboutData.description}
          </p>
          <Link href="/hireme" className="btn btn2 ">Hire Me</Link>
          <div className="mt-6 ">
            <Social />
          </div>
        </div>
        <div className="md:pt-12 pt-8">
       
      <Slider {...settings}>
        
          {SliderImage.map((data:any) => (
            <>
            <div key={data.id} className="relative rounded-lg">
            <Image src={data.image} 
            alt="" 
            height={250} width={300} 
            className="w-full px-2 h-auto rounded-lg" />
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
    id:"1",
    image:'/mhero.webp'
  },
  {
    id:"2",
    image:'/mhero.webp'
  },
  {
    id:"3",
    image:'/mhero.webp'
  },
  {
    id:"4",
    image:'/mhero.webp'
  },
  {
    id:"5",
    image:'/mhero.webp'
  }
]