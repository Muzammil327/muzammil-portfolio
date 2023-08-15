import { Author, Blog } from "@/types/page";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

interface IProps {
  datas: Blog;
}

export default function BlogItem({ datas }: IProps) {
  return (
    <>
  <Link href={`/blog/${datas.slug}`}>
  <div className="flex flex-col">
        <div className="image">
          <Image
            src={urlForImage(datas.image).url()}
            alt={datas.title}
            title={datas.title}
            className=" rounded-tl-md rounded-tr-md w-full"
            height={250}
            width={250}
          />
        </div>
        <div className="head bg-slate-100 rounded-bl-md rounded-br-md p-6">
          <span className="bg py-1 px-5 rounded-full text-white">
            {datas.tag}
          </span>
          <h1 className="text-xl py-4 font-semibold">{datas.title}</h1>
          <p className="text-base leading-7 text-slate-600">
            {datas.description}
          </p>
          {datas.author.map((data: Author) => (
            <>
              <div className="author flex gap-4 py-4">
                <Image
                  src={urlForImage(data.image).url()}
                  alt={data.title}
                  title={data.title}
                  className="h-12 w-12 rounded-full items-center"
                  height={48}
                  width={48}
                />
                <div className="flex flex-col">
                  <span className="text-black">{data.title}</span>
                  <span className="text-slate-500">{datas.date}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
  </Link>
    </>
  );
}
