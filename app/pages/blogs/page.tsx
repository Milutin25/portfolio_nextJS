import { defineQuery } from "next-sanity";
import { client } from "@/app/lib/sanity/client";
import Cursor from "@/app/components/cursor";
import NavBar from "@/app/components/navBar";
import HambMenu from "@/app/components/hambMenu";
import { FilterBlogs } from "@/app/components/filterBlogs";

interface Blog {
  _id: string;
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

const options = { next: { revalidate: 60 } };

const BLOG_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
]{_id, name, image, slug, date, tags}|order(date desc)`);

const TAG_QUERY = (tag: string) => {
  return defineQuery(`*[
    _type == "blog" 
    && defined(slug.current) 
    && $tags in tags
  ]{
    _id, name, image, slug, date, tags
  } | order(date desc)`);
};

export default async function IndexPage() {
  const allBlogs: Blog[] = await client.fetch(BLOG_QUERY, {}, options);
  const frontEndBlogs: Blog[] = await client.fetch(
    TAG_QUERY("Front End"),
    { tags: "Front End" },
    options
  );
  const typeScriptBlogs: Blog[] = await client.fetch(
    TAG_QUERY("TypeScript"),
    { tags: "TypeScript" },
    options
  );
  const htmlBlogs: Blog[] = await client.fetch(
    TAG_QUERY("HTML"),
    { tags: "HTML" },
    options
  );

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
          <div className="kioto_tm_title pt-20 pb-10">
            <span className="pb-5">// Blogs</span>
            <FilterBlogs
              allBlogs={allBlogs}
              frontEndBlogs={frontEndBlogs}
              typeScriptBlogs={typeScriptBlogs}
              htmlBlogs={htmlBlogs}
            />
          </div>
        </div>
      </div>
    </>
  );
}
