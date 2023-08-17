import dynamic from "next/dynamic";
const ContactTemplate = dynamic(() => import("@/view/contact/page"));

export default function Contact() {
  return (
    <div>
        <ContactTemplate />
    </div>
  )
}
