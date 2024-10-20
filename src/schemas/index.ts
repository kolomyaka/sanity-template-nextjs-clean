import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import reviewSection from '~/schemas/reviewSection'
import siteSettings from '~/schemas/siteSettings'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, reviewSection, siteSettings],
}
