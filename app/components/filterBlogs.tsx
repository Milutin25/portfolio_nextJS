"use client";

import { useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../lib/sanity/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);

interface FilterBlogProps {
  allBlogs: any[];
  frontEndBlogs: any[];
  typeScriptBlogs: any[];
  htmlBlogs: any[];
}

export function FilterBlogs({
  allBlogs,
  frontEndBlogs,
  typeScriptBlogs,
  htmlBlogs,
}: FilterBlogProps) {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  let filteredBlogs;

  switch (selectedTag) {
    case "Front End":
      filteredBlogs = frontEndBlogs;
      break;
    case "TypeScript":
      filteredBlogs = typeScriptBlogs;
      break;
    case "HTML":
      filteredBlogs = htmlBlogs;
      break;
    default:
      filteredBlogs = allBlogs;
  }

  return (
    <div>
      <div className="tags">
        <button className="tag" onClick={() => setSelectedTag("all")}>
          All
        </button>
        <button className="tag" onClick={() => setSelectedTag("Front End")}>
          Front End
        </button>
        <button className="tag" onClick={() => setSelectedTag("TypeScript")}>
          TypeScript
        </button>
        <button className="tag" onClick={() => setSelectedTag("HTML")}>
          HTML
        </button>
      </div>
      <div className="blogs">
        <ul>
          {filteredBlogs.map((blog) => (
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
                {blog.date && <p>{new Date(blog.date).toLocaleDateString()}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
