import React from "react";
import Social from "../../elements/Social/page";
import { Blog, Skill } from "@/src/types/page";
import { FaArrowRight } from "react-icons/fa";

interface Iprops {
  datas: Blog;
}

export default function PortfolioRight({ datas }: Iprops) {
  return (
    <div>
      <div className="flex flex-col">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Date
        </span>
        <span className="mb-4 text-lg text-slate-500">{datas.date}</span>
      </div>

      <div className="flex flex-col">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Services
        </span>
        <span className="mb-4 text-lg text-slate-500">{datas.tag}</span>
      </div>

      <div className="flex flex-col mb-4">
        <span className="my-3 text-[22px] font-semibold text-black leading-7">
          Share on:
        </span>
        <span>
          <Social />
        </span>
      </div>

    </div>
  );
}
