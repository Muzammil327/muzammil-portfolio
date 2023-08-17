import Link from "next/link";
import dynamic from "next/dynamic";
const MHero = dynamic(() => import("@/components/MHero/page"));
const HSkill = dynamic(() => import("@/components/skill/home/page"));
import { ServivceHAll } from "../services/All/page";
import { PortfolioHAll } from "../portfolio/All/page";

export default function HomeTemplate() {
  return (
    <>
      <MHero />
      <ServivceHAll />
      <div className="flex items-center justify-center my-5">
        <Link href="/services" className="btn btn2">
          See All Services
        </Link>{" "}
      </div>
      <HSkill />
      <PortfolioHAll />
      <div className="flex items-center justify-center my-5">
        <Link href="/portfolio" className="btn btn2">
          See All Projects
        </Link>
      </div>
    </>
  );
}
