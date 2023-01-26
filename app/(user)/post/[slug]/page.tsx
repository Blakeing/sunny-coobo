import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { useMemo } from "react";

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
    <div className="relative overflow-hidden bg-white py-16">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className=" block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </span>
            <span className="block mt-2 text-center text-lg font-semibold text-coobo">
              {post.author.name}
            </span>
          </h1>
        </div>
        <div className="prose prose-lg prose-coobo mx-auto mt-6 text-gray-500">
          <PortableText value={post.body} />
        </div>
      </div>
    </div>
  );
}

export default Post;
