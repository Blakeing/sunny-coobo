import { groq } from 'next-sanity'

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client, 
    coverImage,
    description,
    duration, 
    overview,
    site, 
    "slug": slug.current,
    tags,
    title,
  }
`

export const projectsQuery = groq`
  *[_type == "project"] {
    _id,
    client, 
    coverImage,
    description,
    duration, 
    overview,
    site, 
    "slug": slug.current,
    tags,
    title,
  }
`

export const projectByWebTagQuery = groq`
  *[_type == "project" && "web" in tags] {
    _id,
    client, 
    coverImage,
    description,
    duration, 
    overview,
    site, 
    "slug": slug.current,
    tags,
    title,
  }`

export const projectByPrintTagQuery = groq`
*[_type == "project" && "print" in tags] {
  _id,
  client, 
  coverImage,
  description,
  duration, 
  overview,
  site, 
  "slug": slug.current,
  tags,
  title,
}`

export const projectByBrandTagQuery = groq`
*[_type == "project" && "brand" in tags] {
  _id,
  client, 
  coverImage,
  description,
  duration, 
  overview,
  site, 
  "slug": slug.current,
  tags,
  title,
}`
