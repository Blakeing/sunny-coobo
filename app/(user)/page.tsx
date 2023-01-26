import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";
import Image from "next/image";
import web from "../../public/bg_web_dog.webp";
import print from "../../public/print-landing.png";

const query = groq`*[_type == "post"] {
    ...,
    author->,
    categories[]->,
} | order(_createdAt desc)`;

export const revalidate = 30;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
        <h1>Preview</h1>
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="grid-col-1 mt-16 grid max-w-7xl gap-[3vw] px-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="pb-2.5 text-5xl font-bold text-web">Web.</h2>
          <h3 className="pb-2.5 text-xl capitalize text-[#444]">
            Compete with the big dogs
          </h3>
          <p className="pb-5  leading-6 text-sm text-body">
            Whether you’re a start-up or an industry leader, the Internet helps
            to level the playing field. If you’re not taking advantage of that,
            your competition thanks you.
          </p>
          <a className="font-bold uppercase tracking-wide text-web underline underline-offset-4">
            Whoof!
          </a>
        </div>
        <div className="relative flex justify-center">
          <Image className="z-10" alt="Web" src={web} height={420} />
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
          >
            <path
              d="M480.8 168.7C524.5 210.6 543.4 285.2 528.9 353.7 514.5 422.2 466.7 484.5 409.7 502.2 352.6 519.8 286.4 492.8 237.5 458.3 188.6 423.8 157 381.8 142.2 331.7 127.4 281.7 129.2 223.5 158.3 184.9 187.4 146.2 243.7 127.1 306.1 122.2 368.5 117.3 437.1 126.7 480.8 168.7Z"
              fill="#b33232"
            ></path>
          </svg>
        </div>
      </section>

      <section className="grid-col-1 mt-16 grid max-w-7xl gap-[3vw] px-10 lg:grid-cols-2">
        <div className="relative flex justify-center">
          <Image
            className="z-10 scale-x-[-1]"
            alt="Print"
            src={print}
            height={420}
          />
          <svg
            className="absolute inset-0 h-full  w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
          >
            <path
              d="M416 239.2C456.5 303 499.5 371.5 480.6 428.2 461.7 485 380.8 530 297.8 531.3 214.8 532.5 129.7 490 93.7 423.4 57.8 356.8 71.1 266.2 113.7 201.1 156.2 136 228.1 96.5 283 106.3 337.8 116.2 375.6 175.3 416 239.2Z"
              fill="#45b3a0"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="pb-2.5 text-5xl font-bold text-print">Print.</h2>
          <h3 className="pb-2.5 text-xl  capitalize text-[#444]">
            Use Our Trees Wisely
          </h3>
          <p className="pb-5  leading-6 text-sm text-body">
            From business cards to billboards, a brand represents the heart and
            soul of your product or service. Don’t just print what you make.
            Elevate why you sell it and why we’re all better for it.
            “Information is cheap. Meaning is expensive.” - George Dyson
          </p>
          <a className="font-bold uppercase tracking-wide text-print underline underline-offset-4">
            Print!
          </a>
        </div>
      </section>
      <BlogList posts={posts} />
    </main>
  );
}
