import { dataset, apiVersion, projectId } from './env';
import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
	useCdn: true
})

const revalidate = 60;

const builder = imageUrlBuilder(client) 
export function urlFor(source:any) {
	return builder.image(source)
} 

export async function getWebsiteInfo() {
  return client.fetch(
    groq`*[_type == "website"]`, 
		{next: {revalidate}}
  )
}

export async function getPreviews() {
	return client.fetch(
		groq`*[_type == "project"] | order(rank asc) { preview }`,	
		{next: {revalidate}}
	)
}

export async function getProject(slug:string) {
	return client.fetch(
		groq`*[_type == "project" && preview.slug == "${slug}"]`,
		{next: {revalidate}}
	)
}
