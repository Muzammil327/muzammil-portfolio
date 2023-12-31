import dynamic from "next/dynamic";
const SHero = dynamic(() => import("@/components/SHero/page"));

export default function ContactTemplate() {
  return (
    <>
      <SHero
        head="Contact Us"
        para="Our virtual assistants are highly skilled professionals who can handle
          all your administrative, technical, and creative needs."
      />
    </>
  );
}
