import { defineQuery, PortableText, type SanityDocument } from "next-sanity";
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

  return (
    <main className="flex flex-col justify-center align-center mx-auto gap-12 p-20">
      <div className="mb-4 text-2xl pt-2">
        <Link href="/blogs">← Back to blogs</Link>
      </div>
      <div className="flex flex-col justify-evenly align-center"> 
        <Image
          src={eventImageUrl || "https://via.placeholder.com/550x310"}
          alt={name || "Blog"}
          className="pb-14 m-auto"
          height="310"
          width="550"
        />
         <h2 className="pb-10 text-center">{name}</h2>
        <div className="flex flex-col justify-center space-y-4 text-xl">
          {text && text.length > 0 && (
            <div className="prose max-w-none">
              <PortableText value={text} />
            </div>
          )}
          </div>
      </div>
    </main>
  );
}