import { defineQuery } from "next-sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/app/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const options = { next: { revalidate: 60 } };

const BLOG_QUERY = defineQuery(`*[
    _type == "blog" &&
    slug.current == $slug
  ][0]{
  ...,
  "date": coalesce(date, now())
}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function BlogsPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await client.fetch(BLOG_QUERY, params, options);
  if (!blog) {
    notFound();
  }
  const {
    name,
    date,
    image,
    text
  } = blog;

  const eventImageUrl = image
    ? urlFor(image)?.width(550).height(310).url()
    : null;

    const components: PortableTextComponents = {
      block: {
        normal: ({ children }) => <p className="font-serif p-2">{children}</p>,
        h1: ({ children }) => <h1 className="font-serif text-4xl border-b-2">{children}</h1>,
        h2: ({ children }) => <h2 className="font-serif text-3xl text-green-600 pb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="font-serif text-2xl text-orange-600 pb-2 text-center">{children}</h3>,
        h4: ({ children }) => <h4 className="font-serif text-xl text-blue-600 border-b-2 border-blue-400 pb-2">{children}</h4>,
        h5: ({ children }) => <h5 className="font-serif text-lg text-red-600 pb-2">{children}</h5>,
        h6: ({ children }) => <h6 className="font-serif text-base text-gray-600 pb-2">{children}</h6>,
      },
      list: {
        bullet: ({ children }) => <ul className="font-serif list-disc pt-3 mt-2 ml-5">{children}</ul>,
        number: ({ children }) => <ol className="font-serif list-decimal p-8 mt-1">{children}</ol>,
      },
      listItem: ({ children }) => <li className="mb-4">{children}</li>,
    };
  return (
    <main className="flex flex-col justify-center align-center mx-auto gap-12 p-20">
    <div className="mb-4 text-2xl">
      <Link href="/blogs">← Back to blogs</Link>
    </div>
    <div className="flex flex-col justify-evenly align-center max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white"> 
      <Image
        src={eventImageUrl || "https://via.placeholder.com/550x310"}
        alt={name || "Blog"}
        className="pb-14 m-auto"
        height="310"
        width="550"
      />
      <h2 className="font-serif pb-10 text-center font-serif text-4xl">{name}</h2>
      <div className="flex flex-col justify-center space-y-4 text-xl">
        {text && text.length > 0 && (
          <div className="prose max-w-none">
            <PortableText value={text} components={components}/>
          </div>
        )}
      </div>
    </div>
  </main>
);
}