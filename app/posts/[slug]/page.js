"use client"

import Head from "next/head";
import { useState } from "react";
import data from "@/app/data/posts.json";

const { postsData } = data;

// ─── generateStaticParams (replaces getStaticPaths) ──────────────────────────
export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: [...post.slug.split("/"), String(post.id)],
  }));
}
 
// ─── generateMetadata (replaces getStaticProps + <Head>) ─────────────────────
export async function generateMetadata({ params }) {
  const id = parseInt(params.slug[params.slug.length - 1], 10);
  const post = postsData.find((p) => p.id === id) ?? null;
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description ?? post.title,
  };
}
 
// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar() {
  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="flex mb-8 border border-gray-200">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-2 text-sm outline-none font-[Lato]"
        />
        <button className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-700 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </button>
      </div>
 
      <SidebarSection title="Recent Comments" />
 
      <SidebarSection title="Archives">
        <ul className="space-y-1">
          {["November 2022", "October 2022"].map((m) => (
            <li key={m}>
              <a href="#" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 font-[Lato] transition-colors">
                {m}
              </a>
            </li>
          ))}
        </ul>
      </SidebarSection>
 
      <SidebarSection title="Categories">
        <a href="#" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 font-[Lato] transition-colors">
          Uncategorized
        </a>
      </SidebarSection>
 
      <SidebarSection title="Meta">
        <ul className="space-y-1">
          {["Log in", "Entries feed", "Comments feed", "WordPress.org"].map((item) => (
            <li key={item}>
              <a href="#" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 font-[Lato] transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </SidebarSection>
    </aside>
  );
}
 
function SidebarSection({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-base font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-300 font-[Raleway]">
        {title}
      </h3>
      {children}
    </div>
  );
}
 
function CommentForm() {
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });
 
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 font-[Raleway]">leave a reply</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {[
          { key: "name",    placeholder: "Name *"   },
          { key: "email",   placeholder: "E-mail *" },
          { key: "website", placeholder: "Website"  },
        ].map(({ key, placeholder }) => (
          <input
            key={key}
            type="text"
            placeholder={placeholder}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors bg-gray-50 font-[Lato]"
          />
        ))}
      </div>
      <textarea
        placeholder="Message *"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows={5}
        className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors bg-gray-50 resize-none mb-4 font-[Lato]"
      />
      <button className="bg-gray-800 text-white px-6 py-3 text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 font-[Lato]">
        <span>›</span> post a comment
      </button>
    </div>
  );
}
 
// ─── Post Meta Bar ────────────────────────────────────────────────────────────
function PostMeta({ date, author, category }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-5 font-[Lato]">
      <span className="flex items-center gap-1">
        <svg className="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {date}
      </span>
      <span>|</span>
      <span>Posted by: {author}</span>
      <span>|</span>
      <span>Category: {category}</span>
      <span className="ml-auto flex items-center gap-1">
        <svg className="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        No Comments
      </span>
    </div>
  );
}
 
// ─── Thumbnail Gallery ────────────────────────────────────────────────────────
function ThumbnailGallery({ thumbnails, alt }) {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {thumbnails.map((src, i) => (
        <div key={i} className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={src}
            alt={`${alt} ${i + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
 
// ─── Layout: id 1 & 2 — Photo post ───────────────────────────────────────────
function PhotoPost({ post }) {
  return (
    <>
      <PostMeta date={post.date} author={post.author} category={post.category} />
      <div className="w-full aspect-video overflow-hidden bg-gray-100 mb-4">
        <img src={post.images[0]} alt={post.title} className="w-full h-full object-cover" />
      </div>
      {post.description && (
        <div className="mb-4">
          {post.description.split("\n").map((line, i) => (
            <p key={i} className="text-sm text-gray-700 leading-relaxed font-[Lato]">{line}</p>
          ))}
        </div>
      )}
      <ThumbnailGallery thumbnails={post.thumbnails} alt={post.title} />
    </>
  );
}
 
// ─── Layout: id 3 — Training post ────────────────────────────────────────────
function TrainingPost({ post }) {
  return (
    <>
      <PostMeta date={post.date} author={post.author} category={post.category} />
      <div className="w-full overflow-hidden bg-gray-100 mb-4">
        <img src={post.images[0]} alt={post.title} className="w-full object-cover" />
      </div>
      <p className="text-sm text-gray-700 leading-relaxed mb-6 font-[Lato]">
        {post.description}
      </p>
      <div className="overflow-hidden bg-gray-100 mb-4">
        <img src={post.images[1]} alt="Certificate presentation" className="w-full object-cover" />
      </div>
      <ThumbnailGallery thumbnails={post.thumbnails} alt={post.title} />
      <div className="overflow-hidden bg-gray-100 mt-4">
        <img src={post.images[5]} alt="Group photo" className="w-full object-cover" />
      </div>
    </>
  );
}
 
// ─── Layout: id 4 — Award post ───────────────────────────────────────────────
function AwardPost({ post }) {
  return (
    <>
      <PostMeta date={post.date} author={post.author} category={post.category} />
      {post.images.map((src, i) => (
        <div key={i} className="overflow-hidden bg-gray-100 mb-4">
          <img src={src} alt={`Congratulations banner ${i + 1}`} className="w-full object-cover" />
        </div>
      ))}
      {post.description.split("\n\n").map((para, i) =>
        para.trim() ? (
          <p key={i} className="text-sm text-gray-700 leading-relaxed mb-4 font-[Lato]">
            {para.trim()}
          </p>
        ) : null
      )}
    </>
  );
}
 
// ─── Layout selector by id ────────────────────────────────────────────────────
function PostBody({ post }) {
  switch (post.id) {
    case 1: return <PhotoPost post={post} />;
    case 2: return <PhotoPost post={post} />;
    case 3: return <TrainingPost post={post} />;
    case 4: return <AwardPost post={post} />;
    default: return <PhotoPost post={post} />;
  }
}
 
// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page({ params }) {
  const id = parseInt(params.slug[params.slug.length - 1], 10);
  const post = postsData.find((p) => p.id === id) ?? null;
 
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center font-[Lato]">
        <p className="text-gray-500">Post not found.</p>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <main className="flex-1 min-w-0">
            <PostBody post={post} />
            <CommentForm />
          </main>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}