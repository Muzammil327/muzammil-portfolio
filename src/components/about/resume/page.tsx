import Container from "../../elements/container/page";
import {
  FaPhone,
  FaCalendar,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import Social from "../../elements/Social/page";
import Image from "next/image";
import { getAbouts } from "@/sanity/schemas/about/util";
import { urlForImage } from "@/sanity/lib/image";
import aboutData from "./data";

export default function Resume() {
 
  return (
    <section className="home_banner_area relative z-10 mb-20">
      <Container>
        <div className="box_1620 relative rounded-xl bg-white p-7">
          <div className="banner_inner flex items-center relative w-full">
            <div className="banner_content text-left text-gray-700">
              <div className="media grid lg:grid-cols-2 grid-cols-1 gap-12">
                <div className="flex">
                  <div>
                    <Image
                      src={aboutData.pic}
                      alt={aboutData.name}
                      title={aboutData.name}
                      height={999}
                      width={999}
                      priority={true}
                    />
                  </div>
                </div>

                <div className="media-body pt-24">
                  <div className="personal_text text-gray-700">
                    <span className=" text-sm uppercase font-normal">
                      Hello Everybody, i am
                    </span>

                    <div className="mt-4">
                      <p className=" uppercase text-base font-medium mb-5">
                        <span className=" lg:text-5xl md:text-3xl sm:text-2xl text-xl uppercase mb-10 pb-10 text-orange-500">
                          {aboutData.name}
                        </span>{" "}
                        <br />
                        {aboutData.position}
                      </p>
                      <p className="text-gray-800 mb-10">{aboutData.description}</p>
                      <ul className="list basic_info">
                        <li className="mb-4">
                          <span className="relative pl-10 text-base text-gray-400">
                            <i className="absolute left-0 c1 text-">
                              <FaCalendar />
                            </i>
                            {aboutData.startDate}
                          </span>
                        </li>
                        <li className="mb-4">
                          <span className="relative pl-10 text-base text-gray-400">
                            <i className="absolute left-0 c1 text-">
                              <FaPhone />
                            </i>
                            {aboutData.phone}
                          </span>
                        </li>
                        <li className="mb-4">
                          <span className="relative pl-10 text-base text-gray-400">
                            <i className="absolute left-0 c1 text-">
                              <FaEnvelope />
                            </i>
                            {aboutData.email}
                          </span>
                        </li>
                        <li className="mb-4">
                          <span className="relative pl-10 text-base text-gray-400">
                            <i className="absolute left-0 c1 text-">
                              <FaLocationArrow />
                            </i>
                            {aboutData.location}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Social />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
