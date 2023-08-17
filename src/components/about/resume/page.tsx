import Image from "next/image";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/components/elements/container/page"));
const Social = dynamic(() => import("@/components/elements/Social/page"));
import {
  FaPhone,
  FaCalendar,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import aboutData from "./data";

export default function Resume() {
  return (
    <section className="home_banner_area relative z-10 lg:mb-20 md:mb-12 mb-4">
      <Container>
        <div className="box_1620 relative rounded-xl bg-white p-7">
          <div className="banner_inner flex items-center relative w-full">
            <div className="banner_content text-left text-gray-700">
              <div className="media grid lg:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-7 gap-2">
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

                <div className="media-body lg:pt-24 md:pt-14 pt-6">
                  <div className="personal_text text-gray-700">
                    <span className=" text-sm uppercase font-normal">
                      Hello Everybody, i am
                    </span>

                    <div className="mt-4">
                      <p className=" uppercase text-base font-medium mb-5">
                        <span className=" lg:text-5xl text-4xl capitalize mb-10 pb-10 text-orange-500">
                          {aboutData.name}
                        </span>{" "}
                        <br />
                        <span className="text-lg capitalize">
                          {aboutData.position}
                        </span>
                      </p>
                      <p className="text-gray-800 md:mb-10 mb-3 leading-7 text-base">
                        {aboutData.description}
                      </p>
                      <ul className="list basic_info mb-3">
                        <li className="md:mb-4 mb-3">
                          <span className="relative lg:pl-10 pl-6  md:text-base text-sm text-gray-400 flex items-center">
                            <i className="absolute left-0 c1 text-base">
                              <FaCalendar />
                            </i>
                            {aboutData.startDate}
                          </span>
                        </li>
                        <li className="md:mb-4 mb-3">
                          <span className="relative lg:pl-10 pl-6  md:text-base text-sm text-gray-400 flex items-center">
                            <i className="absolute left-0 c1 text-base">
                              <FaPhone />
                            </i>
                            {aboutData.phone}
                          </span>
                        </li>
                        <li className="md:mb-4 mb-3">
                          <span className="relative lg:pl-10 pl-6  md:text-base text-sm text-gray-400 flex items-center">
                            <i className="absolute left-0 c1 text-base">
                              <FaEnvelope />
                            </i>
                            {aboutData.email}
                          </span>
                        </li>
                        <li className="md:mb-4 mb-3">
                          <span className="relative lg:pl-10 pl-6  md:text-base text-sm text-gray-400 flex items-center">
                            <i className="absolute left-0 c1 text-base">
                              <FaLocationArrow />
                            </i>
                            {aboutData.location}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="my-3">
                      <Social />
                    </div>
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
