import { SchemaTypeDefinition } from 'sanity'

import reviewSection from '~/schemas/reviewSection'
import siteSettings from '~/schemas/siteSettings'

import blockContent from './blockContent'
import post from './post'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, reviewSection, siteSettings],
}
