import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOGS_DATA, getBlogBySlug } from "@/data/blogsData";
import BlogDetailClient from "./ClientComponent";

const SITE_URL = "https://syedfaiezahmed.vercel.app";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: "artificialintelligence" },
    { slug: "cloudcomputing" },
    { slug: "cybersecurity" },
    { slug: "digitalmarketing" },
    { slug: "graphicdesigning" },
    { slug: "webdevelopmentblog" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: "Page Not Found",
    };
  }

  const pageUrl = `${SITE_URL}/blogs/${blog.slug}`;
  const pageTitle = `${blog.title} | Syed Faiez Ahmed`;

  return {
    title: blog.title,
    description: blog.content.introduction,
    alternates: {
      canonical: pageUrl,
    },
    keywords: [
      blog.category,
      "Syed Faiez Ahmed",
      "Software Engineering",
      "ERP Developer",
      "FinTech Developer",
    ],
    openGraph: {
      title: pageTitle,
      description: blog.content.introduction,
      url: pageUrl,
      type: "article",
      publishedTime: blog.publishedTime,
      authors: [blog.author],
      images: [
        {
          url: blog.imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: blog.content.introduction,
      images: [blog.imageUrl],
    },
  };
}

export default function BlogPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/blogs/${blog.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}/#article`,
        headline: blog.title,
        description: blog.content.introduction,
        image: blog.imageUrl,
        datePublished: blog.publishedTime,
        dateModified: blog.publishedTime,
        author: {
          "@type": "Person",
          name: blog.author,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Person",
          name: blog.author,
          url: SITE_URL,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: `${SITE_URL}/#blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailClient blogPost={blog} />
    </>
  );
}
