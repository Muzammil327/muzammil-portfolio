/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

import service from "./sanity/schemas/service/Schema";
import servicetag from "./sanity/schemas/service/other/Schema";

import portflio from "./sanity/schemas/portflio/Schema";
import skill from "./sanity/schemas/skill/Schema";
import about from "./sanity/schemas/about/Schema";
import author from './sanity/schemas/blog/author/Schema'
import blog from './sanity/schemas/blog/Schema'
import post from "./sanity/schemas/post";


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: "ds7yn1d8",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schema' folder

  schema,
  plugins: [
    vercelDeployTool(),
    deskTool({
      structure: (S, context) => {
        console.log(context); // returns { currentUser, dataset, projectId, schema, getClient, documentStore }
        return S.list()
          .title("Portflio Website")
        
          
          .items([
            S.listItem()
              .title("Projects")
              .schemaType("portflio")
              .child(
                S.documentList()
                  .title("Portfolio projects")
                  .filter('_type == "portflio"')
              ),

            S.divider(),

            S.listItem()
              .title("Services")
              .child(
                S.documentList()
                  .title("Services")
                  .schemaType("service")
                  .filter('_type == "service"')
              ),

            S.listItem()
              .title("Service Tag")
              .child(
                S.documentList()
                  .title("Services Tag")
                  .schemaType("servicetag")
                  .filter('_type == "servicetag"')
              ),

            S.divider(),
            
            S.listItem()
              .title("Skill")
              .child(
                S.documentList()
                  .title("Skill")
                  .schemaType("skill")
                  .filter('_type == "skill"')
              ),

            S.divider(),
           
            S.listItem()
              .title("About")
              .child(
                S.documentList()
                  .title("About")
                  .schemaType("about")
                  .filter('_type == "about"')
              ),

            S.divider(),
          
            S.listItem()
              .title("Author")
              .child(
                S.documentList()
                  .title("Author")
                  .schemaType("author")
                  .filter('_type == "author"')
              ),
            S.listItem()
              .title("Blog")
              .child(
                S.documentList()
                  .title("Blog")
                  .schemaType("blog")
                  .filter('_type == "blog"')
              ),

            S.divider(),
          ]);
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
