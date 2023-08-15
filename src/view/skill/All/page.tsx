import { getSkills } from "@/sanity/schemas/skill/util";
import SkillCardList from "@/src/components/skill/skill/list/page";
import SHero from "@/src/components/SHero/page";

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
