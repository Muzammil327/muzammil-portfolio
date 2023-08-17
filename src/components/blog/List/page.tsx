import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/components/elements/container/page"));
const BlogItem = dynamic(() => import("@/components/blog/item/page"));
import { Blog } from "@/types/page";

interface IProps {
  datas: Blog[];
}

export default function BlogList({ datas }: IProps) {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20">
        {datas.map((data: any) => (
          <>
            <BlogItem datas={data} />
          </>
        ))}
      </div>
    </Container>
  );
}
