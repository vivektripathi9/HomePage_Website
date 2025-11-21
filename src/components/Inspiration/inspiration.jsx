"use client";

import Image from "next/image";

const posts = [
  {
    title: "We prepared something special for you this holiday",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipis cing elit.",
    image: "/f1.png",
    author: "Admin",
    date: "April 28, 2019",
    comments: "Comment (01)",
    featured: true,
  },
  {
    title: "Latest makeup trends you can pull off",
    image: "/f2.png",
    author: "Admin",
    date: "April 28, 2019",
  },
  {
    title: "Brands that are changing beauty",
    image: "/f3.png",
    author: "Admin",
    date: "April 28, 2019",
  },
  {
    title: "Best tips for munu beauty",
    image: "/f4.png",
    author: "Admin",
    date: "April 28, 2019",
  },
];

export default function InspirationSection() {
  const featured = posts.find((post) => post.featured);
  const sidePosts = posts.filter((post) => !post.featured);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-12 px-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            className="text-3xl font-semibold leading-tight text-[#2E2E2E] sm:text-[42px]"
            style={{ fontFamily: "serif" }}
          >
            Insights & Inspiration
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-black" />
            <span className="text-pink-400 text-xl">❀</span>
            <span className="h-px w-12 bg-black" />
          </div>
          <p className="max-w-3xl text-sm text-[#555] sm:text-base">
            Explore tips, trends, and stories that elevate your beauty and lifestyle.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featured && (
            <article className="bg-white flex flex-col text-left">
              <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-[#f5f5f5]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="w-full space-y-4 pt-6">
                <div className="flex flex-wrap items-center gap-6 text-xs text-[#777]">
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {featured.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {featured.comments}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E]" style={{ fontFamily: "serif" }}>{featured.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{featured.excerpt}</p>
                <button className="mt-4 border border-[#2E2E2E] bg-transparent px-6 py-2 text-sm font-medium text-[#2E2E2E] transition hover:bg-[#2E2E2E] hover:text-white">
                  Read more
                </button>
              </div>
            </article>
          )}

          <div className="space-y-6 w-full">
            {sidePosts.map((post) => (
              <article key={post.title} className="flex gap-4">
                <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-3">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#777]">
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-[#2E2E2E]" style={{ fontFamily: "serif" }}>{post.title}</h4>
                  <button className="w-max border border-[#2E2E2E] bg-transparent px-5 py-2 text-xs font-medium text-[#2E2E2E] transition hover:bg-[#2E2E2E] hover:text-white">
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
