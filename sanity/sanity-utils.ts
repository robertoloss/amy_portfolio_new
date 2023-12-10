import { dataset, apiVersion, projectId, useCdn } from './env';
import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
	useCdn
})


const builder = imageUrlBuilder(client) 
export function urlFor(source:any) {
	return builder.image(source)
} 

export async function getWebsiteInfo() {
  return client.fetch(
    groq`*[_type == "website"]`, 
  )
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
