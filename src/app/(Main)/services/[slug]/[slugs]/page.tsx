import PortfolioHero from "@/src/components/services/slug/slug/hero";
import Portflioleft from "@/src/components/services/slug/slug/left";
import PortfolioRight from "@/src/components/services/slug/slug/right";
import Container from "@/src/components/elements/container/page";
import { getserviceother } from "@/sanity/schemas/service/other/util";


type Iprops = {
  params: { slugs: string };
};

export default async function Services({ params }: Iprops) {
  const service = await getserviceother(params.slugs);
  
  return (
    <Container>
      <PortfolioHero datas={service} />
      <div className="grid md:grid-cols-7 grid-cols-1 gap-8">
        <div className="md:col-span-5 col-span-2">
          <Portflioleft datas={service}  />
        </div>
        <div className="md:col-span-2 col-span-1">
          <PortfolioRight datas={service} />
        </div>
      </div>
    </Container>
  );
}
