import React from "react";
import Container from "../../elements/container/page";
import {
  FaClock,
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function FooterForm() {
  return (
    <div className="footer md:my-20 my-8">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="left pt-24">
            <div className="grid grid-cols-2 gap-y-8">
              <div className="text-center">
                <span className="flex items-center justify-center mb-2">
                    <FaPhone className="border-2 c1 border-solid border-slate-400 h-12 w-12 p-3 rounded-full bg-slate-100"/>
                </span>
                <h5 className="text-lg text-center">Phone</h5>
                <div className="text-center">
                  <a
                    href="tel:(603)555-0123"
                    className="my-2 lg:text-lg text-base text-slate-500"
                  >
                    (92) 314-4878266
                  </a>
                </div>
              </div>
              <div className="text-center">
              <span className="flex items-center justify-center mb-2">
                    <FaEnvelope className="border-2 c1 border-solid border-slate-400 h-12 w-12 p-3 rounded-full bg-slate-100"/>
                </span>
                <h5 className="text-lg text-center">Email</h5>
                <div className="text-center">
                  <a
                    href="mailto:muzammilsafdar528982@gmail.com"
                    className="my-2 lg:text-lg text-base text-slate-500"
                    >
                    muzammilsafdar528982@gmail.com

                  </a>
                </div>
              </div>
              <div className="text-center">
              <span className="flex items-center justify-center mb-2">
                    <FaLocationArrow className="border-2 c1 border-solid border-slate-400 h-12 w-12 p-3 rounded-full bg-slate-100"/>
                </span>
                <h5 className="text-lg text-center">Location</h5>
                <div className="text-center">
                  <a
                    href="https://www.google.com/maps/place/New+Jersey,+USA/@40.0677539,-76.0434655,8z/data=!3m1!4b1!4m10!1m2!2m1!1s2464+Royal+Ln.+Mesa,+New+Jersey+45463!3m6!1s0x89c0fb959e00409f:0x2cd27b07f83f6d8d!8m2!3d40.0583238!4d-74.4056612!15sCiUyNDY0IFJveWFsIExuLiBNZXNhLCBOZXcgSmVyc2V5IDQ1NDYzkgEIdXNfc3RhdGXgAQA!16zL20vMDVmamY?entry=ttu"
                    target="_blank"
                    className="my-2 lg:text-lg text-base text-slate-500"
                    >
                    Lahore, Punjab, Pakistan
                  </a>
                </div>
              </div>
              <div className="text-center">
              <span className="flex items-center justify-center mb-2">
                    <FaClock className="border-2 c1 border-solid border-slate-400 h-12 w-12 p-3 rounded-full bg-slate-100"/>
                </span>
                <h5 className="text-lg text-center">Work Hours</h5>
                <div className="text-center">
                  <div     className="my-2 lg:text-lg text-base text-slate-500">
                    9:00am to 5:00pm
                  </div>
                  <div     className="my-2 lg:text-lg text-base text-slate-500">
                    Monday to Friday
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-form">
            <div className="text-center my-4">
              <div className="subtitle-text c1 text-lg font-semibold">
                Contact Us
              </div>
              <h2 className="text-white md:text-2xl text-xl mb-6 font-bold">
                Contact Us for Any Information
              </h2>
            </div>
            <div className="form-block-footer w-form">
              <form>
                <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                  <input
                    type="text"
                    className="text-field w-full"
                    placeholder="First name"
                    required
                  />
                  <input
                    type="text"
                    className="text-field w-full"
                    placeholder="Last name"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                  <input
                    type="email"
                    className="text-field w-full"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="tel"
                    className="text-field w-input"
                    placeholder="Phone"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your text"
                  maxLength={5000}
                  className="textarea-form w-full"
                  defaultValue=""
                  required
                />
                <input type="submit" className="btn btn2 w-full" />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
