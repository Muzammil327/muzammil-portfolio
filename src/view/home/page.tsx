import MHero from "@/components/MHero/page";
import { ServivceHAll } from "../services/All/page";
import { PortfolioHAll } from "../portfolio/All/page";
import HSkill from "@/src/components/skill/home/page";
import Link from "next/link";

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
