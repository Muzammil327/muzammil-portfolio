import {useCdn,apiVersion} from '../env'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";


export const client = {
  projectId, 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  dataset,
  apiVersion,
  useCdn
};