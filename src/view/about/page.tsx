import SHero from "@/src/components/SHero/page";
import Resume from "@/src/components/about/resume/page";

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
