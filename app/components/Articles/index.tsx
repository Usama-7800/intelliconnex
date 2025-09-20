import { client } from "@/app/sanity/lib/client";
import { urlForImage } from "@/app/sanity/lib/image";
import { truncateString } from "@/app/utils";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export async function Articles({ limit }: { limit?: number }) {
  const posts = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc){
    title,
    publishedAt,
    slug,
    mainImage,
    excerpt,
    author-> {
      name
    }
  }`,
    {},
    { next: { tags: ["post"] } }
  );
  return (
    <div className="flex relative flex-col gap-6 lg:gap-12 lg:mb-32 mb-10 md:mb-20 px-6 bg-[#FFFFFF] -mt-10 md:mt-0">
      <div id="articles" className="absolute -top-44"></div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {posts.length ? (
          posts.slice(0, limit).map((post: any, i: number) => (
            <div key={"art" + i} className="w-full max-w-md mx-auto">
              <div className="bg-slate-50 border h-full rounded-2xl overflow-hidden flex flex-col">
                {post.mainImage ? (
                  <Image
                    width={455}
                    height={200}
                    src={urlForImage(post.mainImage)
                      .width(455)
                      .height(200)
                      .url()}
                    alt=""
                    className="h-[200px] w-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-auto h-[360px] bg-slate-200 relative flex items-center justify-center">
                    <Image
                      src={"https://i.imgur.com/JWBggK1.png"}
                      alt=""
                      width={130}
                      height={130}
                      className="opacity-25 absolute"
                    />
                  </div>
                )}

                <div className="p-4 flex flex-col h-full gap-4">
                  <h3 className="font-bold">{post.title}</h3>
                  <p className="text-sm">{truncateString(post.excerpt, 123)}</p>
                  <div className="mt-auto flex justify-between items-end">
                    <span className="text-xs text-slate-400">
                      Written by <b>{post.author.name}</b>
                    </span>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="text-orange-500 font-bold ml-auto   hover:underline text-[14px]"
                    >
                      Go to article {"->"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-800 text-center py-40 rounded-2xl bg-black/10 col-span-full">
            Coming soon...
          </p>
        )}
      </div>
      {limit ? (
        <>
          <div className="flex ml-auto lg:mx-auto text-sm">
            <Link
              href={"/blog"}
              className="rounded-full flex justify-center mr-auto py-2 text-sm lg:text-base lg:py-1.5 px-10 border-orange-500 border lg:ring ring-orange-500/20 hover:border-orange-500/20 transition-all duration-500"
            >
              See More Articles {"->"}
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
