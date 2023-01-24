import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`*[_type == "post"] {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
    }`;

  const post = await client.fetch(query, { slug });

  return (
    <article>
      <h1>{post.title}</h1>
      <h1>{post.author.name}</h1>
    </article>
  );
}

export default Post;
