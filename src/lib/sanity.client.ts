import 'server-only'

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity.api'
import {
  homePageQuery,
  homePageTitleQuery,
  projectByBrandTagQuery,
  projectByPrintTagQuery,
  projectBySlugQuery,
  projectByWebTagQuery,
} from '@/lib/sanity.queries'
import type { HomePagePayload, ProjectPayload } from '@/types'

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
