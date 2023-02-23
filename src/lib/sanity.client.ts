import 'server-only'

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity.api'
import {
  clientsQuery,
  projectByBrandTagQuery,
  projectByPrintTagQuery,
  projectBySlugQuery,
  projectByWebTagQuery,
} from '@/lib/sanity.queries'
import type { ClientPayload, ProjectPayload } from '@/types'

import { projectsQuery } from './sanity.queries'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
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

export async function getProjects({
  token,
}: {
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectsQuery)
}

export async function getProjectsByWebTag({
  token,
}: {
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectByWebTagQuery)
}

export async function getProjectsByPrintTag({
  token,
}: {
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectByPrintTagQuery)
}

export async function getProjectsByBrandTag({
  token,
}: {
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectByBrandTagQuery)
}

export async function getClients({
  token,
}: {
  token?: string
}): Promise<ClientPayload | undefined> {
  return await sanityClient(token)?.fetch(clientsQuery)
}
