import { dataset, apiVersion, projectId } from './env';
import { createClient, groq } from 'next-sanity';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
})

export async function getSomething() {
  return client.fetch(
    groq`

		`,
  )
}
