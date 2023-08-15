import { Blog } from "@/types/page";
import BlogItem from "../item/page";
import Container from "@/components/elements/container/page";

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
