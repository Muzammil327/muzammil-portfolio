import dynamic from "next/dynamic";
const SkillAll = dynamic(() => import("@/view/skill/All/page"));

export default function Skill() {
  return (
    <>
        <SkillAll />
    </>
  )
}
