import PortfolioHero from "@/src/components/services/slug/hero";
import Portflioleft from "@/src/components/portfolio/slug/left";
import PortfolioRight from "@/src/components/portfolio/slug/right";
import Container from "@/src/components/elements/container/page";
import { getService } from "@/sanity/schemas/service/util";
import { Types } from "@/src/types/page";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";


type Iprops = {
  params: { slug: string };
};

export default async function Services({ params }: Iprops) {
  const service = await getService(params.slug);

  return (
    <Container>
      <PortfolioHero datas={service} />
      <>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {service.types.map((data: Types) => (
            <>
              <Link href={`/services/${service.slug}/${data.slugs}`}>
                
              <div className="flex gap-4 p-6 bg-slate-100" key={data._id}>
                <div className="left relative">
                  <Image
                    src={urlForImage(data.image).url()}
                    alt={data.title}
                    title={data.title}
                    className="rounded-full"
                    height={120}
                    width={120}
                  />
                </div>
                <div className="right">
                  <h3 className="mb-2 text-lg font-semibold">{data.title}</h3>
                  <p className="text-base text-slate-500">
                    {data.description}
                  </p>
                </div>
              </div>
              </Link>
            </>
          ))}
        </div>
      </>
      {/* <div className="grid md:grid-cols-7 grid-cols-1 gap-8">
        <div className="md:col-span-5 col-span-2">
          <Portflioleft datas={project}  />
        </div>
        <div className="md:col-span-2 col-span-1">
          <PortfolioRight datas={project} />
        </div>
      </div> */}
    </Container>
  );
}
