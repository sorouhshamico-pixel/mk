import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site.ar";
import { postsAr, getPostAr } from "@/lib/posts.ar";

export function generateStaticParams() {
  return postsAr.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostAr(slug);
  if (!post) return {};

  const url = `${site.url}/ar/blog/${post.slug}`;
  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${site.url}/blog/${post.slug}`,
        ar: url,
        "x-default": `${site.url}/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url,
      type: "article",
      locale: "ar_SA",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric" });
}

export default async function PostPageAr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostAr(slug);
  if (!post) notFound();

  const url = `${site.url}/ar/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    inLanguage: "ar",
    headline: post.title,
    description: post.seo.description,
    datePublished: post.date,
    dateModified: post.date,
    url,
    image: `${site.url}${post.cover}`,
    author: { "@type": "Person", name: site.name, url: `${site.url}/ar` },
    publisher: { "@type": "Person", name: site.name, url: `${site.url}/ar` },
    mainEntityOfPage: url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${site.url}/ar` },
      { "@type": "ListItem", position: 2, name: "المدونة", item: `${site.url}/ar/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="mx-auto flex max-w-[760px] flex-col gap-5 px-6 pt-16 sm:pt-24">
        <Link
          href="/ar/blog"
          className="group inline-flex w-fit items-center gap-2 text-sm text-secondary hover:text-ink"
        >
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          المدونة
        </Link>

        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          <span className="text-accent">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">{post.title}</h1>
        <p className="text-[15px] leading-[1.8] text-secondary sm:text-lg">{post.excerpt}</p>
      </header>

      <div className="mx-auto max-w-[1000px] px-6 py-10">
        <div className="overflow-hidden rounded-2xl border-[0.5px] border-hairline shadow-2xl">
          <Image
            src={post.cover}
            alt=""
            width={1200}
            height={630}
            className="w-full"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-[760px] flex-col gap-6 px-6 pb-24">
        {post.content.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2 key={i} className="mt-4 text-xl text-ink">
                {block.text}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={i} className="flex flex-col gap-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-[1.8] text-secondary">
                    <span aria-hidden="true" className="text-accent">
                      ←
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="text-[15px] leading-[2] text-secondary">
              {block.text}
            </p>
          );
        })}

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t-[0.5px] border-hairline pt-8">
          <Link
            href="/ar/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl"
          >
            لديك مشروع مشابه؟
          </Link>
          <Link
            href="/ar/blog"
            className="rounded-full border-[0.5px] border-hairline px-6 py-3 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-surface hover:shadow-md"
          >
            مقالات أخرى
          </Link>
        </div>
      </div>
    </article>
  );
}
