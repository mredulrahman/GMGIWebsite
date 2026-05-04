// app/services/[slug]/page.jsx
// OR pages/services/[slug].jsx (Pages Router version below)
// This file covers BOTH routers — see comments inline.

// ─────────────────────────────────────────────
// 1.  DATA  (put this in lib/services.js)
// ─────────────────────────────────────────────
import data from "@/app/data/history.json"; // adjust path as needed
import Image from "next/image";
const { servicesData } = data;
// ─────────────────────────────────────────────
// 2.  NEXT.JS APP ROUTER  (app/services/[slug]/page.jsx)
// ─────────────────────────────────────────────

/** generateStaticParams — tells Next.js which slugs to pre-render */
export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: String(service.id) }));
}

/** generateMetadata — per-page SEO */
export async function generateMetadata({ params }) {
  const { slug } = await params;  
  const service = servicesData.find((s) => String(s.id) === slug) ?? null;
  if (!service) return { title: "Service Not Found" };
  return { title: service.title };
}

/** Default export — the page component */
// export default async function ServicePage({ params }) {
//   const { slug } = await params; 
//   const service = servicesData.find((s) => String(s.id) === slug) ?? null;

//   if (!service) {
//     return (
//       <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
//         <div className="text-center">
//           <p className="text-6xl mb-4">404</p>
//           <p className="text-xl text-slate-400">Service not found.</p>
//         </div>
//       </main>
//     );
//   }

//   return <ServiceLayout service={service} />;
// }

// ─────────────────────────────────────────────
// 3.  PAGES ROUTER  (pages/services/[slug].jsx)
//     Uncomment if you use the Pages Router.
// ─────────────────────────────────────────────
/*
export async function getStaticPaths() {
  return {
    paths: servicesData.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug) ?? null;
  return { props: { service } };
}

export default function ServicePage({ service }) {
  if (!service) return <p>Not found</p>;
  return <ServiceLayout service={service} />;
}
*/

// ─────────────────────────────────────────────
// 4.  SHARED UI  (works for both routers)
// ─────────────────────────────────────────────

/* ─── Page entry ─── */
export default async function ServicePage({ params }) {
  const { slug } = await params; 
  const service = servicesData.find((s) => String(s.id) === slug) ?? null;

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <p className="text-6xl mb-4">404</p>
          <p className="text-xl text-slate-400">Service not found.</p>
        </div>
      </main>
    );
  }
 
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-2 py-14 space-y-16">
        {service.sections.map((section, idx) =>
          section.type === "text" ? (
            <TextSection key={idx} section={section} />
          ) : (
            <TextImageSection key={idx} section={section} />
          )
        )}
      </div>
 
      {/* Footer */}
      {/* <div className="border-t border-gray-100 py-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-800 transition-colors font-medium"
        >
          ← Back to all services
        </Link>
      </div> */}
    </main>
  );
}
 
/* ═══════════════════════════════════════════
   TEXT-ONLY SECTION
   Renders: optional intro → bold title → bullet or numbered list
═══════════════════════════════════════════ */
function TextSection({ section }) {
  const { title, intro, bullets = [], numbered = false } = section;
 
  return (
    <section className="space-y-5">
      {/* optional intro paragraph — plain body text, no heading style */}
      {intro && (
        <p className="text-gray-700 text-base leading-relaxed font-normal">
          {intro}
        </p>
      )}
 
      {/* section heading — bold, large, matches screenshots */}
      <h2 className="text-xl md:text-4xl font-extrabold text-gray-900 leading-snug">
        {title}
      </h2>

      {/* list */}
      {numbered ? (
        <ol className="space-y-2 pt-1">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                {i + 1}
              </span>
              <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2 pt-1">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              {/* teal diamond bullet matching the screenshots */}
              <span className="mt-2 shrink-0 w-2 h-2 rotate-45 bg-teal-400 rounded-xs" />
              <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
 
/* ═══════════════════════════════════════════
   TEXT + IMAGES SECTION
   - 1 image  → full-width below body text
   - 2 images → grid-cols-2
   - 3+ images → grid-cols-2 (wraps naturally)
═══════════════════════════════════════════ */
function TextImageSection({ section }) {
  const { title, body, images = [], bullets = [], numbered = false } = section;
  const multi = images.length >= 2;

  return (
    <section className="space-y-5">
      {/* optional section heading */}
      {title && (
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>
      )}
 
      {/* optional body / metadata text */}
      {body && (
        <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
          {body}
        </p>
      )}
 
      {numbered ? (
        <ol className="space-y-2 pt-1">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                {i + 1}
              </span>
              <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2 pt-1">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              {/* teal diamond bullet matching the screenshots */}
              <span className="mt-2 shrink-0 w-2 h-2 rotate-45 bg-teal-400 rounded-xs" />
              <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}  

      {/* images */}
      {images.length > 0 && (
        <div
          className={
            multi
              ? "grid grid-cols-2 gap-8"
              : "block"
          }
        >
          {images.map((img, i) => (
            <figure
              key={i}
              className="overflow-hidden"
            >
              <div
                className={`relative w-full ${
                  multi ? "h-56 md:h-180" : "h-72 md:h-200"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                  sizes={multi ? "50vw" : "100vw"}
                />
              </div>
              {/* {img.caption && (
                <figcaption className="px-4 py-2 text-xs text-gray-500 border-t border-gray-100 whitespace-pre-line">
                  {img.caption}
                </figcaption>
              )} */}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}