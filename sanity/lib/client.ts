//import { createClient } from 'next-sanity'
//import { SanityValues } from "../../sanity.config";
//import { createClient } from "@sanity-typed/client"
import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from '../env'



export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


