import SHero from "@/src/components/SHero/page";
import HireCard from "@/src/components/hire/card/page";

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
