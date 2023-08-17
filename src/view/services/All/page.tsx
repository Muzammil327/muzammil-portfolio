import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const Heading = dynamic(() => import("@/components/elements/Heading/page"));
import { ServiceList, ServiceHList } from "@/components/services/List/page";
import { getServices } from "@/sanity/schemas/service/util";

export async function ServivceAll() {
  const service = await getServices();
  return (
    <>
      <SHero
        head="Our Services"
        para="Our virtual assistants are highly skilled professionals who can handle
        all your administrative, technical, and creative needs."
      />
      <ServiceList datas={service} />
    </>
  );
}

export async function ServivceHAll() {
  const service = await getServices();
  return (
    <>
      <Heading head="Offerings to my Clients" subhead="Our Services" />
      <ServiceHList datas={service} />
    </>
  );
}
