import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));
const Resume = dynamic(() => import("@/components/about/resume/page"));

export default function AboutTemplate() {
  return (
    <>
      <SHero
        head="About Us"
        para="Our virtual assistants are highly skilled professionals who can handle
        all your administrative, technical, and creative needs."
      />
      <Resume />
    </>
  );
}
