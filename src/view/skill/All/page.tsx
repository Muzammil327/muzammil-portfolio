import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const SkillCardList = dynamic(() => import("@/components/skill/skill/list/page"));
import { getSkills } from "@/sanity/schemas/skill/util";

export default async function SkillAll() {
  const skill = await getSkills();
  return (
    <>
      <SHero
        head="My Skills"
        para="Our virtual assistants are highly skilled professionals who can handle
        all your administrative, technical, and creative needs."
      />
      <SkillCardList datas={skill} />
    </>
  );
}
