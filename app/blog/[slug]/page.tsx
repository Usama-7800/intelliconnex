import { client } from "@/app/sanity/lib/client";
import { urlForImage } from "@/app/sanity/lib/image";
import { Post } from "@/app/sanity/models/Post";
import { formatDate } from "@/app/utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const posts: { slug: { current: string } }[] = await client.fetch(
    groq`*[_type == "post"]{
    slug
  }`,
    {},
    { next: { tags: ["post"] } }
  );
  const slugs = posts.map((post) => ({ slug: post.slug.current }));
  return slugs;
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { seoTitle, metaDescription } = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug]{
    seoTitle,
    metaDescription,
  }[0]`,
    { slug },
    { next: { tags: ["post"] } }
  );
  return {
    title: seoTitle,
    description: metaDescription,
  };
}

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug]{
    title,
    publishedAt,
    keywords,
    body,
    mainImage,
    author-> {
      name,
      image,
      slug
    }
  }[0]`,
    { slug },
    { next: { tags: ["post"] } }
  );

  return (
    <>
      <div className="flex flex-col w-fit mx-auto mb-20">
        <div className="w-full">
          <section className="max-w-[800px] w-full flex flex-col gap-8 mt-8">
            <Link
              href={`/blog`}
              className="text-orange-500 hover:underline text-[14px] mt-auto mr-auto -mb-4"
            >
              {"<-"} Go back to articles
            </Link>
            <div className="flex gap-4 items-center">
              <div className="h-2 w-4  bg-orange-500 rounded-full" />
              <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <div className="text-slate-400 text-xs -my-4">
              {post.keywords ? <>keywords: </> : <></>}
              {post.keywords?.map((kw: string, i: number) => (
                <span
                  className="after:content-[','] after:mr-1 last:after:hidden after:inline-block"
                  key={"kw" + i}
                >
                  {kw}
                </span>
              )) || <></>}
            </div>
            <div className="w-full h-[400px] flex bg-black/5 rounded-2xl overflow-hidden">
              {post.mainImage ? (
                <Image
                  className="object-cover w-full h-full"
                  src={urlForImage(post.mainImage).url()}
                  height={400}
                  width={768}
                  alt=""
                />
              ) : (
                <Image
                  src={"https://i.imgur.com/JWBggK1.png"}
                  alt=""
                  width={130}
                  height={130}
                  className="w-[130px] h-[130px] m-auto opacity-25"
                />
              )}
            </div>
            <div className="post__container">
              <div className="flex items-center justify-between gap-4 flex-wrap text-gray-500 -my-2">
                <div className="flex gap-2 items-center">
                  {post.author.image ? (
                    <Image
                      height={45}
                      width={45}
                      className="rounded-full -my-4 border border-slate-400"
                      src={urlForImage(post.author.image).url()}
                      alt="profile-picture"
                    />
                  ) : (
                    <></>
                  )}
                  <div className="flex flex-col">
                    <span>{post.author.name}</span>
                    <span className="text-sm text-slate-400">
                      posted on <b>{formatDate(post.publishedAt)}</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-px my-8 bg-zinc-300" />
              <div className="post__content tracking-normal leading-relaxed whitespace-pre-wrap flex flex-col gap-4 text-lg">
                <PortableText value={post.body} />
              </div>
            </div>
            <div className="flex gap-6 items-center  text-slate-400">
              <div className="flex-grow h-px bg-slate-300" />
              End of the article
              <div className="flex-grow h-px bg-slate-300" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
