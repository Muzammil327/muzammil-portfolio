import { getBlog } from "@/sanity/schemas/blog/util";
import BlogHero from "@/src/components/blog/slug/hero";
import Portflioleft from "@/src/components/blog/slug/left";
import PortfolioRight from "@/src/components/blog/slug/right";
import Container from "@/src/components/elements/container/page";

interface Iprops {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Iprops) {
  const blog = await getBlog(params.slug);

  return (
    <Container>
      <BlogHero datas={blog} />
      <div className="grid md:grid-cols-7 grid-cols-1 gap-8">
        <div className="md:col-span-5 col-span-2">
          <Portflioleft datas={blog} />
        </div>
        <div className="md:col-span-2 col-span-1">
          <PortfolioRight datas={blog} />
        </div>
      </div>
    </Container>
  );
}
