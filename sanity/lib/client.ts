//import { createClient } from 'next-sanity'
//import { SanityValues } from "../../sanity.config";
//import { createClient } from "@sanity-typed/client"

import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from '../env'
import type {QueryParams} from '@sanity/client'
import 'server-only'


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    cache: 'force-cache',
    next: {
      //revalidate: 30, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  })
}
