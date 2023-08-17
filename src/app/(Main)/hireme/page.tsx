import dynamic from "next/dynamic";
const HireTemplate = dynamic(() => import("@/view/hireme/page"));

export default function page() {
  return (
    <>
    <HireTemplate />
    </>
  )
}
