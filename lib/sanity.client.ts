import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  homePageQuery,
  homePageTitleQuery,
  projectBySlugQuery,
  projectsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import type { HomePagePayload, ProjectPayload } from 'types'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

export async function getProjects() {
  return await client.fetch(projectsQuery)
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectBySlugQuery, { slug })
}

export async function getHomePage({
  token,
}: {
  token?: string
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery)
}

export async function getHomePageTitle({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(homePageTitleQuery)
}
