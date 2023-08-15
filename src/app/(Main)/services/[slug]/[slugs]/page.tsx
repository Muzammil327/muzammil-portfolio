import PortfolioHero from "@/src/components/services/slug/slug/hero";
import Portflioleft from "@/src/components/portfolio/slug/left";
import PortfolioRight from "@/src/components/portfolio/slug/right";
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
    </Container>
  );
}
