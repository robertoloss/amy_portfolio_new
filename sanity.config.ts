/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {apiVersion, dataset, projectId} from './sanity/env'
// import {schema} from './sanity/schema'

//import { defineConfig } from "@sanity-typed/types";
import type { InferSchemaValues } from "@sanity-typed/types";
import { project } from './sanity/schema/project';
import { picture } from './sanity/schema/picture';
import { picture_section } from './sanity/schema/picture_section';
import { preview } from './sanity/schema/preview';
import { quote } from './sanity/schema/quote';
import { section } from './sanity/schema/section';
import { three_cols } from './sanity/schema/three_cols';
import { website } from './sanity/schema/website';


const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
		types: [
			project,
			picture,
			picture_section,
			preview,
			quote,
			section,
			three_cols,
			website
		]
	},
  plugins: [
    deskTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

export default config

export type SanityValues = InferSchemaValues<typeof config>
