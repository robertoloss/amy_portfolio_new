import { groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'
import type {QueryParams} from '@sanity/client'
import { client } from './lib/client';
//import 'server-only'


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
  return sanityFetch<any>({
    query: `*[_type == "website"]`, 
		tags: ['website']	
	})
}

export async function getPreviews() {
	return sanityFetch<any>({
		query: `*[_type == "project"] | order(rank asc) { preview }`,	
		tags: ['project']
	})
}

export async function getProject(slug:string) {
	return sanityFetch<any>({
		query: `*[_type == "project" && preview.slug == "${slug}"]`,
		tags: ['project']
	})
}
