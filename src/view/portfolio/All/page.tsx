import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const Heading = dynamic(() => import("@/components/elements/Heading/page"));
import {
  PortfolioList,
  PortfolioHList,
} from "@/components/portfolio/List/page";
import { getProjects } from "@/sanity/schemas/portflio/util";

export async function PortfolioAll() {
  const project = await getProjects();
  return (
    <>
      <SHero
        head="Our Portfolio"
        para="Our virtual assistants are highly skilled professionals who can handle
        all your administrative, technical, and creative needs."
      />
      <PortfolioList datas={project} />
    </>
  );
}

export async function PortfolioHAll() {
  const project = await getProjects();
  return (
    <>
      <Heading head="View All Projects" subhead="Our Portfolio" />
      <PortfolioHList datas={project} />
    </>
  );
}
