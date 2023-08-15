import SkillCard from "../item/page";
import { Skill } from "@/types/page";
import Container from "@/src/components/elements/container/page";

interface Iprops {
  datas: Skill[];
}

export default function SkillCardList({ datas }: Iprops) {
  return (
    <Container>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 mt-8">
        {datas.map((data: Skill) => (
          <>
            <SkillCard datas={data} />
          </>
        ))}
      </div>
    </Container>
  );
}
