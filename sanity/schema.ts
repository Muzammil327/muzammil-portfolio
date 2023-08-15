import { type SchemaTypeDefinition } from 'sanity'

import portflio from './schemas/portflio/Schema'

import servicetag from './schemas/service/other/Schema'
import service from './schemas/service/Schema'

import skill from './schemas/skill/Schema'

import about from './schemas/about/Schema'

import author from './schemas/blog/author/Schema'
import blog from './schemas/blog/Schema'

import blockContent from './schemas/blockContent'
import post from './schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    portflio,
    
    servicetag,
    service,

    about, 

    skill, 

    author,
    blog,
    post, 
    blockContent
  ],
}
