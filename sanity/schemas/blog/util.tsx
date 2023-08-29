import { createClient, groq } from "next-sanity";
import {client} from "@/sanity/lib/client";
import { Blog } from "@/types/page";



export async function getsBlogs(): Promise<Blog[]> {
  return createClient(client).fetch(
    groq`*[_type == "blog"]{
      _id,
      title,
      "image": image.asset->url,
      "slug": slug.current,
      description,
      tag,
      date,
      author[]->{
        _id,
         title,
         "image": image.asset->url,
         "slug": slug.current,
         description
      },
      body[]
    }`
  );
}
export async function getBlog(slug: string): Promise<Blog> {
  return createClient(client).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      "image": image.asset->url,
      "slug": slug.current,
      description,
      tag,
      date,
      author[]->{
        _id,
         title,
         "image": image.asset->url,
         "slug": slug.current,
         description
      },
      body[]
    }`,
    { slug }
  );
}

// export async function getsBlogs(): Promise<[]> {
//   return createClient(client).fetch(combinedQuery);
// }

// interface HtmlContent {
//   _type: 'htmlContent';
//   // other fields specific to HTML content
// }

// interface CssContent {
//   _type: 'cssContent';
//   // other fields specific to CSS content
// }

// type CombinedContent = HtmlContent | CssContent;

// // client.fetch<CombinedContent[]>(combinedQuery)