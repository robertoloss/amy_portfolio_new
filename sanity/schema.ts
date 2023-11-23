import { type SchemaTypeDefinition } from 'sanity';
import picture from './schema/picture';
import project from './schema/project'
import section from './schema/section'
import preview from './schema/preview';
import three_cols from './schema/three_cols';
import website from './schema/website';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
		picture,
		project,
		section,
		preview,
		three_cols,
		website
	],
}
