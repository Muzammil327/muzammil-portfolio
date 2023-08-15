import { Skill } from "@/types/page";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface Iprops {
  datas: Skill;
}

export default function SkillCard({ datas }: Iprops) {
  return (
    <div className="skill">
      <Image
        src={urlForImage(datas.image).url()}
        className="image"
        alt={datas.title}
        title={datas.title}
        height="300"
        width="300"
      />
      <h4 className="text-xl my-4 capitalize">{datas.title}</h4>
      <div className="flex gap-4 mt-3">
        <p className="btn btn2">{datas.year}</p>
        <p className="btn btn2">{datas.position}</p>
      </div>
    </div>
  );
}
