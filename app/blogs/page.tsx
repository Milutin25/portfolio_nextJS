import Link from "next/link";
import Image from "next/image";
import { defineQuery } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';


import { client } from "../sanity/client";
import Cursor from "@/app/components/cursor";
import NavBar from "../components/navBar";
import HambMenu from "../components/hambMenu";

const options = { next: { revalidate: 60 } };
const builder = imageUrlBuilder(client);

const BLOG_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
]{_id, name, image, slug, date}|order(date desc)`);

export default async function IndexPage() {
  const blogs = await client.fetch(BLOG_QUERY, {}, options);

  return (
    <>
    <Cursor/>
    <div className="mouse-cursor">
          <div className="cursor-inner"></div>
          <div className="cursor-outer"></div>
      </div>
    <NavBar/>
    <HambMenu/>
    <div className="kioto_tm_section">
      <div className="container">
      <div className="kioto_tm_title pt-20 pb-10 ">
        <span>// Blogs</span>
      </div>
      <div className="blogs">
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog._id}>
            <Link
              href={`/blogs/${blog?.slug?.current}`}
            >
              {blog?.image && (
                 <Image className='blogimg' 
                    src={builder.image(blog.image).url()} 
                    alt={blog.name} 
                    height={200}
                    width={300}
                    />
              )}
              <h2>{blog?.name}</h2>
              {blog?.date && (
                <p>
                  {new Date(blog.date).toLocaleDateString()}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
    </>
  );
}