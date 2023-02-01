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

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id, 
    footer,
    overview, 
    showcaseProjects[]->{
      _type,
      coverImage, 
      overview, 
      "slug": slug.current,
      tags, 
      title, 
    }, 
    title, 
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`
