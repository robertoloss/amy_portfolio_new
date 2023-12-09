/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'
const dataset = "production"

const projectId = "ymsa6no9"
//const projectId = process.env.SANITY_STUDIO_PROJECT_ID
//const dataset = process.env.SANITY_STUDIO_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
