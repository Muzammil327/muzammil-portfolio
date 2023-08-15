import BlogList from "@/components/blog/List/page";
import SHero from "@/src/components/SHero/page";
import { getsBlogs } from "@/sanity/schemas/blog/util";

export default async function BlogAll() {
  const blog = await getsBlogs();

  return (
    <>
      <SHero
        head="Our Blogs"
        para="Our virtual assistants are highly skilled professionals who can handle
        all your administrative, technical, and creative needs."
      />
      
      <BlogList datas={blog} />
    </>
  );
}
