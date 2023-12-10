//import { groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'
import { client } from './lib/client'
import { sanityFetch } from './lib/client'


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
