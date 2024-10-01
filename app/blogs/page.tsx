import Link from "next/link";
import Image from "next/image";
import { defineQuery } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../lib/sanity/client";
import Cursor from "@/app/components/cursor";
import NavBar from "../components/navBar";
import HambMenu from "../components/hambMenu";

const options = { next: { revalidate: 60 } };
const builder = imageUrlBuilder(client);

const BLOG_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
]{_id, name, image, slug, date, tags}|order(date desc)`);

export default async function IndexPage() {
  const blogs: Blog[] = await client.fetch(BLOG_QUERY, {}, options);

  interface Blog {
    _id: number;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
    slug: {
      current: string;
    };
    name: string;
    date: string;
    tags: string[];
  }

  const allTags = blogs.map((blog) => blog.tags);
  const uniqueTags = Array.from(new Set(allTags));

  return (
    <>
      <Cursor />
      <div className="mouse-cursor">
        <div className="cursor-inner"></div>
        <div className="cursor-outer"></div>
      </div>
      <NavBar />
      <HambMenu />
      <div className="kioto_tm_section">
        <div className="container">
          <div className="kioto_tm_title pt-20 pb-10 ">
            <span>// Blogs</span>
          </div>
          <Link href="">
            <div className="tags">
              {uniqueTags.length > 0 && (
                <div className="tag-list">
                  {uniqueTags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
          <div className="blogs">
            <ul>
              {blogs.map((blog: Blog) => (
                <li key={blog._id}>
                  <Link href={`/blogs/${blog.slug.current}`}>
                    {blog.image && (
                      <Image
                        className="blogimg"
                        src={builder.image(blog.image).url()}
                        alt={blog.name}
                        height={200}
                        width={300}
                      />
                    )}
                    <h2>{blog.name}</h2>
                    {blog.date && (
                      <p>{new Date(blog.date).toLocaleDateString()}</p>
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
