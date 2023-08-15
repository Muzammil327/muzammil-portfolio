import { createClient, groq } from "next-sanity";
import {client} from "@/sanity/lib/client";
import { About } from "@/types/page";


export async function getAbouts(): Promise<About> {
  return createClient(client).fetch(
    groq`*[_type == "about"] {
      _id,
      "pic": image.asset->url,
      title,
      position,
      description,
      date,
      phone,
      email,
      location
    }`
  );
}