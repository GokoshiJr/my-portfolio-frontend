// connect react client with sanity backend
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET,
  apiVersion: import.meta.env.VITE_API_VERSION,
  useCdn: import.meta.env.VITE_USE_CDN === 'true',
  token: import.meta.env.VITE_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)