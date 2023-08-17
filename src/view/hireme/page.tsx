import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const HireCard = dynamic(() => import("@/components/hire/card/page"));

export default function HireTemplate() {
  return (
    <>
      <SHero
        head="Hire Me"
        para="Our virtual assistants are highly skilled professionals who can handle
        all your administrative, technical, and creative needs."
      />
      <HireCard />
    </>
  );
}
