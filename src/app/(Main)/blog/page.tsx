import dynamic from "next/dynamic";
const BlogAll = dynamic(() => import("@/view/blog/All/page"));

export default function Blogs() {
  return (
    <>
      <BlogAll />
    </>
  );
}
