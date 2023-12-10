import { dataset, apiVersion, projectId, useCdn } from './env';
import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'
import type {QueryParams} from '@sanity/client'
//import 'server-only'
import { Website } from '@/utils/sanity_types';


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
	useCdn
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


const builder = imageUrlBuilder(client) 
export function urlFor(source:any) {
	return builder.image(source)
} 

export async function getWebsiteInfo() {
  return sanityFetch<Website>({
    query: `*[_type == "website"]`, 
		tags: ['website']	
	})
}

export async function getPreviews() {
	return client.fetch(
		groq`*[_type == "project"] | order(rank asc) { preview }`,	
	)
}

export async function getProject(slug:string) {
	return client.fetch(
		groq`*[_type == "project" && preview.slug == "${slug}"]`,
	)
}
