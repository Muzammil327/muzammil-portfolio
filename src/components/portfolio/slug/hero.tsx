import Link from "next/link";
import Image from "next/image";
import Container from "../../elements/container/page";
import mhero from "@/public/mhero.webp";
import Social from "../../elements/Social/page";
import { urlForImage } from "@/sanity/lib/image";
import { Portfolio } from "@/src/types/page";

interface Iprops {
  datas: Portfolio;
}

export default function PortfolioHero({ datas }: Iprops) {
  return (
    <div className="mb-16">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
          <div className="lg:py-44 md:py-20 py-8 md:text-left text-center">
            <h1 className="xl:text-5xl lg:text-3xl md:text-2xl text-3xl md:my-8 my-4 font-bold text-black">
              {datas.title}
            </h1>
            <p className="text-base font-normal mb-7 text-slate-500 leading-7">
              {datas.description}
            </p>
            <Link href={datas.livelink} target="_blank" className="btn btn2 ">
              Demo Live
            </Link>
            <div className="mt-6 ">
              <Social />
            </div>
          </div>
          <div className="md:pt-12 pt-8 relative my-auto">
            <Image
              src={urlForImage(datas.image).url()}
              alt={datas.title}
              title={datas.title}
              height={250}
              width={300}
              className="w-full h-[400px] rounded-lg my-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
