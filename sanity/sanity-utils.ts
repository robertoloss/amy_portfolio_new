import { dataset, apiVersion, projectId } from './env';
import { createClient, groq } from 'next-sanity';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
	useCdn: true
})

export async function getWebsiteInfo() {
  return client.fetch(
    groq`*[_type == "website"]`,
  )
}

export async function getPreviews() {
	return client.fetch(
		groq`*[_type == "project"] | order(rank asc) { preview }`
	)
}

export async function getProject(slug:string) {
	return client.fetch(
		groq`*[_type == "project" && preview.slug == "${slug}"]`
	)
}
