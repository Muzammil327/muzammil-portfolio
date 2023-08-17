import dynamic from "next/dynamic";
const BlogHero = dynamic(() => import("@/components/blog/slug/hero"));
const Blogleft = dynamic(() => import("@/components/blog/slug/left"));
const BlogRight = dynamic(() => import("@/components/blog/slug/right"));
const Container = dynamic(() => import("@/components/elements/container/page"));
import { getBlog } from "@/sanity/schemas/blog/util";

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
          <Blogleft datas={blog} />
        </div>
        <div className="md:col-span-2 col-span-1">
          <BlogRight datas={blog} />
        </div>
      </div>
    </Container>
  );
}
