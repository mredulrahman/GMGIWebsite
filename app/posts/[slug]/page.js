import Image from "next/image";
import data from "@/app/data/posts.json";

const { postsData } = data;


export async function generateStaticParams() {
  return postsData.map((post) => ({ slug: String(post.id) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = postsData.find((p) => String(p.id) === slug) ?? null;
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}


function Sidebar() {
  return (
    <aside className="w-full lg:w-72 shrink-0">
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
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 font-[Raleway]">leave a reply</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {[
          { id: "name", placeholder: "Name *" },
          { id: "email", placeholder: "E-mail *" },
          { id: "website", placeholder: "Website" },
        ].map(({ id, placeholder }) => (
          <input
            key={id}
            type="text"
            placeholder={placeholder}
            className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors bg-gray-50 font-[Lato]"
          />
        ))}
      </div>
      <textarea
        placeholder="Message *"
        rows={5}
        className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors bg-gray-50 resize-none mb-4 font-[Lato]"
      />
      <button className="bg-gray-800 text-white px-6 py-3 text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 font-[Lato]">
        <span>›</span> post a comment
      </button>
    </div>
  );
}



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



function ImageBlock({ block }) {
  return (
    <div className="relative w-full overflow-hidden bg-gray-100 mb-4">
      <Image
        src={block.src}
        alt={block.alt ?? ""}
        width={800}
        height={500}
        className="w-full object-cover"
      />
    </div>
  );
}

function ThumbnailsBlock({ block }) {
  if (!block.items?.length) return null;
  return (
    <div className="grid grid-cols-3 gap-2 mt-2 mb-4">
      {block.items.map((item, i) => (
        <div key={i} className="aspect-4/3 overflow-hidden bg-gray-100">
          <Image
            src={item.src}
            alt={item.alt ?? `Thumbnail ${i + 1}`}
            width={300}
            height={225}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}

function TextBlock({ block }) {
  if (!block.value?.trim()) return null;
  return (
    <div className="mb-4">
      {block.value.split("\n\n").map((para, i) =>
        para.trim() ? (
          <p key={i} className="text-sm text-gray-700 leading-relaxed mb-3 font-[Lato]">
            {para.split("\n").map((line, j) => (
              <span key={j}>
                {line}
                {j < para.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        ) : null
      )}
    </div>
  );
}


function PostContent({ content }) {
  return (
    <>
      {content.map((block, i) => {
        if (block.type === "image") return <ImageBlock key={i} block={block} />;
        if (block.type === "thumbnails") return <ThumbnailsBlock key={i} block={block} />;
        if (block.type === "text") return <TextBlock key={i} block={block} />;
        return null;
      })}
    </>
  );
}


export default async function Page({ params }) {
  const { slug } = await params;
  const post = postsData.find((p) => String(p.id) === slug) ?? null;

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
            <PostMeta date={post.date} author={post.author} category={post.category} />
            <PostContent content={post.content} />
            <CommentForm />
          </main>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}