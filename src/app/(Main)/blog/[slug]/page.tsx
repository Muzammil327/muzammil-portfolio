import { getBlog } from "@/sanity/schemas/blog/util";
import BlogHero from "@/src/components/blog/slug/hero";

interface Iprops {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Iprops) {
  const blog = await getBlog(params.slug);
  return (
    <>
      <BlogHero datas={blog} />
    </>
  );
}
