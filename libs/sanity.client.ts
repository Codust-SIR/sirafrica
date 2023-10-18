import { createClient, type SanityClient } from 'next-sanity'
import { client } from '../services/sentry'

export function getClient(preview?: { token: string }): SanityClient {

  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()
