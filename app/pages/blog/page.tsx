import Link from "next/link";
import { defineQuery } from "next-sanity";

import { client } from "@/app/sanity/client";

import Cursor from "@/app/components/cursor";
import HambMenu from "@/app/components/hambMenu";
import NavBar from "@/app/components/navBar";

const BLOGS_QUERY = defineQuery(`*[ 
    _type == "blog"
    && defined(slug.current)
  ]{id, name, slug, date}|order(date desc)`);

export default async function Blog() {
  const blogs = await client.fetch(BLOGS_QUERY, {});
  console.log(blogs);
  return (
    <>
      <Cursor />
      <div className="mouse-cursor">
        <div className="cursor-inner"></div>
        <div className="cursor-outer"></div>
      </div>
      <NavBar />
      <HambMenu />
      <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12 ">
        <h1 className="text-4xl font-bold tracking-tighter">Blogs</h1>
        <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {blogs.map((blog: any) => (
            <li className="bg-white p-4 rounded-lg" key={blog.id}>
              <Link
                className="hover:underline"
                href={`/blogs/${blog?.slug?.current}`}
              >
                <h2 className="text-xl font-semibold">{blog?.name}</h2>
                {blog?.date && (
                  <p className="text-gray-500">
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
