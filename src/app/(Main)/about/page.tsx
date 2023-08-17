import dynamic from "next/dynamic";
const AboutTemplate = dynamic(() => import("@/view/about/page"));

export default function About() {
  return (
    <div>
        <AboutTemplate />
    </div>
  )
}
